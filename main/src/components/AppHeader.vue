<template>
  <div class="main-user-info-container">
    <div class="main-user-info-content">
      <div class="main-user-info-detail" @click="toLogin">
        <div class="main-user-info-portrait">
          <img src="../assets/city-position.png" alt="" />
        </div>
        <div class="main-user-info-text">
          <!-- 用戶名 -->
          Mars
        </div>
        <div class="main-user-info-arrow">
          <img src="../assets/gray-arrow.png" alt="" />
        </div>
      </div>
      <div class="main-user-info-city">
        <div class="main-user-info-position">
          <img src="../assets/city-position.png" alt="" />
        </div>
        <div class="main-user-info-text">
          <!-- 城市名稱 -->
          墨爾本
        </div>
        <div class="main-user-info-arrow">
          <img src="../assets/gray-arrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
<style lang="scss" scoped>
* img {
  width: 100%;
  height: 100%;
}
.main-user-info {
  &-container {
    width: 100%;
    height: 40px;
    background: #393939;
  }
  &-content {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    color: #ebebeb;
    font-size: 16px;
  }
  &-portrait {
    overflow: hidden;
    width: 26px;
    height: 26px;
    border: 1px solid transparent;
    border-radius: 50%;
    background: linear-gradient(to bottom, #90cfff, #58a1ff);

    img {
      background: white;
    }
  }
  &-detail,
  &-city {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7px;
    height: 5px;
  }
  &-position {
    width: 18px;
    height: 18px;
  }
  &-text {
    margin: 0 6px;
  }

  &-detail {
    position: relative;
    margin-right: 12px;
    padding-right: 12px;
  }
  &-detail:after {
    position: absolute;
    top: 10px;
    right: 0;
    width: 1px;
    height: 20px;
    background: #d8d8d8;
    content: '';
  }
}
</style>
