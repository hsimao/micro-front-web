import { getList } from '../const/subApps'

// 給當前路由跳轉打補丁
export const patchRouter = (globalEvent, eventName) => {
  return function () {
    const e = new Event(eventName)
    globalEvent.apply(this, arguments)
    window.dispatchEvent(e)
  }
}

export const getCurrentApp = () => {
  const currentUrl = window.location.pathname
  return filterApp('activeRule', currentUrl)
}

const filterApp = (key, value) => {
  const currentApp = getList().filter((item) => item[key] === value)
  return currentApp && currentApp.length ? currentApp[0] : false
}

export const filterAppByRoute = (router) => filterApp('activeRule', router)

// 子應用是否做了切換
export const isTurnChild = () => {
  const { pathname, hash } = window.location

  const url = pathname + hash
  const currentPrefix = url.match(/(\/\w+)/g)

  if (
    currentPrefix &&
    currentPrefix[0] === window.__CURRENT_SUB_APP__ &&
    hash === window.__CURRENT_HASH__
  ) {
    return false
  }

  // NOTE: pathname 有時候會出現 '/undefined'
  if (!pathname || pathname.includes('undefined')) {
    return false
  }

  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__

  if (window.__CURRENT_SUB_APP__ === pathname) {
    return false
  }

  const currentApp = pathname.match(/(\/\w+)/)

  if (!currentApp) {
    return false
  }

  window.__CURRENT_SUB_APP__ = currentApp[0]
  window.__CURRENT_HASH__ = hash

  return true
}
