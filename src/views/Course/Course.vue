<!--  -->
<template>
  <div class="body">
    <p>课程</p>
    <div class="top-bar">
      <div class="title">
        <div class="name">最近课程</div>
      </div>
      <div class="button" @click="dialogVisible2 = true">
        <el-button class="create-button" type="primary"
          ><i class="el-icon-plus"></i>创建</el-button
        >
      </div>
    </div>
    <div class="navigation">
      <div>
        <Tabs :tabList="tabList" @tabsIndex="tabsIndex">
     
          <!-- <ProblemSet/> -->
        </Tabs>
        <div class="empty" v-if="false">
          <div class="img">
            <img src="@/assets/image/home/img_empty_big.svg" alt="" />
          </div>
          <div class="text">还未创建任何课程</div>
          <div class="button">
            <el-button type="primary">前往创建</el-button>
          </div>
        </div>
        <CourseContent v-if="tabIndex == 0"/>
        <Work v-if="tabIndex == 1"/>
        <ProblemSetDetail  v-if="tabIndex == 2"/>
      </div>
      <div class="right-search">
        <div>共10个</div>
        <el-dropdown trigger="click" placement="bottom-end">
          <span class="el-dropdown-link">
            <div>按名称A-Z <i class="el-icon-caret-bottom"></i></div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>A</el-dropdown-item>
            <el-dropdown-item>Z</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div>
          <input type="text" placeholder="搜索你想要的班级" />
          <i class="el-icon-search"></i>
        </div>
      </div>
    </div>

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
import CourseContent from "@/components/courseContent/CourseContent.vue";
import ProblemSet from "@/components/problemSet/ProblemSet.vue";
import Work from "@/components/work/Work.vue";
import ProblemSetDetail from "@/components/problemSetDetail/ProblemSetDetail.vue";
export default {
  components: {
    Tabs,
    CourseContent,
    ProblemSet,
    Work,
    ProblemSetDetail,
  },
  data() {
    return {
      tabIndex: 0,
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
  // height: 300px;
}
::v-deep .el-dialog__title {
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  color: #2a77ff;
  margin-left: 43px;
}
h2 {
  position: absolute;
  top: 25.8px;
  color: #000000;
  font-size: 20px;
}
.course-input {
  font-size: 20px;
  color: #666666;
  padding: 10px 0px 10px 0px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0 !important;
  border: none;
}
.cancel-button {
  border: none;
  background: #fff !important;
  box-shadow: 0 !important;
  font-size: 14px;
  font-weight: bold;
  color: #666666;
  margin-right: 15px;
}
.el-button {
  margin-top: 40px;
  background: #2a77ff;
  // box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.2);
  &:hover {
    background: #5592fe;
  }
  &:active {
    background: #2065e0;
  }
}
.delete-text {
  font-size: 14px;
  line-height: 2px;
  color: #666666;
}
.body {
  // height: 90vh;
  // overflow: hidden;
}
p {
  font-size: 14px;
  color: #666666;
  margin-bottom: 5px;
}
.top-bar {
  min-width: 1584px;
  width: 100%;
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
    // position: absolute;
    // top: 0;
    // left: 0;
    // transform: translate(-50%, -50%);
    margin: 200px 600px 200px 200px;
    height: 330px;
    // width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // background-color: #2a77ff;
    .img {
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