<!--  -->
<template>
  <div class="body">
    <TopBar :name="name" />
    <div class="right-top-content">
      <div class="time-start">
        <div class="text">开始时间:</div>
        <!-- <div class="block"> -->
        <el-date-picker v-model="startTime" type="date" placeholder="选择日期">
        </el-date-picker>
        <!-- </div> -->
      </div>
      <div class="time-end">
        <div class="text">结束时间:</div>
        <!-- <div class="block"> -->
        <el-date-picker v-model="endTime" type="date" placeholder="选择日期">
        </el-date-picker>
        <!-- </div> -->
      </div>
      <div class="Button" v-if="false">
        <Button name="暂停进程" background="#FFC62A"
          ><img src="@/assets/image/course/ic_locking_off.svg" alt=""
        /></Button>
      </div>
      <div class="Button" v-else>
        <Button name="发布开始"
          ><img src="@/assets/image/course/ic_locking_off.svg" alt=""
        /></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button/Button";
import TopBar from "@/components/topBar/TopBar";
export default {
  components: { Button, TopBar },
  props: {
    name: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      startTime: null,
      endTime: null,
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.right-top-content {
  position: relative;
  // width: 420px;
  height: 234px;
  padding: 10px 42px 42px 42px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
  opacity: 1;
  margin-bottom: 30px;

  .time-start {
    display: flex;
    align-items: center;
    .text {
      white-space: nowrap;
      height: 16px;
      font-size: 16px;
      font-weight: bold;
      line-height: 27px;
      color: #999999;
      margin-bottom: 10px;
      margin-right: 30px;
    }
  }
  .time-end {
    display: flex;
    align-items: center;
    margin-top: 30px;
    .text {
      white-space: nowrap;
      height: 16px;
      font-size: 16px;
      font-weight: bold;
      line-height: 27px;
      color: #999999;
      margin-bottom: 10px;
      margin-right: 30px;
    }
  }

  .Button {
    position: absolute;
    left: 50%;
    top: 50%;
    // bottom: 0;
    transform: translate(-50%, 100%);
  }
}
</style>