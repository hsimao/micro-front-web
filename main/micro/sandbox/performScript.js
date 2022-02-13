export const performScriptForFunction = (script, appName, global) => {
  window.proxy = global
  const scriptText = `
    return ((window) => {
      ${script}
      return window['${appName}']
    })(window.proxy)
  `
  return new Function(scriptText)()
}

// 執行 js 腳本完後, 從 window 取得 webpack 打包時設置的 library name 取得 app 生命週期方法
export const preformScriptForEval = (script, appName, global) => {
  window.proxy = global
  const scriptText = `
    ((window) => {
      ${script}
      return window['${appName}']
    })(window.proxy)
  `
  return eval(scriptText)
}
