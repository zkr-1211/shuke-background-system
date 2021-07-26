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
                  <div
                    class="num"
                    :class="[
                      index == 0 ? 'num-color1' : '',
                      index == 1 ? 'num-color2' : '',
                      index == 2 ? 'num-color3' : '',
                    ]"
                  >
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
        <div class="add">
          <img src="@/assets/image/course/ic_class_invitation.svg" alt="" />
        </div>
        <div class="nav-title">
          <div class="people">成员</div>
          <div class="num-text">学号</div>
          <div class="process">当前进度</div>
        </div>
        <div class="content">
          <div
            class="item"
            v-for="(item, index) in 30"
            :key="index"
            :class="index % 2 == 1 ? 'item-background' : ''"
          >
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
  </div>
</template>

<script>
import Button from "@/components/button/Button.vue";
import Dot from "@/components/dot/Dot.vue";
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import LearnScoreChart from "@/components/learnScoreChart/LearnScoreChart.vue";
import WorkDataChart from "@/components/workDataChart/WorkDataChart.vue";

export default {
  components: {
    Button,
    Dot,
    HeaderTitle,
    LearnScoreChart,
    WorkDataChart,
  },
  data() {
    return {
      name: "张雪",
      xData: ["2020-02", "2020-03", "2020-04", "2020-05"],
      yData: [30, 132, 80, 134],
    };
  },
  computed: {},

  mounted() {
    this.$refs.myChart.drawLine();
    this.$refs.myChart1.WorkDataChartData();
  },

  methods: {
    ClickButton() {
      console.log("ClickButton");
    },
  },
};
</script>
<style lang='scss' scoped>
.body {
  .top {
    margin-top: 20px;
    display: flex;
    .item-1 {
      border-radius: 8px;
      position: relative;
      min-width: 510px;
      width: 100%;
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
      min-width: 188px;
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
      min-width: 290px;

      height: 180px;
      //   background: rgb(81, 161, 214) !important;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      img {
        border-radius: 8px;
        height: 180px;
        min-width: 290px;
      }
    }
    .item-4 {
      border-radius: 8px;
      margin-left: 52px;
      min-width: 500px;
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
      width: 100%;
      height: 100%;
      .chart {
        min-width: 1052px;
        width: 100%;
        // height: 366px;
        background: #ffffff;
        opacity: 1;
      }
      .data {
        margin-top: 32px;
        display: flex;
        .student-report {
          min-width: 510px;
          height: 326px;
          width: 100%;
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
          min-width: 510px;
          height: 326px;
          width: 100%;
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
      min-width: 500px;
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
        }
      }
      .nav-title {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        color: #666666;
        width: 400px;
        height: 48px;
        background: #ffffff;
        padding: 20px 30px 30px 30px;
        justify-content: space-between;
        .people {
        }
        .num-text {
        }
        .process {
        }
      }
      .content {
        //   display: flex;
        height: 580px;
        overflow: auto;
        width: 100%;
        .item {
          width: 100%;
          display: flex;
          align-items: center;
          //   justify-content: space-between;
          padding-left: 30px;
          position: relative;
          //   background-color: forestgreen;
          height: 60px;
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