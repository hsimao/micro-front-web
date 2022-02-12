export const performScriptForFunction = (script, appName) => {
  const scriptText = `
  ${script}
  return window['${appName}']
  `
  return new Function(scriptText).call(window, window)
}

// 執行 js 腳本完後, 從 window 取得 webpack 打包時設置的 library name 取得 app 生命週期方法
export const preformScriptForEval = (script, appName) => {
  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `

  return eval(scriptText).call(window, window)
}
