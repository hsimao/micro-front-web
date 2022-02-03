import { setList, getList } from './const/subApps'
import { currentApp } from './utils'
import { rewriteRouter } from './router/rewriteRouter'

// 路由攔截
rewriteRouter()

export const registerMicroApps = (appList) => {
  setList(appList)
}

export const start = () => {
  const apps = getList()

  if (!apps.length) {
    throw Error('Micro app list is empty!')
  }

  const app = currentApp()

  if (app) {
    const { pathname, hash } = window.location
    const url = `${pathname}${hash}`
    window.history.pushState('', '', url)
  }

  // NOTE: 拿來阻擋重複觸發微服務路由邏輯用
  window.__CURRENT_SUB_APP__ = app.activeRule
}
