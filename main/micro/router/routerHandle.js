import { isTurnChild } from '../utils'
import { lifecycle } from '../lifeCycle'

export const turnApp = async () => {
  // NOTE: 避免重複觸發
  if (isTurnChild()) {
    // 微前端生命週期執行
    await lifecycle()
    console.log('路由切換了！')
  }
}
