<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的班级</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-bar">
          <HeaderTitle name="班级" />
          <div class="button" @click="dialogVisible2 = true">
            <el-button class="create-button" type="primary"
              ><i class="el-icon-plus"></i>创建</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <Navigation :tabList="tabList" @tabsIndex="tabsIndex" :filtrate="true" />
      </el-col>
    </el-row>
    <ClassContent v-if="tabIndex == 0" />
    <WorkContent v-if="tabIndex == 1" />
    <ProblemSetDetail v-if="tabIndex == 2" />
    <!-- 创建班级 -->
    <el-dialog
      title=""
      :visible.sync="dialogVisible2"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>输入班级名称</h2>
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
import ClassContent from "@/components/classContent/ClassContent.vue";
export default {
  components: {
    Tabs,
    HeaderTitle,
    Navigation,
    CourseContent,
    ProblemSet,
    WorkContent,
    ProblemSetDetail,
    ClassContent,
  },
  data() {
    return {
      tabIndex: 0,
      tabList: [
        {
          title: "全部",
        },
        {
          title: "正在上课",
        },
        {
          title: "还未开课",
        },
        {
          title: "已结课",
        },
      ],

      dialogVisible2: false,
    };
  },
  computed: {},

  mounted() {},

  methods: {
    tabsIndex(index) {
      this.tabIndex = index;
      //   console.log("index", index);
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
  margin-top: 20px;
  // width: 1584px;
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
  .button {
    margin-right: 30px;
    font-size: 14px;
    font-weight: bold;
    color: #f4f4f4;
    width: 120px;
    position: absolute;
    right: 0.3rem;
    .el-icon-plus {
      margin-right: 7px;
      font-size: 14px;
    }
    .create-button {
      margin-bottom: 40px;
      background: #2a77ff;
      box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.2);
      &:hover {
        background: #5592fe;
      }
      &:active {
        background: #2065e0;
      }
    }
  }
}
.navigation {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: #2a77ff;
  position: relative;
  width: 100%;
  // background-color: red;
  .right-search {
    min-width: 650px;
    // width: 100%;
    margin-bottom: 12px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 27px;
      color: #c3c3c3;

      input {
        width: 366px;
        height: 38px;
        background: #ffffff;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
        border-radius: 35px;
        border: none;
        padding-left: 20px;
        font-size: 14px;
        color: #999999;
        line-height: 138px;
      }
      .el-icon-search {
        font-size: 20px;
        position: absolute;
        right: 20px;
        top: 10px;
        font-weight: 900;
      }
      ::-webkit-input-placeholder {
        font-size: 14px;
        line-height: 24px;
        color: #999999;
      } /* 使用webkit内核的浏览器 */
      :-moz-placeholder {
        font-size: 14px;
        line-height: 24px;
        color: #999999;
      } /* Firefox版本4-18 */
      ::-moz-placeholder {
        font-size: 14px;
        line-height: 24px;
        color: #999999;
      } /* Firefox版本19+ */
      :-ms-input-placeholder {
        font-size: 14px;
        line-height: 24px;
        color: #999999;
      } /* IE浏览器 */
    }
  }
  .empty {
    margin: 180px auto 0;
    height: 330px;
    width: 1620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .img {
      margin: 0 auto;
      width: 300px;
      height: 191px;
      img {
        width: 300px;
        height: 191px;
      }
    }
    .text {
      font-size: 20px;
      font-weight: bold;
      color: #999999;
    }
    .button {
      font-size: 14px;
      font-weight: bold;
      color: #f4f4f4;
      .el-button {
        background: #2a77ff;
        box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.2);
        &:hover {
          background: #5592fe;
        }
        &:active {
          background: #2065e0;
        }
      }
    }
  }
}
</style>