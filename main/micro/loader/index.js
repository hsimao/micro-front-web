import { fetchResource } from '../utils/fetchResource'

export const loadHtml = async (app) => {
  const subAppContainer = document.querySelector(app.container)

  if (!subAppContainer) {
    throw new Error('Container is empty!')
  }

  const [dom, scripts] = await parseHtml(app.entry)
  console.log('scripts', scripts)
  subAppContainer.innerHTML = dom

  return app
}

export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)
  const div = document.createElement('div')
  div.innerHTML = html

  // 標籤、link、script(src, js)
  const [dom, scriptUrl, script] = await getResources(div, entry)

  const fetchedScripts = await Promise.all(
    scriptUrl.map((item) => fetchResource(item))
  )

  const allScript = script.concat(fetchedScripts)

  return [dom, allScript]
}

export const getResources = async (root, entry) => {
  const scriptUrl = []
  const script = []
  const dom = root.outerHTML

  function deepParse(element) {
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
        parent.replaceChild(
          document.createComment('此 js 文件已经被微前端替换'),
          element
        )
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
    }

    for (let i = 0; i < children.length; i++) {
      deepParse(children[i])
    }
  }

  deepParse(root)

  return [dom, scriptUrl, script]
}
