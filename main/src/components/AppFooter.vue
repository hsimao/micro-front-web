<template>
  <div class="main-footer-container">
    <div class="main-footer-content">
      <div class="main-footer-url">
        <span>選車嗎 © 2021 x.12345.com</span>
        公司地址: xx號xx樓xx層xxxx室
      </div>
      <div class="main-footer-phone">
        <span>聯絡電話: 010-00000000</span>
        <span>京ICP备88888888號</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss">
.main-footer {
  &-container {
    width: 100%;
    height: 100px;
    background: #f5f5f5;
  }
  &-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }
  &-url {
    margin-bottom: 10px;
    color: #9e9e9e;
    font-size: 14px;

    span {
      color: #a1a1a1;
      font-size: 16px;
    }
  }
  &-phone {
    color: #9e9e9e;
    font-size: 14px;
  }
}
</style>
