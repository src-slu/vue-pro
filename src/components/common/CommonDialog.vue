<template>
  <div>
    <!-- <el-button round @click="submitForm()">确认付款</el-button> -->
    <!-- 仔细阅读Dialog的各个属性参数，会影响到布局排版，
  例如遇到了一个大坑就是没有设置:append-to-body='true'，导致遮罩遮盖整个页面，
  :lock-scroll="false"没有设置的话，点击前后会感觉到头部导航栏的移动，体验性很不好！！
    还有设置dialog的宽度width="40%"前面不用加冒号：-->
    <!-- <el-dialog title="确认付款" :visible.sync="dialogTableVisible" center :append-to-body="true" :lock-scroll="false" width="100%"> -->
    <!-- <el-dialog
      :title="params.title"
      :visible.sync="dialogTableVisible"
      center
      :lock-scroll="false"
      width="100%"
    >
      <my-dialog ref="myDialog" :carNumber="params.carNumber"></my-dialog>
    </el-dialog> -->
    <!-- <div>
      <x-dialog></x-dialog>
    </div> -->
  </div>
</template>


<script>
// 局部注册组建
import MyDialog from "../../components/common/MyDialog";
// import { XDialog } from "vux";

export default {
  name: "CommonDialog",
  components: {
     MyDialog
    // XDialog
  },
  props: [
    "params"
    // "title"
  ],

  data() {
    return {
      dialogTableVisible: false,
      title: "",
      carNumber: ""
    };
  },
  methods: {
    init() {
      this.dialogTableVisible = true; //默认页面不显示为false,点击按钮将这个属性变成true
      // this.title = title
      // console.log("123"+params)
      this.$nextTick(() => {
        // this.title = title;
        // this.carNumber = params.carNumber;
        // this.title = params.title;
        // this.money = params.money;
        // this.dialogTableVisible = isShow;
        // this.title = params.title
        // this.carNumber = params.carNumber
        // console.log()
        // alert("param.title:"+ params.title)
      });
    },
    // listen() {
    //   // var params = {};
    //   //其中listen-add-user即为父窗口申明时所用的@listen-add-user
    //   this.$emit("listen", params);
    // },
    closed() {
      this.$refs["PayDetail"].resetFields(); //清空form
    }
  },
  created() {
    this.init();
  }
};
</script>