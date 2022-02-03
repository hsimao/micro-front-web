import { registerMicroApps, start } from '../../micro'
import { loading } from '../store'

export const registerApp = (list) => {
  // 註冊到微前端框架
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        loading.changeLoading(true)
        console.log('beforeLoad')
      },
    ],
    mounted: [
      () => {
        loading.changeLoading(false)
        console.log('mounted')
      },
    ],
    destoryed: [
      () => {
        console.log('destoryed')
      },
    ],
  })

  // 啟用微前端框架
  start()
}
