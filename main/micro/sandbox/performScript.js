export const performScriptForFunction = (script) => {
  new Function(script).call(window, window)
}

export const preformScriptForEval = (script) => {
  eval(script)
}
