<!--  -->
<template>
  <div class="body">
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
        <TopBar name="任务设计">
          <div class="save" slot="A">保存</div>
          <div slot="B">
            <Button name="添加主任务"
              ><img src="@/assets/image/course/ic_button_add.svg" alt=""
            /></Button>
          </div>
        </TopBar>
        <TaskTemplate :contentList='contentList'/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
        <DataTimeStartEnd name="起止时间设置" />
        <UseClass name="参与班级" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopBar from "@/components/topBar/TopBar";
import TaskTemplate from "@/components/taskTemplate/TaskTemplate";
import Button from "@/components/button/Button";
import DataTimeStartEnd from "@/components/dataTimeStartEnd/DataTimeStartEnd";
import UseClass from "@/components/useClass/UseClass";
export default {
  components: {
    TopBar,
    TaskTemplate,
    Button,
    DataTimeStartEnd,
    UseClass,
  },
  data() {
    return {
      contentList:[
        {
          id: 0,
          content: [
            {
              pid: 0,
              content: [
                {
                  a: "",
                },
                {
                  b: "",
                },
              ],
            },
          ],
        },
        {
          id: 1,
          content: [
            {
              pid: 1,
              content: [
                {
                  a: "",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>