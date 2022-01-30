<template>
  <div class="energy-container">
    <div class="energy-content">
      <!-- 導航列表 -->
      <VTabs />
      <!-- 汽車展示列表 -->
      <CarList />
      <!-- 倫波圖 -->
      <CarSwapper />
      <!-- 廣告圖 -->
      <AdBanner />
      <!-- 車型列表 -->
      <NewsList />
    </div>
  </div>
</template>

<script>
import VTabs from '../components/vTabs.vue'
import CarList from '../components/carList.vue'
import CarSwapper from '../components/carSwapper.vue'
import AdBanner from '../components/adBanner.vue'
import NewsList from '../components/newsList.vue'

export default {
  name: 'Engrgy',
  components: {
    VTabs,
    CarList,
    CarSwapper,
    AdBanner,
    NewsList
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.energy {
  &-container {
    width: 100%;
  }
  &-content {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
