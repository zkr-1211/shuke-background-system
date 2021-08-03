<!--  -->
<template>
  <div class='body'>
    <div class="course-outline">
      <el-collapse v-model="activeName" accordion @change="changeCollapse">
        <el-collapse-item :name="index" v-for="(item, index) in 5" :key="index">
          <template slot="title">
            <div class="title">第一章：Python</div>
            <div class="dot">
              <Dot />
            </div>
          </template>

          <div class="outline-item" v-for="(item1, index1) in item" :key="index1">
            第一节：什么是web程序应用
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import Dot from "@/components/dot/Dot.vue";
export default {
  components: {
      Dot
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
::v-deep .el-icon-arrow-right:before {
  background-image: url(../../assets/image/course/right.svg);
  background-repeat: no-repeat;
  background-size: 28px;
  position: relative;
  right: 500px;
  bottom: 3px;
  content: "\e6e";
  border: none;
}
::v-deep .el-collapse-item__arrow.is-active {
  bottom: 3px;
  -webkit-transform: rotate(0);
  transform: rotate(0);
  background-image: url(../../assets/image/course/bottom.svg);
  background-repeat: no-repeat;
  background-size: 28px;
  position: relative;
  right: 500px;
  content: "\e6e";
}
.el-collapse-item {
  position: relative;
  .dot {
    position: absolute;
    right: 20px;
    top: 15px;
    // background-color: rgba(151, 3, 250, 1);
  }
}
.course-outline {
  width: 578px;
  height: 420px;
  overflow-x: hidden;
  margin: 0 auto;
  .outline-item {
    width: 578px;
    background: #ffffff;
    padding: 24px 30px 0px 30px;
    font-size: 16px;
    line-height: 27px;
    color: #666666;
  }
}
::v-deep .el-collapse-item__header {
  display: flex;
  align-items: center;
  line-height: 60px;
  cursor: pointer;
  transition: border-bottom-color 0.3s;
  outline: 0;
  width: 578px;
  height: 60px;
  background: #f6f6f8;
  font-size: 20px;
  color: #333333;
  padding-left: 65px;
  border: none;
  padding-right: 30px;
}
</style>