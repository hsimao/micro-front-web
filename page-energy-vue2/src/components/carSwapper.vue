<template>
  <div class="car-swapper-container">
    <!-- 轮播图 -->
    <div class="car-swapper-detail">
      <!-- 图片展示 -->
      <div
        class="car-swapper-item"
        v-for="(item, index) in swapperList"
        :key="index"
        v-show="index === currentIndex"
      >
        <img :src="item" alt="" />
      </div>
      <!-- 左边按钮 -->
      <div
        class="car-swapper-left-arrow"
        @mouseenter="hoverArrow('leftHover', true)"
        @mouseleave="hoverArrow('leftHover', false)"
        @click="changeIndex(currentIndex - 1)"
      >
        <img src="../assets/gray-bg-left-arrow.png" alt="" v-if="!leftHover" />
        <img src="../assets/orange-bg-left-arrow.png" alt="" v-else />
      </div>
      <!-- 右边按钮 -->
      <div
        class="car-swapper-right-arrow"
        @mouseenter="hoverArrow('rightHover', true)"
        @mouseleave="hoverArrow('rightHover', false)"
        @click="changeIndex(currentIndex + 1)"
      >
        <img
          src="../assets/gray-bg-right-arrow.png"
          alt=""
          v-if="!rightHover"
        />
        <img src="../assets/orange-bg-right-arrow.png" alt="" v-else />
      </div>

      <!-- 底部下标 -->
      <div class="car-swapper-index">
        <span
          v-for="(item, index) in swapperList"
          :key="item"
          :class="
            currentIndex === index
              ? 'car-swapper-index-active'
              : 'car-swapper-index-normal'
          "
          @click="changeIndex(index)"
        >
          {{ index }}
        </span>
      </div>

      <!-- 底部广告栏 -->
      <div class="car-swapper-ad-wrapper">
        北京大兴奥迪A4L优惠高达5.5万元预购从速
      </div>
    </div>

    <!-- 新闻列表 -->
    <div class="car-swapper-news">
      <div class="car-swapper-news-title">
        配置升级 试驾2021款凯迪拉克XT5/XT6
      </div>

      <div
        v-for="(item, index) in textList"
        :key="index"
        class="car-swapper-news-item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'car-swapper',
  data() {
    return {
      swapperList: [
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3884457102,4018905964&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2329770250,1897745847&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=395380977,272417941&fm=26&gp=0.jpg'
      ],
      currentIndex: 0,
      leftHover: false,
      rightHover: false,
      textList: [
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗'
      ]
    }
  },
  methods: {
    changeIndex(index) {
      if (index < 0) {
        index = this.swapperList.length - 1
      }
      if (index > this.swapperList.length - 1) {
        index = 0
      }
      this.currentIndex = index
    },
    hoverArrow(key, type) {
      this[key] = type
    }
  }
}
</script>

<style lang="scss">
.car-swapper {
  &-container {
    display: flex;
    width: 100%;
    height: 354px;
  }
  &-detail {
    position: relative;
    width: 738px;
    height: 100%;
  }
  &-item {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &-left-arrow,
  &-right-arrow {
    position: absolute;
    top: 120px;
    width: 34px;
    height: 70px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &-left-arrow {
    left: 10px;
  }
  &-right-arrow {
    right: 10px;
  }
  &-ad-wrapper {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: #000000;
    color: #ffffff;
    font-size: 26px;
    opacity: 0.59;
  }
  &-index {
    position: absolute;
    bottom: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    width: 100%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 4px;
      width: 40px;
      height: 20px;
      color: #ffffff;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }
    &-active {
      background: #ff7819;
    }
    &-normal {
      background: #464646;
    }
  }
  &-news {
    flex: 1;
    margin-left: 40px;

    &-title {
      overflow: hidden;
      color: #333333;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 20px;
    }

    &-item {
      position: relative;
      overflow: hidden;
      margin-top: 20px;
      padding-left: 14px;
      height: 21px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
    }
    &-item:after {
      position: absolute;
      top: 7px;
      left: 0;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #c3c3c3;
      content: '';
    }
  }
}
</style>
