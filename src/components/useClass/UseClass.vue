<!--  -->
<template>
  <div class="body">
    <TopBar :name="name" />
    <div class="right-bottom-content">
      <div class="item" v-for="(item, index) in 10" :key="index">
        <div class="class">19数字媒体技术</div>
        <div class="remove">移除</div>
        <div class="dot">
          <Dot />
        </div>
      </div>
    </div>
    <div class="add">
      <div class="icon">
        <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
      </div>
      <div class="text">添加班级</div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/topBar/TopBar";
import Dot from "@/components/dot/Dot";
export default {
  components: {
      TopBar,
      Dot
  },
    props: {
    name: {
      type: String,
      default: "默认标题",
    },
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
.right-bottom-content {
  padding: 0px 20px 20px 20px;
  // width: 380px;
  height: 400px;
  background: #ffffff;
  opacity: 1;
  overflow-y: auto;
  overflow-x: hidden;
  .item {
    padding: 20px;
    display: flex;
    align-items: center;
    // background-color: red;
    position: relative;
    // width: 380px;
    height: 60px;
    // background: #edeff3;
    opacity: 1;
    justify-content: space-between;
    &:hover {
      background: #edeff3;
    }
    &:active {
      background: #e1e3e7;
    }
    .class {
      font-size: 16px;
      color: #666666;
      white-space: nowrap;
    }
    .remove {
      font-size: 16px;
      color: #999999;
      // margin-left: 70px;
      position: absolute;
      right: 60px;
    }
    .dot {
      // margin-left: 15px;
      margin-top: 5px;
    }
  }
}
.add {
  cursor: pointer;
  padding-top: 15px;
  // width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  background: #ffffff;
  .icon {
    display: flex;
  }
  .text {
    margin-left: 8px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
    color: #666666;
    opacity: 1;
  }
}
</style>