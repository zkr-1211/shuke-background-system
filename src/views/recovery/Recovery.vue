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
          <HeaderTitle name="回收站" />
          <div class="button" @click="dialogVisible2 = true">
            <Button name="清空全部" />
            <Button name="恢复选中" class="Button" />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <Navigation :tabList="tabList" @tabsIndex="tabsIndex" />
      </el-col>
    </el-row>
    <ProblemSetDetail v-if="tabIndex == 0" />
    <ProblemSet
      :problemSetList="problemSetList"
      @problemSet="problemSet"
      v-if="tabIndex == 1"
      :isCheckBox="true"
    />
    <CourseContent
      :courseContentList="courseContentList"
      v-if="tabIndex == 2"
      :isCheckBox="true"
      @courseContentEven="courseContentEven"
    />
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
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle.vue";
import Button from "@/components/Button/Button.vue";
import Navigation from "@/components/Navigation/Navigation.vue";
import RecordContent from "@/components/RecordContent/RecordContent.vue";
import ProblemSet from "@/components/ProblemSet/ProblemSet.vue";
import WorkContent from "@/components/WorkContent/WorkContent.vue";
import CourseContent from "@/components/CourseContent/CourseContent.vue";
import ProblemSetDetail from "@/components/ProblemSetDetail/ProblemSetDetail.vue";
export default {
  components: {
    HeaderTitle,
    Button,
    Navigation,
    RecordContent,
    ProblemSet,
    WorkContent,
    CourseContent,
    ProblemSetDetail,
  },
  data() {
    return {
      tabIndex: 0,
      tabList: [
        {
          title: "题目",
        },
        {
          title: "题集",
        },
        {
          title: "课程",
        },
      ],
      problemSetList: [
        {
          id: 0,
          name: "函数相关题目",
          teacher: "张老师",
          classNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
        {
          id: 1,
          name: "函数相关题目",
          teacher: "张老师",
          classNum: 100,
          time: "2021/09/21 19:45",
          select: true,
        },
        {
          id: 2,
          name: "函数相关题目",
          teacher: "张老师",
          classNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
        {
          id: 3,
          name: "函数相关题目",
          teacher: "张老师",
          classNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
      ],
      courseContentList: [
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
    //监听回调
    problemSet(id) {
      //已选择的选项的id
      // console.log("id", id);
    },
    courseContentEven(id) {
      //已选择的选项的id
      console.log("id", id);
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
 .body {
     // height: 90vh;
     // overflow: hidden;
}
 .top-bar {
     margin-top: 0.12rem;
     // width: 15.84rem;
     height: 0.8rem;
     background: #ffffff;
     box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
     // position: relative;
     display: flex;
     align-items: center;
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
         display: flex;
         margin-right: 0.3rem;
         font-size: 0.14rem;
         font-weight: bold;
         color: #f4f4f4;
         position: absolute;
         right: 0.3rem;
         .Button {
             margin-left: 0.2rem;
        }
    }
}
 .navigation {
     margin-top: 0.3rem;
     display: flex;
     align-items: center;
     justify-content: space-between;
     // background-color: #2a77ff;
     position: relative;
     .right-search {
         width: 6.5rem;
         margin-bottom: 0.12rem;
         position: absolute;
         right: 0;
         top: 0;
         display: flex;
         align-items: center;
         justify-content: space-between;
         > div {
             font-size: 0.16rem;
             font-weight: bold;
             color: #c3c3c3;
             margin-right: 0.3rem;
             input {
                 width: 3.66rem;
                 height: 0.38rem;
                 background: #ffffff;
                 box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
                 border-radius: 0.35rem;
                 border: none;
                 padding-left: 0.2rem;
                 font-size: 0.14rem;
                 color: #999999;
                 line-height: 1.38rem;
            }
             .el-icon-search {
                 font-size: 0.2rem;
                 position: absolute;
                 right: 0.5rem;
                 top: 0.1rem;
                 font-weight: 900;
            }
             ::-webkit-input-placeholder {
                 font-size: 0.14rem;
                 line-height: 0.24rem;
                 color: #999999;
            }
            /* 使用webkit内核的浏览器 */
             :-moz-placeholder {
                 font-size: 0.14rem;
                 line-height: 0.24rem;
                 color: #999999;
            }
            /* Firefox版本4-18 */
             ::-moz-placeholder {
                 font-size: 0.14rem;
                 line-height: 0.24rem;
                 color: #999999;
            }
            /* Firefox版本19+ */
             :-ms-input-placeholder {
                 font-size: 0.14rem;
                 line-height: 0.24rem;
                 color: #999999;
            }
            /* IE浏览器 */
        }
    }
     .empty {
         // position: absolute;
         // top: 0;
         // left: 0;
         // transform: translate(-50%, -50%);
         margin: 2rem 6rem 2rem 2rem;
         height: 3.3rem;
         // width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         // background-color: #2a77ff;
         .img {
             width: 3rem;
             height: 1.91rem;
             img {
                 width: 3rem;
                 height: 1.91rem;
            }
        }
         .text {
             font-size: 0.2rem;
             font-weight: bold;
             color: #999999;
        }
         .button {
             font-size: 0.14rem;
             font-weight: bold;
             color: #f4f4f4;
             .el-button {
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
}
 
</style>