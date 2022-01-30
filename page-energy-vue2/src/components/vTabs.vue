<template>
  <div class="energy-nav-container">
    <div
      v-for="(item, index) in tabList"
      :key="index"
      class="energy-nav-item"
      :class="{ 'energy-nav-item-active': currentNav === index }"
      @click="changeActiveItem(index)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTabs',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      navList: [
        {
          label: '推荐',
          value: 0
        },
        {
          label: '热门车系',
          value: 1
        },
        {
          label: '10万以下',
          value: 2
        },
        {
          label: '10-20万',
          value: 3
        },
        {
          label: '20-30万',
          value: 4
        },
        {
          label: '30万以上',
          value: 5
        }
      ],
      currentNav: 0
    }
  },
  computed: {
    tabList() {
      return this.list.length ? this.list : this.navList
    }
  },
  methods: {
    changeActiveItem(index) {
      this.currentNav = index
    }
  }
}
</script>

<style lang="scss">
.energy-nav {
  &-container {
    position: relative;
    display: flex;
    margin-top: 30px;
    padding-left: 24px;
    width: 100%;
    height: 32px;
    border-bottom: 1px solid #e4e4e4;
  }
  &-item {
    position: relative;
    display: flex;
    justify-content: center;
    margin-right: 50px;
    padding: 0 4px;
    height: 100%;
    color: #666;
    cursor: pointer;
  }
  &-item-active {
    color: #0091ff;
  }
  &-item-active:after {
    position: absolute;
    bottom: 0;
    display: block;
    width: 38px;
    height: 3px;
    background: #0091ff;
    content: '';
  }
}
</style>
