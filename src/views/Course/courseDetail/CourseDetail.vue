<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>课程详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 上 -->
    <div class="top">
      <div class="top-left">
        <div class="left-img">
          <img src="@/assets/image/home/course_img1.svg" alt="" />
          <span>更换封面</span>
        </div>
        <div class="right-content">
          <div class="title">UI设计教育课程</div>
          <div class="message">
            <div>创建者：蔡老师</div>
            <div>班级：1000</div>
            <div>人数：1000</div>
            <div>付费情况：免费</div>
          </div>
          <div class="detail">
            课程简介：本专业旨在培养社会急需的具备大数据处理及分析能力的高级复合型人才。具体包括：掌握计算机科学、大数据科学与信息技术的基本理论、方法和技能，受到系统的科学研究训练，具备一定的大数据科学研究
          </div>
          <div class="button">
            <el-button class="button1" type="primary">付费设置</el-button>
            <el-button class="button2" type="primary">设为公开课</el-button>
            <el-button class="button3" type="primary">编辑详页</el-button>
          </div>
        </div>
      </div>
      <div class="top-right">
        <HeaderTitle name="学员评价" />
        <a href="">共有100条评价>></a>
        <div class="center-content">
          <el-carousel
            :interval="10000"
            arrow="always"
            height="130px"
            indicator-position="none"
          >
            <el-carousel-item v-for="item in 100" :key="item">
              <div class="content">
                本专业旨在培养社会急需的具备
                大数据处理及分析能力的高级复合型人才。具体包括：掌握计算机科学、大数据科学与信息技术的基本理论、方法和技能，受到系统的科学研究训练，具备一定的大数据科学研究
                <div class="bottom-content">
                  <div class="bottom-msg">
                    <div class="header">
                      <img src="@/assets/image/home/course_img1.svg" alt="" />
                    </div>
                    <div class="name">张克榕</div>
                    <div class="time">2019/10/15 12:20:23</div>
                  </div>
                  <div class="delete-img">
                    <img src="@/assets/image/home/course_img1.svg" alt="" />
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- 中 -->
    <div class="center">
      <div class="img-item1">
        <img src="@/assets/image/course/icon_course_correction.svg" alt="" />
        <span>作业/任务批改</span>
      </div>
      <div class="img-item2">
        <img src="@/assets/image/course/icon_course_exercises.svg" alt="" />
        <span>题库</span>
      </div>
      <div class="img-item3">
        <img src="@/assets/image/course/icon_course_match.svg" alt="" />
        <span>天梯赛</span>
      </div>
      <div class="img-item4">
        <img src="@/assets/image/course/icon_course_class.svg" alt="" />
        <span>班级</span>
      </div>
      <div class="img-item5">
        <img src="@/assets/image/course/icon_course_homework.svg" alt="" />
        <span>发布作业</span>
      </div>
      <div class="img-item6">
        <img src="@/assets/image/course/icon_course_team.svg" alt="" />
        <span>我的团队</span>
      </div>
    </div>
    <!-- 下 -->
    <div class="bottom">
      <!-- 左 -->
      <div class="bottom-left">
        <div class="nav">
          <div class="title">课程大纲</div>
          <div class="button">
            <el-button type="primary">编辑大纲</el-button>
          </div>
        </div>
        <div class="course-outline">
          <el-collapse v-model="activeName" accordion @change="changeCollapse">
            <el-collapse-item
              :name="index"
              v-for="(item, index) in 5"
              :key="index"
            >
              <template slot="title">
                <div class="title">第一章：Python</div>
                <div class="dot"><Dot /></div>
              </template>

              <div
                class="outline-item"
                v-for="(item1, index1) in item"
                :key="index1"
              >
                第一节：什么是web程序应用
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>

      <!-- 右 -->
      <div class="bottom-right">
        <div class="data">
          <div class="data-item">
            <div class="num">56756</div>
            <div class="text">视频播放量</div>
          </div>
          <div class="data-item">
            <div class="num">56756</div>
            <div class="text">访问量</div>
          </div>
          <div class="data-item">
            <div class="num">56756</div>
            <div class="text">视频播放量</div>
          </div>
          <div class="data-item">
            <div class="num">56756</div>
            <div class="text">评论数</div>
          </div>
        </div>
        <!--  -->
        <div class="chart">
          <!-- <div class="nav">
            <div class="title">视频播放完成率对比</div>
          </div> -->
          <HeaderTitle name="视频播放完成率对比" />
          <div>
            <VideoChart ref="myChart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoChart from "@/components/videoChart/VideoChart.vue";
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import Dot from "@/components/dot/Dot.vue";
export default {
  components: {
    VideoChart,
    HeaderTitle,
    Dot,
  },
  data() {
    return {
      activeName: 0,
      name: "张雪",
      xData: ["2020-02", "2020-03", "2020-04", "2020-05"],
      yData: [30, 132, 80, 134],
    };
  },
  computed: {},

  mounted() {
    this.$refs.myChart.drawLine();
  },

  methods: {
    changeCollapse(e) {
      console.log("e", e);
    },
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-icon-arrow-right:before {
  background-image: url(../../../assets/image/course/right.svg);
  background-repeat: no-repeat;
  background-size: 28px;
  position: relative;
  right: 500px;
  bottom: 3px;
  // background-color: red;
  content: "\e6e";
}
::v-deep .el-collapse-item__arrow.is-active {
  bottom: 3px;
  -webkit-transform: rotate(0);
  transform: rotate(0);
  background-image: url(../../../assets/image/course/bottom.svg);
  background-repeat: no-repeat;
  background-size: 28px;
  position: relative;
  right: 500px;
  content: "\e6e";
}
::v-deep .el-collapse-item__header {
  display: flex;
  align-items: center;
  line-height: 60px;
  cursor: pointer;
  transition: border-bottom-color 0.3s;
  outline: 0;
  width: 578px;
  height: 60px;
  background: #f6f6f8;
  font-size: 20px;
  color: #333333;
  padding-left: 65px;
  border: none;
  padding-right: 30px;
}
.el-collapse-item {
  position: relative;
  .dot {
    position: absolute;
    right: 20px;
    top: 15px;
    // background-color: rgba(151, 3, 250, 1);
  }
}

.body {
  width: 100%;

  .top {
    margin-top: 12px;
    width: 100%;
    display: flex;
    .top-left {
      padding: 30px;
      position: relative;
      min-width: 1036px;
      width: 100%;
      height: 236px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      display: flex;
      align-items: center;
      .left-img {
        position: relative;
        min-width: 240px;
        height: 136px;
        transition: all 0.5s;
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
        background-color: #2a77ff;
        img {
          min-width: 240px;
          height: 100%;
          border-radius: 8px;
          transition: all 0.5s;
          object-fit: cover;
        }
        &:hover {
          background-color: #000;
        }
        &:hover img {
          opacity: 0.5;
          transform: scale(1.1);
        }
        &:hover span {
          opacity: 1;
        }
        span {
          transition: all 0.5s;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          opacity: 0;
        }
      }
      .right-content {
        margin-left: 40px;
        display: flex;
        //   align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        height: 170px;
        .title {
          font-size: 20px;
          font-weight: bold;
          color: #333333;
        }
        .message {
          display: flex;
          //   width: 84px;
          height: 12px;
          font-size: 12px;

          font-weight: 400;

          color: #999999;

          > div:nth-of-type(1) {
            margin-right: 30px;
          }
          > div:nth-of-type(2) {
            margin-right: 30px;
          }
          > div:nth-of-type(3) {
            margin-right: 30px;
          }
        }
        .detail {
          font-size: 14px;
          line-height: 24px;
          color: #666666;
        }
        .button {
          position: absolute;
          right: 30px;
          top: 30px;
          .el-button {
            // width: 104px;
            height: 40px;
            line-height: 10px;
            background: #2a77ff;
            box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.2);
            &:hover {
              background: #5592fe;
            }
            &:active {
              background: #2065e0;
            }
          }
          .button1 {
            margin-right: 10px;
          }
          .button2 {
            margin-right: 10px;
          }
          .button3 {
          }
        }
      }
    }
    .top-right {
      margin-left: 32px;
      min-width: 516px;
      height: 236px;
      background: #ffffff;
      opacity: 1;
      position: relative;
      a {
        font-size: 14px;
        color: #5592fe;
        text-decoration: underline;
        position: absolute;
        right: 30px;
        top: 30px;
      }
      .center-content {
        width: 100%;
        height: 100%;
        .el-carousel {
          height: 220px;
          //   background-color: #2a77ff;
          .content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            font-size: 14px;
            color: #666666;
            .bottom-content {
              margin-top: 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .bottom-msg {
                // margin-left: 30px;
                display: flex;
                align-items: center;
                font-size: 12px;
                color: #999999;
                .header {
                  width: 24px;
                  height: 24px;
                  background: rgba(151, 3, 250, 1);
                  border-radius: 50%;

                  img {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                  }
                }
                .name {
                  margin-left: 12px;
                }
                .time {
                  margin-left: 12px;
                }
              }
              .delete-img {
                // margin-right: 30px;
                width: 24px;
                height: 24px;
                background: rgba(151, 3, 250, 1);
                border-radius: 50%;
                img {
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
  .center {
    margin-top: 32px;
    display: flex;
    width: 100%;
    .img-item1 {
      min-width: 214px;
      width: 100%;
      position: relative;
      height: 100%;
      img {
        border-radius: 8px;
      }
      span {
        left: 20px;
        bottom: 24px;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .img-item2 {
      height: 106px;
      min-width: 214px;
      width: 100%;
      position: relative;
      margin-left: 60px;
      img {
        border-radius: 8px;
      }
      span {
        left: 20px;
        bottom: 24px;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .img-item3 {
      min-width: 214px;
      width: 100%;
      position: relative;
      height: 106px;
      margin-left: 60px;
      img {
        border-radius: 8px;
      }
      span {
        left: 20px;
        bottom: 24px;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .img-item4 {
      min-width: 214px;
      width: 100%;
      position: relative;
      height: 106px;
      margin-left: 60px;
      img {
        border-radius: 8px;
      }
      span {
        left: 20px;
        bottom: 24px;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .img-item5 {
      min-width: 214px;
      width: 100%;
      position: relative;
      height: 106px;
      margin-left: 60px;
      img {
        border-radius: 8px;
      }
      span {
        left: 20px;
        bottom: 24px;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
      }
    }
    .img-item6 {
      min-width: 214px;
      width: 100%;
      position: relative;
      height: 106px;
      margin-left: 60px;
      img {
        border-radius: 8px;
      }
      span {
        left: 20px;
        bottom: 24px;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
  .bottom {
    display: flex;
    margin-top: 32px;
    width: 100%;
    height: 532px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
    opacity: 1;
    .bottom-left {
      width: 618px;
      background: #ffffff;
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 618px;
        height: 80px;
        background: #ffffff;
        padding: 20px;
        .title {
          // width: 80px;
          padding-left: 12px;
          height: 30px;
          font-size: 20px;
          font-weight: bold;
          color: #666666;
          border-left: 8px solid #2a77ff;
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
      .course-outline {
        width: 578px;
        height: 420px;
        overflow-x: hidden;
        margin: 0 auto;
        .outline-item {
          width: 578px;
          background: #ffffff;
          padding: 24px 30px 0px 30px;
          font-size: 16px;
          line-height: 27px;
          color: #666666;
        }
      }
    }

    .bottom-right {
      margin-left: 32px;
      width: 100%;
      .data {
        min-width: 934px;
        height: 134px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .data-item {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;
          width: 210px;
          height: 100px;
          //   background: #ad0000;
          opacity: 1;
          .num {
            font-size: 30px;
            font-weight: bold;
            color: #2a77ff;
          }
          .text {
            font-size: 16px;
            font-weight: bold;
            color: #666666;
          }
        }
      }
      .chart {
        margin-top: 32px;
        min-width: 934px;
        height: 366px;
        background: #ffffff;
        opacity: 1;
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 618px;
          height: 80px;
          background: #ffffff;
          padding: 20px;
          .title {
            // width: 80px;
            padding-left: 12px;
            height: 30px;
            font-size: 20px;
            font-weight: bold;
            color: #666666;
            border-left: 8px solid #2a77ff;
          }
        }
      }
    }
  }
}
</style>