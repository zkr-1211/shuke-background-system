<!--  -->
<template>
  <div class='body'>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>天梯赛</el-breadcrumb-item>
        <el-breadcrumb-item>模板设计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <TopBar name='模板设计'>
        <div class="save" slot="A">保存</div>
        <div slot="B"><Button name="添加主任务"><img src="@/assets/image/course/ic_locking_off.svg" alt=""></Button> </div>
      </TopBar>
      <TaskTemplate />
    </div>

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

  methods: {
    changeCollapse(e) {
      console.log("e", e);
    },
  },
};
</script>
<style lang='scss' scoped>
.content {
  width: 70%;
margin: 0.12rem auto 0;
}
</style>