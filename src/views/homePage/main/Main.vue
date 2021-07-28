<!--  -->
<template>
  <div class="body">
    <p>首页</p>
    <div class="top-content">
      <PersonCard />
      <PersonFourItem />
      <div class="shuke-tools">
        <div class="title">
          <div class="name">树课工具</div>
        </div>
        <div class="big-data">
          <div class="img">
            <img src="@/assets/image/home/icon_home_bigdate.svg" alt="" />
          </div>
          <div class="name">大数据中心</div>
          <div class="img1">
            <!-- <img src="@/assets/image/home/ic_forward_n.svg" alt="" /> -->
          </div>
        </div>
        <div class="shuke-yunpan">
          <div class="img">
            <img src="@/assets/image/home/icon_home_networkdisk.svg" alt="" />
          </div>
          <div class="name">树课云盘</div>
          <div class="img1">
            <!-- <img src="@/assets/image/home/ic_forward_h.svg" alt="" /> -->
          </div>
        </div>
      </div>
      <div class="school">
        <div class="title">
          <div class="name">所在学校/机构</div>
        </div>
        <div v-if="false">
          <div class="school-name">福州大学阳光学院</div>
          <div class="button">
            <a href="/organization">
              <el-button type="primary">查看管理</el-button></a
            >
          </div>
        </div>
        <div v-else>
          <div class="school-name">暂无归属学校/机构</div>
          <div class="button">
            <a href="/organization">
              <el-button type="primary">加入认证</el-button></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="recent-course">
        <div class="title">
          <div class="name">最近课程</div>
        </div>
        <div class="course-content">
          <div class="empty" v-if="false">
            <div class="img">
              <img src="@/assets/image/home/img_empty_big.svg" alt="" />
            </div>
            <div class="text">还未创建任何课程</div>
            <div class="button">
              <el-button type="primary">前往创建</el-button>
            </div>
          </div>
          <div
            class="course-item"
            v-for="(item, index) in 6"
            :key="index"
            v-else
          >
            <div><img src="@/assets/image/home/course_img1.svg" alt="" /></div>
            <div class="course-message">
              <div>大数据科学与技术</div>
              <div>所在团队：电信教学团队</div>
              <div class="num">
                <span>班级个数：1000</span> <span>学生人数：1000</span>
                <span>题库题目：1000</span> <span>访问次数：1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-content">
        <div>
          <div class="block">
            <el-carousel trigger="click">
              <el-carousel-item v-for="item in 4" :key="item">
                <div class="banner">
                  <img src="@/assets/image/home/course_img1.svg" alt="" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="data">
          <!-- <div class="map"> -->
          <!-- <div class="title">
            <div class="name">访问量与平均学习时长</div>
          </div> -->
          <HeaderTitle name="访问量与平均学习时长"/>
          <div class="chart">
            <!-- <div> -->
              <ChartLine ref="myChart" />
            <!-- </div> -->

            <!-- <div id="myChart" style="width: 600px;height: 400px;"></div> -->
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import ChartLine from "@/components/chartLint/ChartLint.vue";
import PersonCard from "@/components/personCard/PersonCard.vue";
import PersonFourItem from "@/components/personFourItem/PersonFourItem.vue";
export default {
  components: {
    HeaderTitle,
    ChartLine,
    PersonCard,
    PersonFourItem,
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {
    // const { name, xData, yData } = this;
    this.$refs.myChart.drawLine();
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
::v-deep .el-carousel__container {
    position: relative;
    height: 200px;
}
.body {
  p {
    font-size: 14px;
    color: #666666;
    margin-bottom: 5px;
  }
  .top-content {
    margin-top: 12px;
    display: flex;
    width: 100%;
    height: 240px;
    .shuke-tools {
      min-width: 288px;
      width: 100%;
      height: 240px;
      background: #fff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      border-radius: 8px;
      margin-left: 64px;
      .title {
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
      .big-data {
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 16px;
        font-weight: 400;
        color: #666666;
        cursor: pointer;
        &:hover .img1 {
          background-image: url(../../../assets/image/home/ic_forward_h.svg) !important;
        }
        &:active .img1 {
          background-image: url(../../../assets/image/home/ic_forward_p.svg) !important;
        }
        .name {
        }
        .img {
          display: flex;
          align-items: center;
          margin-left: 15px;
          img {
            width: 40px;
            height: 40px;
          }
        }
        .img1 {
          width: 16px;
          height: 24px;
          display: flex;
          align-items: center;
          background-image: url(../../../assets/image/home/ic_forward_n.svg) !important;
          background-repeat: no-repeat;
          background-size: cover;
        }
        &:hover {
          background-color: #fafafa;
          color: #2a77ff;
        }
      }
      .shuke-yunpan {
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        color: #666666;
        .name {
        }
        .img {
          display: flex;
          align-items: center;
          margin-left: 12px;
          img {
            width: 40px;
            height: 40px;
          }
        }
        &:hover .img1 {
          background-image: url(../../../assets/image/home/ic_forward_h.svg) !important;
        }
        &:active .img1 {
          background-image: url(../../../assets/image/home/ic_forward_p.svg) !important;
        }
        .img1 {
          width: 16px;
          height: 24px;
          display: flex;
          align-items: center;
          background-image: url(../../../assets/image/home/ic_forward_n.svg)  !important ;
          background-repeat: no-repeat;
          background-size: cover;
        }
        &:hover {
          background-color: #fafafa;
          color: #2a77ff;
        }
      }
    }
    .school {
      width: 100%;
      min-width: 300px;
      height: 240px;
      background: #fff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      border-radius: 8px;
      margin-left: 32px;
      .title {
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
      .school-name {
        height: 75px;
        text-align: center;
        line-height: 75px;
        font-size: 18px;
        color: #666666;
      }
      .button {
        text-align: center;
        color: #f4f4f4;
        margin-top: 5px;
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
  .bottom-content {
    display: flex;
    width: 100%;
    height: 664px;
    margin-top: 32px;
    .recent-course {
      width: 938px;
      height: 664px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      border-radius: 8px;
      .title {
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
      .course-content {
        width: 100%;
        height: 528px;
        overflow-x: hidden;
        background-color: #fafafa;
        .empty {
          margin-top: 100px;
          height: 330px;
          width: 100%;
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
        .course-item {
          display: flex;
          align-items: center;
          width: 932px;
          height: 176px;

          img {
            margin-left: 40px;
            width: 240px;
            height: 136px;
            background: rgba(0, 0, 0, 0);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            border-radius: 8px;
          }
          .course-message {
            margin-left: 25px;
            height: 136px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > div:nth-of-type(1) {
              margin-top: 20px;
              font-size: 20px;
              font-weight: bold;
              color: #333333;
            }
            > div:nth-of-type(2) {
              font-size: 16px;
              color: #666666;
            }

            .num {
              font-size: 12px;
              color: #999999;
              span:nth-of-type(2) {
                margin-left: 30px;
              }
              span:nth-of-type(3) {
                margin-left: 30px;
              }
              span:nth-of-type(4) {
                margin-left: 30px;
              }
            }
          }
        }
      }
    }
    .right-content {
      margin-left: 32px;
      width: 620px;
      height: 100%;
      // background-color: #fff;
      border-radius: 8px;
       .el-carousel {
        border-radius: 8px;
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }

      .banner {
        width: 620px;
        height: 300px;
        background-color: #2a77ff;
        object-fit: cover;
        img {
          width: 620px;
        height: 300px;
          object-fit: cover;
        }
      }
      .el-carousel__item:nth-child(2n) {
        // background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        // background-color: #d3dce6;
      }
      ::v-deep .el-carousel__indicators {
        // position: absolute;
        // left: 950px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        list-style: none;
        // margin: 300px;
        padding-right: 60px;
        z-index: 2;
      }
      ::v-deep .el-carousel__indicator.is-active button {
        opacity: 1;
        background-color: #2a77ff;
      }
      ::v-deep .el-carousel__button {
        display: flex;
        justify-content: flex-end;
        // display: block;
        opacity: 0.48;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border: none;
        border-radius: 50%;
        outline: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
        transition: 0.3s;
      }
    }
    .data {
      width: 620px;
      height: 432px;
      background: #ffffff;
      opacity: 1;
      margin-top: 32px;
      border-radius: 8px;
      // display: flex;
      // overflow: auto;
      // .map {
      // display: flex;
      flex-direction: column;
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
      .chart {
        // background-color: #2a77ff;
      }
      // }
    }
  }
}
</style>