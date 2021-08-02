<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
        <el-breadcrumb-item>班级详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  -->
    <div class="top">
      <div class="item-1">
        <div class="class-name">UI设计一班</div>
        <div class="course-name">所属课程：UI设计入门课程</div>
        <div class="message">
          <div class="time">创建日期：2020.11.12</div>
          <div class="person">班级管理员:蔡裕兰</div>
        </div>
        <div class="button">
          <Button name="结课" @ClickButton="ClickButton()" />
        </div>
      </div>
      <div class="item-2">
        <div class="content">
          <div class="img">
            <img src="@/assets/image/course/icon_studyreport.svg" alt="" />
          </div>
          <div class="text">章节发放管理</div>
        </div>
      </div>
      <div class="item-3">
        <img src="@/assets/image/home/course_img2.svg" alt="" />
      </div>
      <div class="item-4">
        <div class="content1 content">
          <div class="img">
            <img src="@/assets/image/course/icon_grouping.svg" alt="" />
          </div>
          <div class="text">分组情况</div>
        </div>
        <div class="content2 content">
          <div class="img">
            <img src="@/assets/image/course/icon_studyreport.svg" alt="" />
          </div>
          <div class="text">生成学习报表</div>
        </div>
        <div class="content3 content">
          <div class="img">
            <img src="@/assets/image/course/icon_classreport.svg" alt="" />
          </div>
          <div class="text">班级学习报告</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!--  -->
      <div class="left-content">
        <!--  -->
        <div class="chart">
          <HeaderTitle name="课程学习成绩情况" />
          <div>
            <LearnScoreChart ref="myChart" />
          </div>
        </div>

        <div class="data">
          <div class="student-report">
            <HeaderTitle name="学生成绩排名" />
            <div class="content">
              <div class="item" v-for="(item, index) in 5" :key="index">
                <div class="left">
                  <div class="num" :class="[
                      index == 0 ? 'num-color1' : '',
                      index == 1 ? 'num-color2' : '',
                      index == 2 ? 'num-color3' : '',
                    ]">
                    {{ index + 1 }}
                  </div>
                  <div class="header"><img src="" alt="" /></div>
                  <div class="name">张克榕</div>
                </div>
                <div class="avg-score">平均分：70分</div>
                <div class="rank">进步2名</div>
              </div>
            </div>
          </div>
          <div class="work-data">
            <HeaderTitle name="作业数据" />
            <div class="button"><Button name="查看作业" /></div>

            <div>
              <WorkDataChart ref="myChart1" />
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="right-content">
        <HeaderTitle name="班级成员" />
        <div class="total">共100人</div>
        <div class="add" @click="addDV = true">
          <img src="@/assets/image/course/ic_class_invitation.svg" alt="" />
        </div>
        <div class="nav-title">
          <div class="people">成员</div>
          <div class="num-text">学号</div>
          <div class="process">当前进度</div>
        </div>
        <div class="content">
          <div class="item" v-for="(item, index) in 30" :key="index" :class="index % 2 == 1 ? 'item-background' : ''">
            <div class="left-message">
              <div class="header"></div>
              <div class="name">张克榕</div>
            </div>
            <div class="num">182718144</div>
            <div class="process-num">1845545655</div>
            <div class="dot3">
              <Dot />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加成员 -->
    <el-dialog title="" :visible.sync="addDV" width="30%" :show-close="false" top="20vh">
      <h2>添加成员</h2>
      <Tabs class="tabs" :tabList="tabList" @tabsIndex="tabsIndex" />
      <div class="contentDv">
        <div v-if="tabIndex == 0">
          <div class="jiaowu">
            <div class="school">
              <el-form ref="form" :model="form">
                <el-form-item label="学院名称">
                  <el-select v-model="form.region" placeholder="请选择学院">
                    <el-option label="人工智能学院" value="shanghai"></el-option>
                    <el-option label="商学院" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="专业">
                  <el-select v-model="form.region" placeholder="请选择专业">
                    <el-option label="网络工程" value="shanghai"></el-option>
                    <el-option label="计算机科学与技术" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="入学年份">
                  <el-select v-model="form.region" placeholder="请选择入学年份">
                    <el-option label="2020" value="shanghai"></el-option>
                    <el-option label="2021" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="班级">
                  <el-select v-model="form.region" placeholder="请选择班级">
                    <el-option label="一班" value="shanghai"></el-option>
                    <el-option label="二班" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="姓名">
                  <el-select v-model="form.region" placeholder="请选择姓名">
                    <el-option label="张可溶" value="shanghai"></el-option>
                    <el-option label="张卡" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="dialog-footer">
            <el-button class="cancel-button" @click="addDV = false">取 消</el-button>
            <el-button type="primary" @click="isCreate()">添 加</el-button>
          </div>
        </div>
        <div v-else-if="tabIndex == 1">
          <div class="biaoge">
            <div class="xiazai">
              <div class="text">下载花名册表格模板</div>
              <div class="biaoge-content">
                <div class="icon"><img src="@/assets/image/course/ic_class_invitation.svg" alt=""></div>
                <div class="text-title">空白花名册模板.execl</div>
                <div class="img"><img src="@/assets/image/course/ic_class_invitation.svg" alt=""></div>
              </div>
            </div>
            <div class="xiazai">
              <div class="text">上传花名册表格模板</div>
              <div class="biaoge-content">
                <div class="icon"><img src="@/assets/image/course/ic_class_invitation.svg" alt=""></div>
                <div class="text-title">空白花名册模板.execl</div>
                <div class="img"><span>重新上传</span> <img src="@/assets/image/course/ic_class_invitation.svg" alt=""></div>
              </div>
            </div>
          </div>
          <div class="dialog-footer">
            <el-button class="cancel-button" @click="addDV = false">取 消</el-button>
            <el-button type="primary" @click="isCreate()">导 入</el-button>
          </div>
        </div>
        <div v-else>
          <div class="yaoqingma">
            <div class="num">202075025452125</div>
          </div>
          <div class="dialog-footer">
            <el-button class="cancel-button" @click="addDV = false">取 消</el-button>
            <el-button type="primary" @click="isCreate()">复 制</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Button from "@/components/button/Button.vue";
import Dot from "@/components/dot/Dot.vue";
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import LearnScoreChart from "@/components/learnScoreChart/LearnScoreChart.vue";
import WorkDataChart from "@/components/workDataChart/WorkDataChart.vue";
import Tabs from "@/components/tabs/Tabs.vue";
export default {
  components: {
    Button,
    Dot,
    HeaderTitle,
    LearnScoreChart,
    WorkDataChart,
    Tabs,
  },
  data() {
    return {
      addDV: false,
      tabIndex: 0,
      tabList: [
        {
          title: "从教务中",
        },
        {
          title: "从表格中",
        },
        {
          title: "邀请码",
        },
      ],
      form: {
        region: "",
      },
      name: "张雪",
      xData: ["2020-02", "2020-03", "2020-04", "2020-05"],
      yData: [30, 132, 80, 134],
    };
  },
  computed: {},

  mounted() {
    this.$refs.myChart.LearnScoreChart();
    this.$refs.myChart1.WorkDataChartData();
  },

  methods: {
    ClickButton() {
      console.log("ClickButton");
    },
    tabsIndex(index) {
      this.tabIndex = index;
      //   console.log("index", index);
    },
  },
};
</script>
<style lang='scss' scoped>
.tabs {
  margin-left: 30px;
  margin-bottom: 30px;
}
.contentDv {
  margin-left: 30px;
  .dialog-footer {
    text-align: right;
  }
  .jiaowu {
     height: 305px;
  }
}
.yaoqingma {
  height: 305px;
  // background-color: red;
  width: 100%;
  display: flex;
  align-items: center;
  .num {
    width: 486px;
    height: 80px;
    background: #f6f7f9;
    font-size: 40px;
    font-weight: bold;
    line-height: 80px;
    color: #666666;
    letter-spacing: 4px;
    text-align: center;
  }
}
.biaoge {
  height: 305px;
  // background-color: red;
  width: 100%;
  .xiazai {
    margin-top: 30px;
    .text {
      font-size: 16px;
      color: #333333;
      
    }
    .biaoge-content {
      margin-top: 16px;
      width: 486px;
      height: 80px;
      background: #f6f7f9;
      opacity: 1;
      display: flex;
      align-items: center;
      padding-left: 30px;
      position: relative;
      .icon {
        width: 30px;
        height: 30px;
        // background-color: rosybrown;
         cursor: pointer;
        img {
           width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
      .text-title {
        margin-left: 10px;
        font-size: 16px;
        color: #333333;
        font-weight: bold;
      }
      .img {
        position: absolute;
        right: 30px;
        width: 30px;
        height: 30px;
        // background-color: rosybrown
        span {
          position: absolute;
          right: 30px;
          line-height: 33px;
          width: 70px;
          font-size: 14px;
          color: #666666;
          cursor: pointer;
          // background-color: rosybrown;
        }
        img {
          width: 30px;
          height: 30px;
          // background-color: rosybrown;
           cursor: pointer;
        }
      }
    }
  }
  .shangchuan {
  }
  .biaoge {
  }
}
::v-deep .el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 16px;
  color: #606266;
  // line-height: 16px;
  padding: 0 20px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100px;
}
::v-deep .el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  // background-image: none;
  border-bottom: 1px solid #e0e0e0 !important;
  border: none;
  // box-sizing: border-box;
  color: #666666;
  display: inline-block;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
  outline: 0;
  padding: 15px 10px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
::v-deep .el-select .el-input__inner {
  cursor: pointer;
  padding-right: 120px;
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
  font-size: 25px;
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
  &:hover {
    background: #5592fe;
  }
  &:active {
    background: #2065e0;
  }
}
.body {
  .top {
    margin-top: 20px;
    display: flex;
    .item-1 {
      border-radius: 8px;
      position: relative;
      width: 510px;
      height: 180px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      display: flex;
      //   align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-left: 30px;
      .class-name {
        font-size: 20px;
        font-weight: bold;
        color: #333333;
      }
      .course-name {
        margin-top: 30px;
        font-size: 16px;
        color: #666666;
      }
      .message {
        margin-top: 20px;
        font-size: 12px;
        color: #999999;
        display: flex;
        align-items: center;
        .time {
        }
        .person {
          margin-left: 20px;
        }
      }
      .button {
        position: absolute;
        right: 30px;
        top: 25px;
      }
    }
    .item-2 {
      border-radius: 8px;
      margin-left: 32px;
      width: 188px;
      height: 180px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        width: 124px;
        height: 110px;
        background: #e7e6e642;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        // opacity: 0.2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 5px;
        .img {
          width: 50px;
          height: 50px;
          //   background-color: firebrick;
          margin-bottom: 12px;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .text {
          font-size: 14px;
          font-weight: bold;
          color: #666666;
        }
      }
    }
    .item-3 {
      margin-left: 32px;
      width: 290px;
      height: 180px;
      //   background: rgb(81, 161, 214) !important;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      border-radius: 8px;
      overflow: hidden;
      img {
        // border-radius: 8px;
        height: 180px;
        width: 290px;
        object-fit: cover;
      }
    }
    .item-4 {
      border-radius: 8px;
      margin-left: 32px;
      width: 500px;
      height: 180px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .content {
        width: 124px;
        height: 110px;
        background: #e7e6e642;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        // opacity: 0.2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 5px;
        .img {
          width: 50px;
          height: 50px;
          //   background-color: firebrick;
          margin-bottom: 12px;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .text {
          font-size: 14px;
          font-weight: bold;
          color: #666666;
        }
      }
    }
  }
  .bottom {
    margin-top: 32px;
    display: flex;
    .left-content {
      .chart {
        width: 1052px;
        // height: 366px;
        background: #ffffff;
        opacity: 1;
      }
      .data {
        margin-top: 32px;
        display: flex;
        .student-report {
          width: 510px;
          height: 326px;
          background: #ffffff;
          opacity: 1;
          .content {
            padding: 0px 60px 0px 30px;
            height: 226px;
            width: 100%;
            overflow-y: auto;
            // background-color: firebrick;
            .item {
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              font-size: 14px;
              color: #666666;
              .left {
                width: 120px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .num {
                  font-size: 24px;
                  font-weight: bold;
                  color: #666666;
                  line-height: 24px;
                }
                .num-color1 {
                  color: #ffbc13;
                }
                .num-color2 {
                  color: #5592fe;
                }
                .num-color3 {
                  color: #f96164;
                }
                .header {
                  width: 32px;
                  height: 32px;
                  background: #2a7ff2;
                  border-radius: 50%;
                  opacity: 1;
                  img {
                  }
                }
                .name {
                }
              }
              .avg-score {
              }
              .rank {
              }
            }
          }
        }
        .work-data {
          position: relative;
          margin-left: 32px;
          width: 510px;
          height: 326px;
          background: #fff;
          opacity: 1;
          .button {
            position: absolute;
            right: 30px;
            top: 30px;
          }
        }
      }
    }
    .right-content {
      margin-left: 32px;
      width: 500px;
      height: 724px;

      background: #fff;
      position: relative;
      .total {
        font-size: 16px;
        color: #999999;
        position: absolute;
        top: 28px;
        left: 150px;
      }
      .add {
        position: absolute;
        right: 30px;
        top: 25px;
        img {
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
      }
      .nav-title {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        color: #666666;
        // width: 400px;
        height: 48px;
        // background: #977b7b;
        padding-left: 20px;
        // justify-content: space-between;
        .people {
          padding-left: 20px;
          width: 160px;
          // background-color: red;
        }
        .num-text {
          width: 140px;
          // background-color: coral;
        }
        .process {
        }
      }
      .content {
        //   display: flex;
        height: 580px;
        overflow: auto;
        // width: 100%;
        .item {
          // background-color: chartreuse;
          // width: 100%;
          display: flex;
          align-items: center;
          padding-left: 40px;
          position: relative;
          height: 60px;
          font-size: 14px;
          color: #666666;
          .left-message {
            display: flex;
            align-items: center;
            .header {
              width: 32px;
              height: 32px;
              background-color: forestgreen;
              border-radius: 50%;
            }
            .name {
              margin-left: 12px;
            }
          }
          .num {
            margin-left: 55px;
          }
          .process-num {
            margin-left: 72px;
          }
          .dot3 {
            position: absolute;
            top: 17px;
            right: 30px;
          }
        }
        .item-background {
          background-color: #fafafa;
        }
      }
    }
  }
}
</style>