<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>天梯赛</el-breadcrumb-item>
        <el-breadcrumb-item>模板设计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <TopBar name="模板设计">
        <div class="save" slot="A">保存</div>
        <div slot="B">
          <Button name="添加主任务" @click.native="addTaskMain"
            ><img src="@/assets/image/course/ic_locking_off.svg" alt=""
          /></Button>
        </div>
      </TopBar>
      <TaskTemplate :contentList="contentList" @addTaskChild="addTaskChild" />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar";
import TaskTemplate from "@/components/TaskTemplate/TaskTemplate";
import Dot from "@/components/Dot/Dot";
import Button from "@/components/Button/Button";
export default {
  components: {
    TopBar,
    TaskTemplate,
    Dot,
    Button,
  },
  data() {
    return {
      contentList: [
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

  methods: {
    addTaskMain() {
      let p = {
        content3: [
          {
            content3: [
              {
                a: "",
              },
              {
                b: "",
              },
            ],
          },
        ],
      };
      this.contentList = [...this.contentList, p];
    },
    addTaskChild(id, pid) {
      this.contentList1 = this.contentList.filter((item) => {
        return item.id === id;
      });
      this.contentList1[0].content.forEach((item) => {
        if(item.pid === pid){
          item.content.push({
            a:''
          })
        };
      });
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