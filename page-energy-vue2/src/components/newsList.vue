<template>
  <div class="new-list-rank-container">
    <div class="new-list-container">
      <VTabs :list="tabList" />

      <div class="new-list-enum">
        <div
          class="new-list-item"
          v-for="(item, index) in newList"
          :key="index"
        >
          <div class="new-list-item-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="new-list-item-text">
            <div class="new-list-item-title">{{ item.title }}</div>
            <div class="new-list-item-observer">
              <span>
                <img src="../assets/observer.png" alt="" />
                {{ item.number }}
              </span>
              <span>
                {{ item.type }}
              </span>
            </div>
          </div>
        </div>

        <div class="new-list-last">- 到底了 -</div>
      </div>
    </div>

    <!-- 右侧排行榜 -->
    <div class="energy-rank">
      <div class="energy-rank-type">
        <div class="energy-rank-title">
          新能源体验
        </div>
        <div class="energy-rank-select-wrapper">
          <div class="energy-rank-select-item">
            请选择品牌
            <img src="../assets/gray-arrow.png" alt="" />
          </div>
          <div class="energy-rank-select-item">
            请选择车系
            <img src="../assets/gray-arrow.png" alt="" />
          </div>
          <div class="energy-rank-select-button">查底价</div>
        </div>
      </div>
      <div class="energy-rank-type">
        <div class="energy-rank-title">
          新能源销量
        </div>

        <div class="energy-rank-list">
          <div v-for="(item, index) in rankList" :key="index">
            <span
              class="energy-rank-number"
              :class="{ [`energy-rank-number-${index}`]: index <= 2 }"
              >{{ index + 1 }}</span
            >
            <img :src="item.img" alt="" />
            <div class="energy-rank-content">
              <div>{{ item.name }}</div>
              <div>
                <span>{{ item.number }}台</span> / {{ item.time }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTabs from './vTabs.vue'
const rankCar = require('../assets/rank-car.png')
export default {
  name: 'newsList',
  components: {
    VTabs
  },
  data() {
    return {
      tabList: [
        {
          label: '推荐',
          value: 0
        },
        {
          label: '视频',
          value: 1
        },
        {
          label: '新闻',
          value: 2
        },
        {
          label: '试驾',
          value: 3
        },
        {
          label: '导购',
          value: 4
        },
        {
          label: '评测',
          value: 5
        },
        {
          label: '用车',
          value: 6
        }
      ],
      newList: [
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title:
            '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title:
            '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title:
            '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title:
            '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title:
            '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title:
            '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1695163309,2577846378&fm=26&gp=0.jpg',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        }
      ],
      rankList: [
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        },
        {
          img: rankCar,
          name: '哈弗H6',
          number: '1111',
          time: '近1年'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.new-list-rank-container {
  display: flex;
  width: 100%;
}
.new-list {
  &-container {
    width: 738px;
  }
  &-enum {
    margin: 30px 0;
  }
  &-item {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    height: 188px;
    border-bottom: 1px solid #eeeeee;

    &-img {
      margin-right: 20px;
      width: 224px;
      height: 168px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    &-text {
      flex: 1;
      color: #333333;
      font-size: 24px;
    }
    &-observer {
      display: flex;
      align-items: center;
      margin-top: 30px;
      color: #b5b5b5;
      font-size: 14px;

      span {
        display: flex;
        align-items: center;

        img {
          margin-right: 4px;
          width: 18px;
          height: 18px;
        }
      }
      span:last-child {
        margin-left: 20px;
      }
    }
  }
  &-last {
    display: flex;
    justify-content: center;
    margin: 0 0 132px;
    width: 100%;
    color: #888888;
    font-size: 20px;
  }
}
.energy {
  &-rank {
    flex: 1;
    margin-top: 30px;
    margin-left: 40px;

    &-type {
      margin-bottom: 60px;
    }
    &-title {
      position: relative;
      color: #333333;
      font-weight: bold;
      font-size: 20px;
    }
    &-title:after {
      position: absolute;
      right: 0;
      bottom: 4px;
      display: block;
      width: 312px;
      height: 1px;
      background: #eeeeee;
      content: '';
    }
    &-select {
      &-wrapper {
        margin-top: 30px;
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 370px;
          height: 38px;
          font-size: 14px;
        }
      }

      &-item {
        margin-bottom: 12px;
        border: 1px solid #d0d0d0;
        color: #666666;

        img {
          margin-left: 6px;
          width: 7px;
          height: 5px;
        }
      }
      &-button {
        margin-top: 20px;
        border-radius: 4px;
        background: #0091ff;
        color: white;
        font-size: 20px;
      }
    }
    &-list {
      margin-top: 30px;

      & > div {
        position: relative;
        display: flex;
        margin-bottom: 10px;
        padding-left: 56px;
        width: 100%;
        height: 105px;

        img {
          width: 140px;
          height: 105px;
        }
      }
    }

    &-number {
      position: absolute;
      top: 19px;
      left: 20px;
      color: #b2b2b2;
      font-weight: 600;
      font-size: 42px;
    }
    &-number-0 {
      color: #fe4520;
    }
    &-number-1 {
      color: #ff691a;
    }
    &-number-2 {
      color: #fbc658;
    }
    &-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;

      div:first-child {
        margin-bottom: 11px;
        color: #333333;
        font-weight: bold;
        font-size: 20px;
      }
      div:last-child {
        color: #949494;
        font-size: 17px;
        span {
          color: #f24300;
        }
      }
    }
  }
}
</style>
