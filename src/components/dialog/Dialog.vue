<!--  -->
<template>
  <div class="body">
    <el-dialog
      title=""
      :visible.sync="dialogVisible1"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>修改团队名称</h2>
      <input class="course-input" type="text" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="dialogVisible1 = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="isCreate()"
          >创 建</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogVisible1: false,
    };
  },
  computed: {},

  mounted() {},

  methods: {
      isCreate(){
          console.log("111")
          this.$emit('create')
          this.dialogVisible1 = false
      }
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-dialog__title {
     font-size: 0.2rem;
     font-weight: bold;
     line-height: 0.4rem;
     color: #2a77ff;
     margin-left: 0.43rem;
}
 h2 {
     position: absolute;
    top: 0.25rem;
     color: #000000;
     font-size: 0.2rem;
}
 .course-input {
     font-size: 0.2rem;
     color: #666666;
     padding: 0.1rem 0rem 0.1rem 0rem;
     width: 100%;
     border-bottom: 0.01rem solid #e0e0e0 !important;
     border: none;
}
 .cancel-button {
     border: none;
     background: #fff !important;
     box-shadow: 0 !important;
     font-size: 0.14rem;
     font-weight: bold;
     color: #666666;
     margin-right: 0.15rem;
}
 .el-button {
     margin-top: 0.4rem;
     background: #2a77ff;
     &:hover {
         background: #5592fe;
    }
     &:active {
         background: #2065e0;
    }
}
 // 删除样式 // .delete-text {
     // font-size: 0.14rem;
     // line-height: 0.02rem;
     // color: #666666;
     // 

 
</style>