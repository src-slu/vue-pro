<template>
  <div class="my_dialog">
    <div class="car_content">
      <div class="car_mpecot">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="car-mui-table-view-cell-aft">
            <div class="carui-order-detail-top-money">
              <span class="char">￥</span>{{param.money}}
            </div>
            <div class="car_mpecotTBottom">
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL">订单信息</span>
                <!-- <span class="car_mpecotTR" :carNumber = "carNumber">停车在线缴费-{{carNumber}}</span> -->
                <span class="car_mpecotTR">停车在线缴费-{{param.carNumber}}</span>
              </div>
               <div class="carui-order-detail-text-box" @click="getWays">
                <span class="car_mpecotTL">付款方式</span>
                <span class="car_mpecotTR">花呗
                 <!-- <el-collapse-transition>
                    <el-dialog :visible.sync="dialogTableVisible" width="100%" :modal-append-to-body="false">
                      <div slot="title" class="el-dialog-title">
                        付款方式
                      </div> 
                      <ways-dialog ref="waysDialog" @listen="payWays"></ways-dialog>
                    </el-dialog>
                  </el-collapse-transition>-->
                  <span class="el-icon-arrow-right"/>
                </span> 
              </div> 
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="dialog-footer">
      <button class="confirmBtn" @click="submitForm">立即付款</button>
    </div>-->
    <span class="dialog-footer">
      <!-- <el-button @click="centerDialogVisible = false">取 消</el-button> -->
      <el-button type="primary" class="confirmBtn" v-on:click="submitForm">立即付款</el-button>
    </span>
  </div>
</template>

<script>
import axios from "axios";
import { error } from "util";
import waysDialog from "../common/WaysDialog";

export default {
  props: {
    // 父组件传来的值
    params: {}
  },
  name: "MyDialog", //这个Dialog最好和引入的vue的Dialog相同
  components: {
    waysDialog
  },
  data() {
    return {
      // 子组件接收的值
      param: this.params,
      dialogTableVisible: false
      // ways: [],
      // options: [
      //   {
      //     value: "huabei",
      //     label: "花呗"
      //   },
      //   {
      //     value: "cards",
      //     label: "银行卡支付",
      //     children:[{
      //       value:"BOC",
      //       label:"中国银行"
      //     },
      //     {
      //       value:"CCB",
      //       label:"建设银行"
      //     },
      //     {
      //       value:"ICBC",
      //       label:"工商银行"
      //     },
      //     {
      //       value:"ABC",
      //       label:"农业银行"
      //     },
      //     {
      //       value:"PSBC",
      //       label:"中国邮政储蓄银行"
      //     }]
      //   }
      // ]
    };
    // };
  },

  methods: {
    submitForm() {
      const _this = this;
      axios
        .post("/")
        .then(response => {
          _this.$router.push("/result");
        })
        .catch(error => {
          _this.$router.push("/result");
          // alert("支付失败")
        });
    },
    getWays(){
      const _this = this
      _this.dialogTableVisible = true
    },
    payWays(){
      
    }
    // init(param){
    //   console.log(param)
    //   _this.money = param.money
    //   _this.carNumber = param.carNumber
    // }
  },
  created() {
    // init(params)
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
ways-dialog{
  margin-bottom: 0;
  height: 70%;
}
</style>

