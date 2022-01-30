<template>
  <div class="micro-main-body-loading-wrapper">
    <div class="micro-main-body-loading">
      <img src="../assets/loading.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style lang="scss">
.micro-main-body-loading {
  position: absolute;
  width: 112px;
  height: 84px;

  user-select: none;

  &-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
