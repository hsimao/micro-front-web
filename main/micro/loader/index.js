import { fetchResource } from '../utils/fetchResource'

export const loadHtml = async (app) => {
  const subAppContainer = document.querySelector(app.container)

  if (!subAppContainer) {
    throw new Error('Container is empty!')
  }

  const html = await parseHtml(app.entry)
  subAppContainer.innerHTML = html

  return app
}

export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)
  const div = document.createElement('div')
  div.innerHTML = html

  // 標籤、link、script(src, js)
  await parseJs()
  return html
}

export const parseJs = async () => {
  return ['', '', '']
}
