import Vue from 'vue'
import Router from 'vue-router'
import Energy from './views/Energy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/energy', // 新能源頁面
      name: 'Energy',
      component: Energy
    }
  ]
})
