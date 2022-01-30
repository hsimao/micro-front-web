import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null

const render = () => {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

// NOTE: 當前若不是在微前端環境, 才直接執行 render()
if (!window.__MICRO_WEB__) {
  render()
}

// NOTE: 提供給微前端主框架調用的方法
export const bootstrap = () => {
  console.log('開始加載')
}

export const mount = () => {
  render()
  console.log('渲染成功')
}

export const unmount = () => {
  console.log('卸載', instance)
}
