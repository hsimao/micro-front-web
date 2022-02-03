import { registerMicroApps, start } from '../../micro'
import { loading } from '../store'

export const registerApp = (list) => {
  // 註冊到微前端框架
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        loading.changeLoading(true)
        console.log('Main beforeLoad')
      },
    ],
    mounted: [
      () => {
        loading.changeLoading(false)
        console.log('Main mounted')
      },
    ],
    destoryed: [
      () => {
        console.log('Main destoryed')
      },
    ],
  })

  // 啟用微前端框架
  start()
}
