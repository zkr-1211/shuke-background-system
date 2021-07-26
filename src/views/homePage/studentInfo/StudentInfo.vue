<!--  -->
<template>
  <div class="body">
    <!-- l -->
    <div class="left">
      <div class="left-top">
        <div class="PC">
          <PersonCard />
        </div>
        <div class="PM">
          <PersonFourItem />
        </div>
      </div>
      <div class="left-center">
        <HeaderTitle name="课程学习成绩情况" />
        <LearnScoreChart ref="myChart" />
      </div>
      <div class="left-bottom">
        <div class="recent">
          <HeaderTitle name="近期提交" />
          <div class="content">
            <div class="item" v-for="(item, index) in 5" :key="index">
              <div class="title">UI设计图标作业</div>
              <div class="time">2021.01.10 10:20:35</div>
            </div>
          </div>
        </div>
        <div class="tianti">
          <HeaderTitle name="天梯对战情况" />
          <div class="content">
            <div class="item" v-for="(item, index) in 5" :key="index">
              <div class="person-message">
                <div class="header"><img src="" alt="" /></div>
                <div class="message">
                  <div class="name">张克榕</div>
                  <div class="num">182718144</div>
                </div>
              </div>
              <div class="VS">VS</div>
              <div class="person-message">
                <div class="message1">
                  <div class="name">张克榕</div>
                  <div class="num">182718144</div>
                </div>
                <div class="header"><img src="" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="student-time">
        <HeaderTitle name="访问量与学习时长" />
        <ChartLine ref="myChart1" />
        <ChartLine ref="myChart1" />
      </div>
      <div class="student-time-avg">
        <HeaderTitle name="访问量与平均学习时长" />
        <div class="item">
          <div class="item1">
            <WorkDataChart ref="myChart2" />
            <div class="text1">访问量与平均学习时长</div>
          </div>
          <div class="item2">
            <WorkDataChart1 ref="myChart3" />
            <div class="text2">访问量与平均学习时长</div>
          </div>
        </div>

        <!-- <div> <WorkDataChart ref="myChart3" /></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import ChartLine from "@/components/chartLint/ChartLint.vue";
import PersonCard from "@/components/personCard/PersonCard.vue";
import PersonFourItem from "@/components/personFourItem/PersonFourItem.vue";
import LearnScoreChart from "@/components/learnScoreChart/LearnScoreChart.vue";
import WorkDataChart from "@/components/workDataChart/WorkDataChart.vue";
import WorkDataChart1 from "@/components/workDataChart1/WorkDataChart1.vue";
export default {
  components: {
    HeaderTitle,
    ChartLine,
    PersonCard,
    PersonFourItem,
    LearnScoreChart,
    WorkDataChart,
    WorkDataChart1,
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {
    this.$refs.myChart.LearnScoreChart();
    this.$refs.myChart1.drawLine();
    this.$refs.myChart2.WorkDataChartData();
    this.$refs.myChart3.WorkDataChartData1();
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
.body {
  display: flex;
  .left {
    min-width: 932px;
    width: 100%;
    .left-top {
      display: flex;
      width: 100%;
      .PC {
        width: 100%;
      }
      .PM {
        width: 100%;
      }
    }
    .left-center {
      margin-top: 32px;
      min-width: 932px;
      height: 366px;
      background: #ffffff;
    }
    .left-bottom {
      margin-top: 32px;
      height: 260px;
      display: flex;
      .recent {
        min-width: 450px;
        height: 266px;
        width: 100%;
        background: #ffffff;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
        border-radius: 8px;
        overflow: hidden;
        .content {
          width: 450px;
          height: 180px;
          background: #ffffff;
          overflow: auto;
          overflow-x: hidden;
          .item {
            width: 450px;
            height: 60px;
            opacity: 1;
            display: flex;
            padding: 20px 30px 0px 30px;
            justify-content: space-between;
            .title {
              font-size: 16px;
              color: #333333;
              opacity: 1;
              line-height: 16px;
            }
            .time {
              font-size: 12px;
              color: #999999;
              opacity: 1;
            }
          }
        }
      }
      .tianti {
        margin-left: 32px;
        min-width: 450px;
        width: 100%;
        height: 266px;
        background: #ffffff;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
        border-radius: 8px;
        .content {
          width: 450px;
          height: 180px;
          background: #ffffff;
          overflow: auto;
          overflow-x: hidden;
          .item {
            padding: 0px 30px 0px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 450px;
            height: 60px;
            background: #ffffff;
            opacity: 1;
            .person-message {
              display: flex;
              align-items: center;
              .header {
                width: 32px;
                height: 32px;
                background: rgba(163, 67, 67, 1);
                border-radius: 50%;
                opacity: 1;
                img {
                }
              }
              .message {
                margin-left: 10px;
                .name {
                  font-size: 14px;
                  color: #666666;
                }
                .num {
                  font-size: 12px;
                  line-height: 20px;
                  color: #c3c3c3;
                }
              }
            }
            .VS {
              font-size: 24px;
              color: #2a77ff;
            }
            .person-message {
              .message1 {
                text-align: right;
                margin-right: 10px;
                .name {
                  font-size: 14px;
                  color: #666666;
                }
                .num {
                  font-size: 12px;
                  line-height: 20px;
                  color: #c3c3c3;
                }
              }
              .header {
                img {
                }
              }
            }
          }
        }
      }
    }
  }
  .right {
    min-width: 620px;
    width: 100%;
    opacity: 1;
    margin-left: 32px;
    .student-time {
      min-width: 620px;
      height: 432px;
      background: #ffffff;
      opacity: 1;
    }
    .student-time-avg {
      margin-top: 32px;
      //   min-width: 620px;
      height: 468px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      opacity: 1;

      .item {
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        .item1 {
          position: relative;
          .text1 {
            position: absolute;
            bottom: -30px;
            left: 10px;
            font-size: 18px;
            font-weight: bold;
            color: #666666;
          }
        }
        .item2 {
          position: relative;
          .text2 {
            position: absolute;
            bottom: -30px;
            right: 10px;
            font-size: 18px;
            font-weight: bold;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>