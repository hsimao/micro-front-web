import { isTurnChild } from '../utils'

export const turnApp = async () => {
  // NOTE: 避免重複觸發
  if (isTurnChild()) {
    console.log('路由切換了！')
  }
}
