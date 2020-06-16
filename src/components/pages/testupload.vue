
<template>

        <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :before-remove="beforeRemove"
            :before-upload="beforeUpload"
            :file-list="fileList"
            :auto-upload="false"
            multiple >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    
</template>

<script>
  export default {
    data() {
      return {
        fileList: []
        //   {
        //     name: 'food.jpeg', 
        //     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        //   }, 
        //  {
        //    name: 'food2.jpeg', 
        //    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        //   }
        // ]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      beforeRemove(file, fileList) {
        return this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: false
        })
      },
      handlePreview(file) {
        console.log(file.name);
      },
      beforeUpload(file){
        if(file !== null){
          // this.fileList = file
          // console.log("this.fileList : "+this.fileList)
          // this.fileList.forEach(element => {
          //   console.log("上传的文件：" + element.name)
          // });
        }
      }
    }
  }
</script>

<style scoped>
ul li{
  width: 60%;
}
</style>
