import { fetchResource } from '../utils/fetchResource'
import { performScript } from '../sandbox/performScript'

export const loadHtml = async (app) => {
  const subAppContainer = document.querySelector(app.container)

  if (!subAppContainer) {
    throw new Error('Container is empty!')
  }

  const [dom, scripts] = await parseHtml(app.entry)
  subAppContainer.innerHTML = dom

  // 執行 script
  scripts.forEach((item) => {
    performScript(item)
  })

  return app
}

export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)
  const div = document.createElement('div')
  div.innerHTML = html

  // 標籤、link、script(src, js)
  const [dom, scriptUrl, script] = await getResources(div, entry)

  const fetchedScripts = await Promise.all(
    scriptUrl.map(async (item) => await fetchResource(item))
  )

  const allScript = script.concat(fetchedScripts)
  return [dom.outerHTML, allScript]
}

export const getResources = async (root, entry) => {
  const scriptUrl = []
  const script = []

  async function deepParse(element) {
    const children = element.children
    const parent = element.parentNode

    // 提取 script 標籤中的 js
    if (element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src')

      // 沒有 src 表示不是外連 js, 而是寫在 script 裡面的 js
      if (!src) {
        script.push(element.outerHTML)
      } else {
        if (src.startsWith('http')) {
          scriptUrl.push(src)
        } else {
          scriptUrl.push(`http:${entry}/${src}`)
        }
      }

      if (parent) {
        parent.replaceChild(document.createElement('script'), element)
      }
    }

    // 提取 link 標籤中的 js
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href')
      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptUrl.push(href)
        } else {
          scriptUrl.push(`http:${entry}/${href}`)
        }
      }

      if (parent) {
        parent.replaceChild(document.createElement('link'), element)
      }
    }

    // 將原本 script 移除替換掉
    for (let i = 0; i < children.length; i++) {
      children[i].replaceKey = `${i}-${Date.now()}`
      await deepParse(children[i])
    }
  }

  await deepParse(root)

  // 過濾掉重複 scriptUrl, 因為 link 可能跟 script 載入了重複腳本
  const uniqueScriptUrlList = [...new Set(scriptUrl)]

  return [root, uniqueScriptUrlList, script]
}
