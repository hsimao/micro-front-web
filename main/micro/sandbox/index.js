import { preformScriptForEval } from './performScript'
import { ProxySanbox } from './proxySandbox'

const isCheckLifeCycle = (lifecycle) =>
  lifecycle && lifecycle.bootstrap && lifecycle.mount && lifecycle.unmount

export const sandBox = (app, script) => {
  const proxy = new ProxySanbox()

  if (!app.proxy) {
    app.proxy = proxy
  }

  // 環境變數設置
  window.__MICRO_WEB__ = true

  // 執行 js
  const lifecycle = preformScriptForEval(script, app.name, app.proxy.proxy)

  // 生命週期掛載到 app 上
  if (isCheckLifeCycle(lifecycle)) {
    app.bootstrap = lifecycle.bootstrap
    app.mount = lifecycle.mount
    app.unmount = lifecycle.unmount
  }
}
