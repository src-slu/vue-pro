<template>
  <div class="car">
    <div class="car_header">
      <div class="car-header-return" @click="back">
        <span class="el-icon-arrow-left" />返回
      </div>
      <div class="car-header-title">结果详情</div>
      <div class="car-header-connect">
        <span class="el-icon-more"/>
      </div>
    </div>
    <div class="car_content">
      <div class="car_mpecot">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="car-mui-table-view-cell-aft carui-stop-detail-li-clear-padding">
            <!-- 付款信息区域 -->
            <div class="carui-order-detail-top-box">
              <span class="carui-order-detail-top-title"></span>
            </div>
            <div class="carui-order-detail-top-box">
              <img src="../../assets/result.jpg">
            </div>
            <!-- <div class="car_mpecotTBottom"> -->
            <div class="carui-order-detail-text-box">
              <div class="result">支付成功</div>
              <div class="money">100元</div>
              <div class="carui-order-detail-tips-box">
                <span>请于付款后15分钟内离场，超时将加收停车费</span>
              </div>
            </div>

            <!-- </div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    back() {
      const _this = this
      _this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.car_header {
  margin: 0.1rem 0.2rem;
  font-size: 0.4rem;
  height: 0.6rem;
}

.car-header-return {
   float: left;
  width: 33.3%;
  color: #108ee9;
  text-align: left;
  font-size: 0.34rem;
}

.car-header-title {
  float: left;
  width: 33.3%;
  font-weight: bold;
}

.car-header-connect {
  float: left;
  width: 33.3%;
  color: #108ee9;
  text-align: right;
  font-size: 0.34rem;
}

ul li {
  list-style: none;
  font-size: 17px;
  text-align: center;
}

img {
  height: 1.6rem;
  width: 1.6rem;
  text-align: center;
}

.carui-order-detail-top-money {
  height: 25%;
}
.carui-order-detail-text-box .result{
  color: dodgerblue;
  margin: 0.2rem;
  font-size: 0.37rem;
  font-weight: inherit;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.carui-order-detail-text-box .money{
  font-size: 0.43rem;
  font-weight: bold;
}
.carui-order-detail-tips-box {
  font-size: 0.34rem;
  margin: 0.4rem 0;
  color: #999;
  line-height: 0.32rem;
  height: 0.32rem;
}
</style>

