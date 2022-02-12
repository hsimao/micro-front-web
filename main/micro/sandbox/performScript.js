export const performScriptForFunction = (script, appName, global) => {
  const scriptText = `
  ${script}
  return window['${appName}']
  `
  return new Function(scriptText).call(global, global)
}

// 執行 js 腳本完後, 從 window 取得 webpack 打包時設置的 library name 取得 app 生命週期方法
export const preformScriptForEval = (script, appName, global) => {
  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `

  return eval(scriptText).call(global, global)
}
