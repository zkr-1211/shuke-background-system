<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-content">
      <el-row :gutter="32" class="el-row">
        <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4">
          <div class="PC">
            <PersonCard />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="10" :xl="10">
          <div class="PM">
            <PersonFourItem :personal="personal" />
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
          <div class="shuke-tools">
            <HeaderTitle name="树课工具" />
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
                <img
                  src="@/assets/image/home/icon_home_networkdisk.svg"
                  alt=""
                />
              </div>
              <div class="name">树课云盘</div>
              <div class="img1">
                <!-- <img src="@/assets/image/home/ic_forward_h.svg" alt="" /> -->
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
          <div class="school">
            <HeaderTitle name="所在学校/机构" />
            <div v-if="false">
              <div class="school-name">福州大学阳光学院</div>
              <div class="button">
                <a href="/organization">
                  <el-button type="primary">查看管理</el-button>
                </a>
              </div>
            </div>
            <div v-else>
              <div class="school-name">暂无归属学校/机构</div>
              <div class="button">
                <a href="/organization">
                  <el-button type="primary">加入认证</el-button>
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="bottom-content">
      <el-row :gutter="32" class="el-row">
        <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
          <div class="recent-course">
            <HeaderTitle name="最近课程" />
            <div class="course-content" v-loading="loading">
              <template v-if="true">
                <Empty />
              </template>
              <template v-else>
                <router-link to="/course/coursedetail">
                  <div
                    class="course-item"
                    v-for="(item, index) in 6"
                    :key="index"
                  >
                    <div>
                      <img src="@/assets/image/home/course_img1.svg" alt="" />
                    </div>
                    <div class="course-message">
                      <div>大数据科学与技术</div>
                      <div>所在团队：电信教学团队</div>
                      <div class="num">
                        <span>班级个数：1000</span> <span>学生人数：1000</span>
                        <span>题库题目：1000</span> <span>访问次数：1000</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </template>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
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
              <HeaderTitle name="访问量与平均学习时长" />
              <div class="chart" v-loading="loading">
                <ChartLine ref="myChart" />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import ChartLine from "@/components/chartLint/ChartLint.vue";
import PersonCard from "@/components/personCard/PersonCard.vue";
import PersonFourItem from "@/components/personFourItem/PersonFourItem.vue";
import Empty from "@/components/empty/Empty.vue";
export default {
  components: {
    HeaderTitle,
    ChartLine,
    PersonCard,
    PersonFourItem,
    Empty,
  },
  data() {
    return {
      loading: true,
      value2:null,
      personal: {
        name1: "我的课程",
        num1: 12,
        name2: "我的班级",
        num2: 13,
        name3: "我的团队",
        num3: 50,
        name4: "作业待改",
        num4: 10,
      },
    };
  },
  computed: {},

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);

    // const { name, xData, yData } = this;
    // this.$refs.myChart.drawLine();
    var arr1 = [2, 9, 7, 9];
    var arr2 = [9, 7, 8, 1];
    // target = 9;
    console.log("this.getIndex(arr,target)", this.getIndex1(arr1, arr2));
  },

  methods: {
    getIndex(arr, tagert) {
      if (arr instanceof Array == false) {
        alert("第一个参数要数组");
      } else {
        var arra = [];
        var len = arr.length;
        for (var i = 0; i < len; i++) {
          for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] == tagert) {
              arra[0] = i;
              arra[1] = j;
            }
          }
        }
        return arra;
      }
    },
    getIndex1(arr1, arr2) {
      if (arr1 && arr2 instanceof Array == false) {
        alert("参数要数组");
      } else {
        var arra = [];
        var len = arr1.length;
        for (var i = 0; i < len; i++) {
          arra.push(arr1[i] + arr2[i]);
          arra[i] = arra[i] % 10;
          if (arr1[i] + arr2[i] >= 10) {
            if (i > 0) {
              arra[i - 1] = arra[i - 1] + 1;
              if (arra[i - 1] >= 10) {
                arra[i - 1] = arra[i - 1] % 10;
                arra[i - 2] = arra[i - 2] + 1;
              }
            }
          }
        }
        return arra;
      }
    },
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-carousel__container {
  position: relative;
  height: 2rem;
}
.el-row .el-col {
  margin-top: 0.12rem;
}
.body {
  // width: 16.2rem !important;
  .top-content {
    // height: 2.4rem;
    .shuke-tools {
      // min-width: 2.88rem;
      // width: 100%;
      height: 2.4rem;
      background: #fff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      border-radius: 0.08rem;
      overflow: hidden;
      // margin-left: 0.64rem;
      .title {
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
      .big-data {
        height: 0.72rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 0.16rem;
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
          margin-left: 0.15rem;
          img {
            width: 0.4rem;
            height: 0.4rem;
          }
        }
        .img1 {
          width: 0.16rem;
          height: 0.24rem;
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
        height: 0.72rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 0.16rem;
        font-weight: 400;
        cursor: pointer;
        color: #666666;
        .name {
        }
        .img {
          display: flex;
          align-items: center;
          margin-left: 0.12rem;
          img {
            width: 0.4rem;
            height: 0.4rem;
          }
        }
        &:hover .img1 {
          background-image: url(../../../assets/image/home/ic_forward_h.svg) !important;
        }
        &:active .img1 {
          background-image: url(../../../assets/image/home/ic_forward_p.svg) !important;
        }
        .img1 {
          width: 0.16rem;
          height: 0.24rem;
          display: flex;
          align-items: center;
          background-image: url(../../../assets/image/home/ic_forward_n.svg) !important ;
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
      // min-width: 3rem;
      overflow: hidden;
      height: 2.4rem;
      background: #fff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      border-radius: 0.08rem;
      // margin-left: 0.32rem;
      .title {
        // margin: 0.2rem;
        // font-size: 0.2rem;
        font-weight: bold;
        // line-height: 0.34rem;
        color: #666666;
        border-left: 0.08rem solid #5592fe;
        .name {
          margin-left: 0.12rem;
        }
      }
      .school-name {
        // height: 0.75rem;
        text-align: center;
        // line-height: 0.75rem;
        font-size: 0.18rem;
        color: #666666;
        //  margin-top: 0.15rem;
      }
      .button {
        text-align: center;
        color: #f4f4f4;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0.8rem;
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
  .bottom-content {
    // display: flex;
    width: 100%;
    height: 6.64rem;
    margin-top: 0.28rem;
    .recent-course {
      overflow: hidden;
      // width: 9.2rem;
      height: 6.64rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      border-radius: 0.08rem;
      .title {
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
      .course-content {
        width: 100%;
        height: 5.28rem;
        overflow-x: hidden;
        background-color: #ffffff;
        .course-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          // width: 9.32rem;
          height: 1.76rem;
          &:hover {
            background-color: #fafafa;
          }
          &:active {
            background-color: #f4f4f4;
          }
          img {
            display: flex;
            align-items: center;
            margin-left: 0.4rem;
            width: 2.4rem;
            height: 1.36rem;
            background: rgba(0, 0, 0, 0);
            box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.16);
            border-radius: 0.08rem;
            object-fit: cover;
          }
          .course-message {
            margin-left: 0.25rem;
            height: 1.36rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > div:nth-of-type(1) {
              margin-top: 0.2rem;
              font-size: 0.2rem;
              font-weight: bold;
              color: #333333;
            }
            > div:nth-of-type(2) {
              font-size: 0.16rem;
              color: #666666;
            }
            .num {
              font-size: 0.12rem;
              color: #999999;
              span:nth-of-type(2) {
                margin-left: 0.3rem;
              }
              span:nth-of-type(3) {
                margin-left: 0.3rem;
              }
              span:nth-of-type(4) {
                margin-left: 0.3rem;
              }
            }
          }
        }
      }
    }
    .right-content {
      // margin-left: 0.32rem;
      // width: 6.2rem;
      height: 100%;
      // background-color: #fff;
      border-radius: 0.08rem;
      .el-carousel {
        border-radius: 0.08rem;
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 0.14rem;
        opacity: 0.75;
        line-height: 1.5rem;
        margin: 0;
      }
      .banner {
        // width: 6.2rem;
        height: 3rem;
        background-color: #2a77ff;
        object-fit: cover;
        img {
          width: 100%;
          height: 3rem;
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
        // left: 9.5rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        list-style: none;
        // margin: 3rem;
        padding-right: 0.6rem;
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
        width: 0.1rem;
        height: 0.1rem;
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
      // width: 6.2rem;
      overflow: hidden;
      height: 4.32rem;
      background: #ffffff;
      opacity: 1;
      margin-top: 0.28rem;
      border-radius: 0.08rem;
      // display: flex;
      // overflow: auto;
      // .map {
      // display: flex;
      flex-direction: column;
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
      .chart {
        // background-color: #2a77ff;
      }
      //
    }
  }
}
</style>