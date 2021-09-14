<!--  -->
<template>
  <div class='body'>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>天梯赛</el-breadcrumb-item>
        <el-breadcrumb-item>赛程详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
        <TopBar name='任务设计'>
          <div class="save" slot="A">保存</div>
          <div slot="B"><Button name="添加主任务"><img src="@/assets/image/course/ic_locking_off.svg" alt=""></Button> </div>
        </TopBar>
        <TaskTemplate />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
        <TopBar name='起止时间设置' />
        <div class="right-top-content">
          <div class="time-start">
            <div class="text">开始时间:</div>
            <!-- <div class="block"> -->
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
            <!-- </div> -->
          </div>
          <div class="time-end">
            <div class="text">结束时间:</div>
            <!-- <div class="block"> -->
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
            <!-- </div> -->
          </div>
          <div class="Button"> <Button name="暂停进程" background='#FFC62A'><img src="@/assets/image/course/ic_locking_off.svg" alt=""></Button></div>
        </div>

        <TopBar name='参与班级' />
        <div class="right-bottom-content">
          <div class="item" v-for="(item,index) in 10" :key="index">
            <div class="class">19数字媒体技术</div>
            <div class="remove">移除</div>
            <div class="dot">
              <Dot />
            </div>
          </div>

        </div>
        <div class="add">
          <div class="icon"><img src="@/assets/image/course/ic_locking_off.svg" alt=""></div>
          <div class="text">添加班级</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopBar from "@/components/topBar/TopBar";
import TaskTemplate from "@/components/taskTemplate/TaskTemplate";
import Dot from "@/components/dot/Dot";
import Button from "@/components/button/Button";
export default {
  components: {
    TopBar,
    TaskTemplate,
    Dot,
    Button,
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
    transform: translate(-50%,100%);
  }
}
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