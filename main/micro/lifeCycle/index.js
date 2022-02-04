import { filterAppByRoute } from '../utils'
import { getMainLifecycle } from '../const/mainLifeCycle'
import { loadHtml } from '../loader'

export const lifecycle = async () => {
  // 取得上一個子應用
  // 取得要跳轉的子應用
  const prevApp = filterAppByRoute(window.__ORIGIN_APP__)
  const nextApp = filterAppByRoute(window.__CURRENT_SUB_APP__)

  if (!nextApp) return

  if (prevApp) {
    await destoryed(prevApp)
  }

  const app = await beforeLoad(nextApp)
  mounted(app)
}

export const beforeLoad = async (app) => {
  await runMainLifeCycle('beforeLoad')

  const subApp = await loadHtml(app)
  subApp && subApp.beforeLoad && subApp.beforeLoad()

  return subApp
}

export const mounted = async (app) => {
  app && app.mounted && app.mounted()
  await runMainLifeCycle('mounted')
}

export const destoryed = async (app) => {
  // 執行子應用的 destoryed
  app && app.destoryed && app.destoryed()

  // 執行主應用的 destoryed
  await runMainLifeCycle('destoryed')
}

export const runMainLifeCycle = async (type) => {
  const mainlife = getMainLifecycle()
  await Promise.all(mainlife[type].map(async (item) => await item()))
}
