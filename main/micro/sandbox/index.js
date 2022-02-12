import { performScriptForFunction } from './performScript'

const isCheckLifeCycle = (lifecycle) =>
  lifecycle && lifecycle.bootstrap && lifecycle.mount && lifecycle.unmount

export const sandBox = (app, script) => {
  // 環境變數設置
  window.__MICRO_WEB__ = true

  // 執行 js
  const lifecycle = performScriptForFunction(script, app.name)

  // 生命週期掛載到 app 上
  if (isCheckLifeCycle(lifecycle)) {
    app.bootstrap = lifecycle.bootstrap
    app.mount = lifecycle.mount
    app.unmount = lifecycle.unmount
  }
}
