import { patchRouter } from '../utils'
import { turnApp } from './routerHandle'

// 重寫 window 的路由跳轉
export const rewriteRouter = () => {
  window.history.pushState = patchRouter(window.history.pushState, 'micro_push')
  window.history.replaceState = patchRouter(
    window.history.replaceState,
    'micro_replace'
  )

  window.addEventListener('micro_push', turnApp)
  window.addEventListener('micro_replace', turnApp)

  // // 監聽網頁返回事件
  window.onpopstate = async function () {
    await turnApp()
  }
}
