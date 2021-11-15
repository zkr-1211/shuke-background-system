<!--  -->
<template>
  <div class="body">
    <!-- l -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '' }">学生信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row1">
      <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
        <div class="left">
          <el-row :gutter="32" class="el-row">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="left-top">
                <el-row :gutter="32" class="el-row">
                  <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="7">
                    <div class="PC">
                      <PersonCard />
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
                    <div class="PM">
                      <PersonFourItem :personal="personal" />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="left-center">
                <HeaderTitle name="课程学习成绩情况" />
                <LearnScoreChart ref="myChart" />
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="left-bottom">
                <el-row :gutter="32" class="el-row2">
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <div class="recent">
                      <HeaderTitle name="近期提交" />
                      <div class="content">
                        <div
                          class="item"
                          v-for="(item, index) in 5"
                          :key="index"
                        >
                          <div class="title">UI设计图标作业</div>
                          <div class="time">2021.01.10 10:20:35</div>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <div class="tianti">
                      <HeaderTitle name="天梯对战情况" />
                      <div class="content">
                        <div
                          class="item"
                          v-for="(item, index) in 5"
                          :key="index"
                        >
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
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
        <div class="right">
          <div class="student-time">
            <HeaderTitle name="访问量与学习时长" />
            <ChartLine ref="myChart1" />
            <!-- <ChartLine ref="myChart1" /> -->
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
      </el-col>
    </el-row>
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
    return {
      personal: {
        name1: "平时分",
        num1: 10,
        name2: "天梯赛积分",
        num2: 4234,
        name3: "他的问题",
        num3: 50,
        name4: "他的作业",
        num4: '10 / 20',
      },
    };
  },
  computed: {},

  mounted() {
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
.body {
  .left {
    .left-top {
      .PC {
        margin-top: 0.12rem;
      }
      .PM {
        margin-top: 0.12rem;
      }
    }
    .left-center {
      margin-top: 0.2rem;
      height: 3.66rem;
      background: #ffffff;
    }
    .left-bottom {
      height: 2.6rem;
      // display: flex;
      .recent {
        // min-width: 4.5rem;
        margin-top: 0.32rem;
        height: 2.66rem;
        width: 100%;
        background: #ffffff;
        box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
        border-radius: 0.08rem;
        overflow: hidden;
        .content {
          width: 100%;
          height: 1.8rem;
          background: #ffffff;
          overflow: auto;
          overflow-x: hidden;
          .item {
            // width: 4.5rem;
            cursor: pointer;
            height: 0.6rem;
            opacity: 1;
            display: flex;
            padding: 0.2rem 0.3rem 0rem 0.3rem;
            justify-content: space-between;
            .title {
              font-size: 0.16rem;
              color: #333333;
              opacity: 1;
              line-height: 0.16rem;
            }
            .time {
              font-size: 0.12rem;
              color: #999999;
              opacity: 1;
            }
          }
        }
      }
      .tianti {
        margin-top: 0.32rem;
        // margin-left: 0.32rem;
        // min-width: 4.5rem;
        // width: 100%;
        height: 2.66rem;
        background: #ffffff;
        box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
        border-radius: 0.08rem;
        .content {
          width: 100%;
          height: 1.8rem;
          background: #ffffff;
          overflow: auto;
          overflow-x: hidden;
          .item {
            cursor: pointer;
            padding: 0rem 0.3rem 0rem 0.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 0.6rem;
            background: #ffffff;
            opacity: 1;
            .person-message {
              display: flex;
              align-items: center;
              .header {
                width: 0.32rem;
                height: 0.32rem;
                background: rgba(163, 67, 67, 1);
                border-radius: 50%;
                opacity: 1;
                img {
                }
              }
              .message {
                margin-left: 0.1rem;
                .name {
                  font-size: 0.14rem;
                  color: #666666;
                }
                .num {
                  font-size: 0.12rem;
                  line-height: 0.2rem;
                  color: #c3c3c3;
                }
              }
            }
            .VS {
              font-size: 0.24rem;
              color: #2a77ff;
            }
            .person-message {
              .message1 {
                text-align: right;
                margin-right: 0.1rem;
                .name {
                  font-size: 0.14rem;
                  color: #666666;
                }
                .num {
                  font-size: 0.12rem;
                  line-height: 0.2rem;
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
    margin-top: 0.12rem;
    // min-width: 6.2rem;
    // width: 100%;
    // opacity: 1;
    // margin-left: 0.32rem;
    .student-time {
      // min-width: 6.2rem;
      height: 4.32rem;
      background: #ffffff;
      // opacity: 1;
    }
    .student-time-avg {
      margin-top: 0.2rem;
      // min-width: 6.2rem;
      height: 4.68rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      opacity: 1;
      .item {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .item1 {
          position: relative;
          .text1 {
            position: absolute;
            bottom: -0.3rem;
            left: 0.1rem;
            font-size: 0.18rem;
            font-weight: bold;
            color: #666666;
          }
        }
        .item2 {
          position: relative;
          .text2 {
            position: absolute;
            bottom: -0.3rem;
            right: 0.1rem;
            font-size: 0.18rem;
            font-weight: bold;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>