<template>
  <div class="main-nav-container">
    <div class="main-nav-content">
      <!-- logo 內容 -->
      <div class="main-nav-logo">
        <img src="" alt="" />
      </div>

      <!-- 導航列表 -->
      <div class="main-nav-list">
        <div
          v-for="(item, index) in NAV_LIST"
          :class="{ 'main-nav-active': currentIndex === index }"
          :key="index"
          @click="setCurrentIndex(item, index)"
        >
          {{ item.name }}
        </div>
      </div>

      <!-- 搜尋 -->
      <div class="main-nav-search">
        <div class="main-nav-search-icon">
          <img src="../assets/blue-search.png" alt="" />
        </div>
        <div class="main-nav-search-input">
          <input
            type="text"
            id="main-nav-search"
            v-if="searchStatus"
            @blur="setSearchStatus(false)"
          />
          <div
            class="main-nav-search-input-fake"
            v-else
            @click="setSearchStatus(true)"
          >
            快速搜尋
          </div>
        </div>
        <div class="main-nav-search-button">搜尋</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { NAV_LIST } from '../const/nav'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'MainNav',
  setup() {
    const router = useRouter()
    const route = useRoute()

    watch(
      route,
      (val) => {
        for (let i = 0; i < NAV_LIST.length; i++) {
          if (val.fullPath.indexOf(NAV_LIST[i].url) !== -1) {
            currentIndex.value = i
          }
        }
      },
      { deep: true }
    )

    const currentIndex = ref(0)

    const searchStatus = ref(true)
    const setCurrentIndex = (data, index) => {
      if (data.url === route.fullPath) {
        return
      }
      currentIndex.value = index
      router.push(data.url)
    }

    const setSearchStatus = (type) => {
      searchStatus.value = type
    }
    return {
      NAV_LIST,
      currentIndex,
      setCurrentIndex,
      searchStatus,
      setSearchStatus,
    }
  },
}
</script>
<style lang="scss" scoped>
* img {
  width: 100%;
  height: 100%;
}
.main-nav {
  &-content {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }
  &-container {
    width: 100%;
    height: 90px;
    background: linear-gradient(180deg, #3c6afb 0%, #75cdff 100%);
  }
  &-logo {
    width: 108px;
    height: 48px;
    opacity: 0;
  }
  &-list {
    display: flex;
    margin: 0 136px 0 132px;
    height: 100%;
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;

    user-select: none;

    & > div {
      position: relative;
      display: flex;
      align-items: center;
      margin-right: 30px;
      height: 100%;
      cursor: pointer;
    }
    & > div:last-child {
      margin-right: 0;
    }
  }
  &-active:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: #f7b500;
    content: '';
  }
  &-search {
    position: relative;
    width: 260px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(90deg, #f4f8ff 0%, #e0ebff 100%) #ffffff;

    &-icon {
      position: absolute;
      top: 11px;
      left: 21px;
      width: 20px;
      height: 20px;
    }

    &-input {
      position: absolute;
      left: 41px;
      width: 170px;
      height: 100%;

      &-fake {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding-left: 6px;
        width: 100%;
        height: 100%;
        color: #61aee9;
      }

      input {
        padding-left: 6px;
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        background: transparent;
        font-size: 16px;
      }
    }

    &-button {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 40px;
      border-radius: 0px 8px 8px 0px;
      background: linear-gradient(90deg, #f4f8ff 0%, #e0ebff 100%) #e0ebff;
      color: #0091ff;
      font-size: 14px;
      line-height: 19px;
    }
  }
}
</style>
