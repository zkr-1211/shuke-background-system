<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-bar">
          <HeaderTitle name="最近课程" />
          <div class="button" @click="dialogVisible2 = true">
            <el-button class="create-button" type="primary"
              ><i class="el-icon-plus"></i>创建</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <Navigation
          :tabList="tabList"
          @tabsIndex="tabsIndex"
          :filtrate="true"
        />
      </el-col>
    </el-row>
    <!-- <div class="bottom-content"> -->
    <CourseContent
      :courseContentList="courseContentList"
      v-if="tabIndex == 0"
    />
    <WorkContent v-if="tabIndex == 1" />
    <ProblemSetDetail v-if="tabIndex == 2" />
    <ProblemSet v-if="tabIndex == 3" />
    <!-- </div> -->

    <!-- 创建课程 -->
    <el-dialog
      title=""
      :visible.sync="dialogVisible2"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>输入课程名称</h2>
      <input class="course-input" type="text" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="dialogVisible2 = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="dialogVisible2 = false"
          >创 建</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Tabs from "@/components/tabs/Tabs.vue";
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import CourseContent from "@/components/courseContent/CourseContent.vue";
import ProblemSet from "@/components/problemSet/ProblemSet.vue";
import WorkContent from "@/components/workContent/WorkContent.vue";
import ProblemSetDetail from "@/components/problemSetDetail/ProblemSetDetail.vue";
import { getColumnList } from "@/api/home/home";
export default {
  components: {
    Tabs,
    HeaderTitle,
    Navigation,
    CourseContent,
    ProblemSet,
    WorkContent,
    ProblemSetDetail,
  },

  data() {
    return {
      tabIndex: 0,
      courseContentList:[
        {
          id: 0,
          courseName: "UI设计课程",
          createName: "张老师",
          classNum: 100,
          studentNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
        {
          id: 1,
          courseName: "Python程序设计",
          createName: "张老师",
          classNum: 100,
          studentNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
        {
          id: 2,
          courseName: "Java面向对象",
          createName: "张老师",
          classNum: 100,
          studentNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
      ],
      tabList: [
        {
          title: "全部",
        },
        {
          title: "我创建的",
        },
        {
          title: "我加入的",
        },
        {
          title: "近期使用",
        },
        {
          title: "公开课",
        },
        {
          title: "付费课程",
        },
      ],
      dialogVisible2: false,
    };
  },
  computed: {},

  mounted() {
    this.getColumnList();
  },

  methods: {
    async getColumnList() {
      const res = await getColumnList();
      console.log("res=========", res);
    },
    tabsIndex(index) {
      this.tabIndex = index;
    },
  },
};
</script>

<style lang='scss' scoped>
::v-deep .el-dialog {
  // height: 3rem;
  line-height: 0rem;
}
::v-deep .el-dialog__title {
  font-size: 0.2rem;
  font-weight: bold;
  line-height: 0.4rem;
  color: #2a77ff;
  margin-left: 0.43rem;
}
h2 {
  position: absolute;
  top: 0.48rem;
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
  // box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
  &:hover {
    background: #5592fe;
  }
  &:active {
    background: #2065e0;
  }
}
.delete-text {
  font-size: 0.14rem;
  line-height: 0.02rem;
  color: #666666;
}
.top-bar {
  margin-top: 0.12rem;
  // width: 15.84rem;
  height: 0.8rem;
  background: #ffffff;
  box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  position: relative;
  .title {
    // background-color: #2a77ff;
    width: 100%;
    // height: 2rem;
    margin: 0.2rem;
    font-size: 0.2rem;
    font-weight: bold;
    line-height: 0.34rem;
    color: #666666;
    border-left: 0.08rem solid #5592fe;
    .name {
      margin-left: 0.12rem;
    }
  }
  .button {
    margin-right: 0.3rem;
    font-size: 0.14rem;
    font-weight: bold;
    color: #f4f4f4;
    width: 1.2rem;
    position: absolute;
    right: 0;
    .el-icon-plus {
      margin-right: 0.07rem;
      font-size: 0.14rem;
    }
    .create-button {
      margin-bottom: 0.4rem;
      background: #2a77ff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
      &:hover {
        background: #5592fe;
      }
      &:active {
        background: #2065e0;
      }
    }
  }
}
</style>