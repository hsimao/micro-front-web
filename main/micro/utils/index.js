import { getList } from '../const/subApps'

// 給當前路由跳轉打補丁
export const patchRouter = (globalEvent, eventName) => {
  return function () {
    const e = new Event(eventName)
    globalEvent.apply(this, arguments)
    window.dispatchEvent(e)
  }
}

export const currentApp = () => {
  const currentUrl = window.location.pathname
  return filterApp('activeRule', currentUrl)
}

const filterApp = (key, value) => {
  const currentApp = getList().filter((item) => item[key] === value)
  return currentApp && currentApp.length ? currentApp[0] : {}
}

// 子應用是否做了切換
export const isTurnChild = () =>
  window.__CURRENT_SUB_APP__ !== window.location.pathname
