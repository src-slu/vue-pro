<template>
  <div style="text-align: center; margin-bottom: 1rem;">
    <el-button class="confirmBtn" v-if="dialogStatus === pay" @click="pay('form')">立即付款</el-button>
    <!-- <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')">确 定</el-button> -->
    <!-- <el-button v-else type="primary" @click="update('form')">确 定</el-button> -->
  </div>
</template>

<script>
export default {
    data(){
       return{
          dialogStatus: ''
       }
  }
}
</script>

    
    
<style scoped>
.confirmBtn {
	width: 6.86rem;
    height: 0.94rem;
    background: #108EE9;
    border-radius: 4px;
    color: #FFF;
    border: 0;
    margin-left: 0.32rem;
    font-size: 0.36rem;
    font-family: PingFangSC-Regular;
}

.car_mpecotTL {
  float: left;
  font-size: 15px;
  color: #888888;
}

.car_mpecotTR {
  float: right;
  color: #000000;
  font-size: 15px;
}
</style>