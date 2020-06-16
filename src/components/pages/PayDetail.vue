<template>
  <div class="car">
    <div class="car_header">
      <div class="car-header-return" @click="back">
        <span class="el-icon-arrow-left"/>返回
      </div>
      <div class="car-header-title">车费详情</div>
      <div class="car-header-connect">联系客服</div>
    </div>
    <div class="car_content">
      <div class="car_mpecot">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="car-mui-table-view-cell-aft carui-stop-detail-li-clear-padding">
            <!-- 付款信息区域 -->
            <div class="carui-order-detail-top-box">
              <span class="carui-order-detail-top-title">{{orders.busStop}}</span>
            </div>
            <div class="carui-order-detail-top-money">{{orders.money}}&nbsp;元</div>
            <div class="carui-order-detail-top-deal-status">待付款</div>
            <div class="car_mpecotTBottom">
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL">应付金额</span>
                <span class="car_mpecotTR">{{orders.amount}}</span>
              </div>
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL">已付金额</span>
                <span class="car_mpecotTR">{{orders.payAlready}}</span>
              </div>
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL">优惠金额</span>
                <span class="car_mpecotTR">{{orders.discount}}</span>
              </div>
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL">车牌号码</span>
                <span class="car_mpecotTR">{{orders.carNumber}}</span>
              </div>
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL">入场时间</span>
                <span class="car_mpecotTR">{{orders.entrance}}</span>
              </div>
              <div class="carui-order-detail-text-box">
                <span class="car_mpecotTL">停车时长</span>
                <span class="car_mpecotTR">{{orders.consuming}}</span>
              </div>

              <!-- 
              注：这里是按钮灰化的效果
							<div class="carui-order-detail-text-box">
							<span class="car_mpecotTL">订单编号</span>
							<span class="car_mpecotTR">46dc85w928cad44579c6879</span>
              </div>
              -->
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="carui-order-detail-tips-box">
      <img src="../../assets/han.png">
      <span>请于付款后15分钟内离场，超时将加收停车费</span>
    </div>
    <div class="carui-order-detail-button-box">
      <button class="confirmBtn" @click="showDialog">立即付款</button>
      <!-- <show-dialog :value="isShow"></show-dialog> -->
      <!--
			<button class="confirmBtn unable">已支付</button></div>
      -->
    </div>
    <el-collapse-transition>
      <!-- <el-dialog :title="params.title" :visible.sync="dialogTableVisible" width="100%"> -->
        <el-dialog :visible.sync="dialogTableVisible" width="100%"> 
        <div slot="title" class="el-dialog-title">
          <div class="el-icon-close" style="float: left;" @click="closeDialog"></div>{{params.title}}
          <div style="float: right;" class="el-icon-question"></div>
        </div>
        <my-dialog ref="MyDialog" :params="params"></my-dialog>
      </el-dialog>
    </el-collapse-transition>
  </div>
</template>

<script>
import axios from "axios";
//import CommonDialog from '../../components/common/CommonDialog'
import MyDialog from "../../components/common/MyDialog";
// import Header from '../../components/common/Header'

const options = {
  lock: true,
  text: "Loading",
  spinner: "el-icon-loading",
  background: "rgba(0, 0, 0, 0.5)"
};

export default {
  name: "PayDetail",
  components: {
    // Dialog: () => import("../../components/common/Dialog.vue"),
    //CommonDialog
    MyDialog
  },
  data() {
    return {
      isShow: false,
      dialogTableVisible: false,
        // 定义本地orders，用于接收ajax数据
      orders: {
        busStop: "xxxx停车场",
        money: "30.00", //金额
        amount: "30.00", // 应付金额
        payAlready: "30.00", // 已付
        discount: "0.00", // 优惠
        carNumber: "沪A ***21",
        entrance: "2019-01-01 12:24:43", // 入场时间
        consuming: "3小时23分"
      },
      params: {
        title: "确认付款",
        money: "",
        carNumber: ""
      }
    };
  },
  methods: {
    getDetail() {
      // console.log("carNumber ===>"+_this.orders)
      // let loadingInstance = Loading.service(options);
      this.params.money = this.orders.money
      this.params.carNumber = this.orders.carNumber
      axios
        .get("/")
        .then(response => {
          // then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)
          // var orderList = response;
          // console.log(response);
          // 直接赋值
          // this.orders = response.data;
          // alert("ajax get success!");
        })
        .catch(error => {
          // window.wm.$nextTick(() => {
          // loadingInstance.close();
          // });
          alert("ajax 网络请求失败");
        });
    },

    showDialog() {
      //this.isShow = true //点击后显示弹窗
      this.dialogTableVisible = true;
      //  let param = {
      //   money: this.money,
      //   title: this.title,
      //   isShow:this.isShow
      // }
      // console.log("pay" + param)
      this.$nextTick(() => {
        //初始化子组件，可以传参过去，由子组件的init()方法接收处理，
        //通过ref的值commonDialog可以访问到子组件的属性方法
        // this.$refs.MyDialog.init(params)
      });
      //  this.$emit()
    },
    closeDialog() {
      //父窗口接收子窗事件的回调的方法
      //this.$refs.commonDialog.dialogTableVisible = false
      this.dialogTableVisible = false;
    },
      back(){
        const _this = this
        _this.$router.go(-1)
      }
  },
  /**加载时调用的方法 */
  created() {
    this.getDetail();
  }
};
</script>

<style>
.car_header {
  margin: 0.1rem 0.2rem;
  font-size: 0.4rem;
  background-color: #f5f5f9;
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
  vertical-align: middle;
}

.car-header-connect {
  float: left;
  width: 33.3%;
  color: #108ee9;
  text-align: right;
  font-size: 0.34rem;
}

.el-dialog {
  position: absolute;
  bottom: 0;
  margin: 0;
}

.el-dialog__headerbtn {
  display: none;
}

.el-dialog-title {
  font-size: 0.4rem;
}
</style>
