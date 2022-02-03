import { setList } from './const/subApps'
import { rewriteRouter } from './router/rewriteRouter'

// 路由攔截
rewriteRouter()

export const registerMicroApps = (appList) => {
  setList(appList)
}
