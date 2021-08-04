<!--  -->
<template>
  <div class='body'>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-bar">
      <div class="title">
        <div class="name">分组情况</div>
      </div>
    </div>
    <div class="bottom">
      <div class="content-item">

        <HeaderTitle name="班级成员" />
        <div class="total">共100人</div>
        <div class="nav-title">
          <div class="people">成员</div>
          <div class="num-text">学号</div>

        </div>
        <div class="content">
          <div class="item" v-for="(item, index) in 30" :key="index" :class="index % 2 == 1 ? 'item-background' : ''">
            <div class="left-message">
              <div class="header"></div>
              <div class="name">张克榕</div>
            </div>
            <div class="num">182718144</div>
            <div class="dot3">
              <Dot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import Dot from "@/components/dot/Dot.vue";
export default {
  components: {
      HeaderTitle,
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
.top-bar {
  margin-top: 12px;
  width: 1584px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  .title {
    // background-color: #2a77ff;
    width: 100%;
    // height: 200px;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 34px;
    color: #666666;
    border-left: 8px solid #5592fe;
    .name {
      margin-left: 12px;
    }
  }
}
.bottom {
  margin-top: 40px;
  .content-item {
    width: 372px;
    height: 728px;
    background-color: #fff;
    position: relative;
    .total {
      font-size: 16px;
      color: #999999;
      position: absolute;
      top: 28px;
      left: 150px;
    }
    .nav-title {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: #666666;
      // width: 400px;
      height: 48px;
      // background: #977b7b;
      padding-left: 20px;
      // justify-content: space-between;
      .people {
        padding-left: 20px;
        // margin-left: 160px;
        // background-color: red;
      }
      .num-text {
        margin-left: 110px;
        // background-color: coral;
      }
    }
    .content {
      //   display: flex;
      height: 580px;
      overflow: auto;
      // width: 100%;
      .item {
        // background-color: chartreuse;
        // width: 100%;
        display: flex;
        align-items: center;
        padding-left: 40px;
        position: relative;
        height: 60px;
        font-size: 14px;
        color: #666666;
        .left-message {
          display: flex;
          align-items: center;
          .header {
            width: 32px;
            height: 32px;
            background-color: forestgreen;
            border-radius: 50%;
          }
          .name {
            margin-left: 12px;
          }
        }
        .num {
          margin-left: 53px;
        }
        .dot3 {
          position: absolute;
          top: 17px;
          right: 30px;
        }
      }
      .item-background {
        background-color: #fafafa;
      }
    }
  }
}
</style>