<template>
  <div class="car-list-container">
    <div v-for="(item, index) in carList" class="car-list-item" :key="index">
      <img :src="item.img" alt="" />
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'carList',
  data() {
    return {
      carList: []
    }
  },
  methods: {
    async getCarList() {
      try {
        const res = await axios.get(
          'http://localhost:3000/vue2/car/list?a=1&b=2'
        )
        this.carList = res.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted() {
    this.getCarList()
  }
}
</script>

<style lang="scss">
.car-list {
  &-container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    width: 100%;
    height: 153px;
  }
  &-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 128px;
    color: #333333;
    font-size: 14px;

    img {
      width: 128px;
      height: 96px;
    }
  }
}
</style>
