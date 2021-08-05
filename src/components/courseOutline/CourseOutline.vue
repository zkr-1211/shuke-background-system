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
    Dot,
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
// ::v-deep .el-icon-arrow-right:before {
//   background-image: url(../../assets/image/course/right.svg);
//   background-repeat: no-repeat;
//   background-size: 0.28rem;
//   position: relative;
//   right: 5rem;
//   bottom: 0.03rem;
//   content: "\e6e";
//   border: none;
// }
// ::v-deep .el-collapse-item__arrow.is-active {
//   bottom: 0.03rem;
//   -webkit-transform: rotate(0);
//   transform: rotate(0);
//   background-image: url(../../assets/image/course/bottom.svg);
//   background-repeat: no-repeat;
//   background-size: 0.28rem;
//   position: relative;
//   right: 5rem;
//   content: "\e6e";
// }

.el-collapse-item {
  position: relative;
  ::v-deep .el-icon-arrow-right:before {
    background-image: url(../../assets/image/course/right.svg);
    background-repeat: no-repeat;
    background-size: 0.28rem;
    position: absolute;
    left: 15px;
    bottom: 24px;
    content: "\e6e";
    border: none;
    transition: all 10s;
  }
  ::v-deep .el-collapse-item__arrow.is-active {
    // bottom: 0.03rem;
    -webkit-transform: rotate(90);
    transform: rotate(90);
    background-image: url(../../assets/image/course/bottom.svg) !important;
    background-repeat: no-repeat;
    background-size: 0.28rem;
    position: absolute;
    left: 0px;
    top: 0;
    content: "\e6e";
    transition: all 0s;
  }
  .dot {
    position: absolute;
    right: 0.2rem;
    top: 0.15rem;
    // background-color: rgba(151, 3, 250, 1);
  }
}
.course-outline {
  width: 100%;
  height: 4.2rem;
  overflow-x: hidden;
  margin: 0 auto;
  .outline-item {
    width: 5.78rem;
    background: #ffffff;
    padding: 0.24rem 0.3rem 0rem 0.3rem;
    font-size: 0.16rem;
    line-height: 0.27rem;
    color: #666666;
  }
}
::v-deep .el-collapse-item__header {
  display: flex;
  align-items: center;
  line-height: 0.6rem;
  cursor: pointer;
  transition: border-bottom-color 0.3s;
  outline: 0;
  width: 100%;
  height: 0.6rem;
  background: #f6f6f8;
  font-size: 0.2rem;
  color: #333333;
  padding-left: 0.65rem;
  border: none;
  padding-right: 0.3rem;
}
</style>