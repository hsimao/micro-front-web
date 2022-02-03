<template>
  <AppHeader />
  <MainNav />
  <div class="sub-container">
    <Loading v-if="loading" />
    <div v-else id="micro-container">子應用內容</div>
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import MainNav from '@/components/MainNav'
import Loading from '@/components/Loading'

import { loading } from './store'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    MainNav,
    Loading,
  },
  setup() {
    return { loading: loading.loadingStatus }
  },
}
</script>

<style>
html,
body,
#micro_web_main_app {
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.sub-container {
  position: relative;
  min-height: 100%;
}

#micro-container {
  min-height: 100%;
  width: 100%;
}
</style>
