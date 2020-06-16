<template>
  <div class="my_dialog">
    <div class="car_content">
      <div class="car_mpecot">
        <ul class="mui-table-view mui-table-view-chevron">
          <div class="car_mpecotTBottom">
            <li class="car-mui-table-view-cell-aft" v-for="item in ways">
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL" @click="choose">{{item.label}}</span>
                <span class="car_mpecotTL" v-show="choosed" v-if="item.children !== null" v-for="card in item.children" @click="showCards">
                     <li class="car-mui-table-view-cell-aft">
                         <div class="carui-order-detail-text-box">
                         <span class="car_mpecotTL">{{card.label}}</span>
                         </div>
                     </li>
                    {{card.label}}
                </span>
                <span class="car_mpecotTR">
                  <span class="el-icon-arrow-right"/>
                </span>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const _this = this
export default {
  name: "WaysDialog", //这个Dialog最好和引入的vue的Dialog相同
  data() {
    return {
      index: 0,
      choosed: false,
      way: "",
      ways: [
        {
          value: "huabei",
          label: "花呗"
        },
        {
          value: "smallchange",
          label: "零钱"
        },
        {
          value: "balance",
          label: "余额宝"
        },
        {
          value: "cards",
          label: "银行卡支付",
          children: [
            {
              value: "BOC",
              label: "中国银行"
            },
            {
              value: "CCB",
              label: "建设银行"
            },
            {
              value: "ICBC",
              label: "工商银行"
            },
            {
              value: "ABC",
              label: "农业银行"
            },
            {
              value: "PSBC",
              label: "中国邮政储蓄银行"
            }
          ]
        }
      ]
    };
  },

  methods: {
      choose(){
         
        //  console.log(_this.ways[index])
         _this.$emit("listen",_this.ways.way.label)
      },
      showCards(){
          this.choosed = true
      }
  }
};
</script>

<style scoped>
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(10%, 100%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}
.carui-order-detail-text-box{
    font-size: 0.45rem;
    margin: 0;
}
.car-mui-table-view-cell-aft {
  margin-top: 0rem;
}
.carui-order-detail-top-money {
  color: #000;
}
.carui-order-detail-top-money span {
  font-size: 0.41rem;
  /* font-weight: bolder; */
  color: #000;
  margin: 0;
}
</style>

