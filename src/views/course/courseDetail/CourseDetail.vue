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
      <el-row :gutter="32" class="el-row">
        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
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
              <div class="button" @click="toSetting()">
                <Button name="设置" />
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="top-right">
            <HeaderTitle name="学员评价" />
            <router-link to="/course/all_evaluation">共有100条评价>></router-link>
            <div class="center-content">
              <el-carousel :interval="10000" arrow="always" indicator-position="none">
                <el-carousel-item v-for="item in 1" :key="item">
                  <div class="content">
                    本专业旨在培养社会急需的具备
                    大数据处理及分析能力的高级复合型人才。具体包括：掌握计算机科学、大数据科学与信息技术的基本理论、方法和技能，受到系统的科学研究训练，具备一定的大数据科学研究
                    <div class="bottom-content">
                      <div class="bottom-msg">
                        <div class="header">
                          <img src="@/assets/image/home/course_img1.svg" alt="" />
                        </div>
                        <div class="name">张老板</div>
                        <div class="time">2019/10/15 12:20:23</div>
                      </div>
                      <div class="rate">
                        <el-rate v-model="value2" :colors="colors" disabled></el-rate>
                      </div>
                      <!-- <div class="delete-img">
                        <img src="@/assets/image/home/course_img1.svg" alt="" />
                      </div> -->
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 中 -->
    <div class="center">
      <el-row :gutter="60" class="el-row">
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
          <router-link to="/course/tasksituation">
            <div class="img-item">
              <img src="@/assets/image/course/icon_course_correction.svg" alt="" />
              <span>作业/任务批改</span>
            </div>
          </router-link>
        </el-col>
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
          <router-link to="">
            <div class="img-item">
              <img src="@/assets/image/course/icon_course_exercises.svg" alt="" />
              <span>题库</span>
            </div>
          </router-link>
        </el-col>
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
          <router-link to="/course/ladders">
            <div class="img-item">
              <img src="@/assets/image/course/icon_course_match.svg" alt="" />
              <span>天梯赛</span>
            </div>
          </router-link>
        </el-col>
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
          <router-link to="/homePage/myclass">
            <div class="img-item">
              <img src="@/assets/image/course/icon_course_class.svg" alt="" />
              <span>班级</span>
            </div>
          </router-link>
        </el-col>
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
          <router-link to="">
            <div class="img-item">
              <img src="@/assets/image/course/icon_course_homework.svg" alt="" />
              <span>发布作业</span>
            </div>
          </router-link>
        </el-col>
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
          <router-link to="/homePage/myteam">
            <div class="img-item">
              <img src="@/assets/image/course/icon_course_team.svg" alt="" />
              <span>我的团队</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <!-- 下 -->
    <div class="bottom">
      <el-row :gutter="32" class="el-row">
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <!-- 左 -->
          <div class="bottom-left">
            <HeaderTitle name="课程大纲" />
            <div class="nav">
              <div class="button">
                <el-button type="primary">编辑大纲</el-button>
              </div>
            </div>
            <CourseOutline />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
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
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import VideoChart from '@/components/VideoChart/VideoChart.vue'
  import HeaderTitle from '@/components/HeaderTitle/HeaderTitle.vue'
  import CourseOutline from '@/components/CourseOutline/CourseOutline.vue'
  import Dot from '@/components/Dot/Dot.vue'
  import Button from '@/components/Button/Button.vue'
  export default {
    components: {
      VideoChart,
      HeaderTitle,
      CourseOutline,
      Dot,
      Button
    },
    data() {
      return {
        name: '张雪',
        xData: ['2020-02', '2020-03', '2020-04', '2020-05'],
        yData: [30, 132, 80, 134],
        value2: 4.5,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      }
    },
    computed: {},

    mounted() {},

    methods: {
      toSetting() {
        console.log('111')
        this.$router.push('/course/Setting')
      }
    }
  }
</script>
<style lang="scss" scoped>
  ::v-deep .el-carousel__container {
    // position: relative;
    height: 1.3rem;
  }
  ::v-deep .el-carousel__arrow {
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    height: 0.2rem;
    width: 0.2rem;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    // border-radius: 50%;
    background-color: rgba(0, 0, 0, 0);
    color: #2a77ff;
    font-weight: 900;
    position: absolute;
    top: 35%;
    // right: -0.01rem;
    z-index: 10;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    font-size: 0.2rem;
  }
  .el-row .el-col {
    margin-top: 0.12rem;
  }
  .body {
    width: 100%;
    .top {
      width: 100%;
      .top-left {
        padding: 0.3rem;
        position: relative;
        // min-width: 10.36rem;
        // width: 100%;
        height: 2.36rem;
        background: #ffffff;
        box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
        display: flex;
        align-items: center;
        .left-img {
          position: relative;
          min-width: 2.4rem;
          height: 1.36rem;
          transition: all 0.5s;
          border-radius: 0.08rem;
          cursor: pointer;
          overflow: hidden;
          background-color: #2a77ff;
          img {
            min-width: 2.4rem;
            height: 100%;
            border-radius: 0.08rem;
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
            font-size: 0.16rem;
            font-weight: bold;
            color: #ffffff;
            text-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.16);
            opacity: 0;
          }
        }
        .right-content {
          margin-left: 0.4rem;
          display: flex;
          // align-items: center;
          flex-direction: column;
          justify-content: space-evenly;
          height: 1.7rem;
          .title {
            font-size: 0.2rem;
            font-weight: bold;
            color: #333333;
          }
          .message {
            display: flex;
            // width: 0.84rem;
            height: 0.12rem;
            font-size: 0.12rem;
            font-weight: 400;
            color: #999999;
            > div:nth-of-type(1) {
              margin-right: 0.3rem;
            }
            > div:nth-of-type(2) {
              margin-right: 0.3rem;
            }
            > div:nth-of-type(3) {
              margin-right: 0.3rem;
            }
          }
          .detail {
            font-size: 0.14rem;
            line-height: 0.24rem;
            color: #666666;
          }
          .button {
            position: absolute;
            right: 0.3rem;
            top: 0.3rem;
            .el-button {
              // width: 1.04rem;
              height: 0.4rem;
              line-height: 0.1rem;
              background: #2a77ff;
              box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
              &:hover {
                background: #5592fe;
              }
              &:active {
                background: #2065e0;
              }
            }
            .button1 {
              margin-right: 0.1rem;
            }
            .button2 {
              margin-right: 0.1rem;
            }
            .button3 {
            }
          }
        }
      }
      .top-right {
        // margin-left: 0.32rem;
        // min-width: 5.16rem;
        height: 2.36rem;
        background: #ffffff;
        opacity: 1;
        position: relative;
        a {
          font-size: 0.14rem;
          color: #5592fe;
          text-decoration: underline;
          position: absolute;
          right: 0.3rem;
          top: 0.3rem;
        }
        .center-content {
          // width: 5.16rem;
          height: 2.36rem;
          // padding: 0 0.1rem;
          ::v-deep .el-carousel {
            height: 2.8rem !important;
            // background-color: #2a77ff;
            .content {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 80%;
              font-size: 0.14rem;
              color: #666666;
              height: 1.25rem;
              overflow: overlay;
              .bottom-content {
                margin-top: 0.2rem;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                .bottom-msg {
                  // margin-left: 0.3rem;
                  display: flex;
                  align-items: center;
                  font-size: 0.12rem;
                  color: #999999;
                  .header {
                    width: 0.24rem;
                    height: 0.24rem;
                    background: rgba(151, 3, 250, 1);
                    border-radius: 50%;
                    img {
                      width: 0.24rem;
                      height: 0.24rem;
                      border-radius: 50%;
                    }
                  }
                  .name {
                    margin-left: 0.12rem;
                  }
                  .time {
                    margin-top: 0.032rem;
                    margin-left: 0.12rem;
                  }
                }
                .rate {
                  // background: red;
                }
                .delete-img {
                  // margin-right: 0.3rem;
                  width: 0.24rem;
                  height: 0.24rem;
                  background: rgba(151, 3, 250, 1);
                  border-radius: 50%;
                  img {
                    width: 0.24rem;
                    height: 0.24rem;
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
      margin-top: 0.2rem;
      .img-item {
        // width: 2.14rem;
        position: relative;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        //  align-items: center;
        img {
          border-radius: 0.08rem;
          // width: 2.14rem;
          height: 1.06rem;
          border-radius: 0.1rem;
        }
        span {
          left: 0.2rem;
          bottom: 0.24rem;
          position: absolute;
          font-size: 0.2rem;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
    .bottom {
      // display: flex;
      margin-top: 0.2rem;
      // width: 100%;
      height: 5.32rem;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      opacity: 1;
      .bottom-left {
        // width: 6.18rem;
        background: #ffffff;
        position: relative;
        .nav {
          .button {
            position: absolute;
            top: 0.18rem;
            right: 0.3rem;
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
      .bottom-right {
        // margin-left: 0.32rem;
        // width: 100%;
        .data {
          // width: 9.34rem;
          height: 1.34rem;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          .data-item {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            width: 2.1rem;
            height: 1rem;
            // background: #ad0000;
            opacity: 1;
            .num {
              font-size: 0.3rem;
              font-weight: bold;
              color: #2a77ff;
            }
            .text {
              font-size: 0.16rem;
              font-weight: bold;
              color: #666666;
            }
          }
        }
        .chart {
          margin-top: 0.32rem;
          // min-width: 9.34rem;
          height: 3.66rem;
          background: #ffffff;
          opacity: 1;
          .nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 6.18rem;
            height: 0.8rem;
            background: #ffffff;
            padding: 0.2rem;
            .title {
              // width: 0.8rem;
              padding-left: 0.12rem;
              height: 0.3rem;
              font-size: 0.2rem;
              font-weight: bold;
              color: #666666;
              border-left: 0.08rem solid #2a77ff;
            }
          }
        }
      }
    }
  }
</style>
