<!--  -->
<template>
  <div class='body'>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>全部评价</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-bar">
          <HeaderTitle name="全部评价" />
          <div class="evaluation">
            <div class="text">评分</div>
            <div class="num">4.5</div>
            <div class="icon">
              <el-rate disabled text-color="#ff9900" v-model="rateValue"></el-rate>
            </div>
          </div>

        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="bottom">
          <div class="main-content">
            <div class="content" v-for="(item,index) in 9" :key="index">
              <div class="des">
                理论、方法和技能，受到系统的科学研究训练，具备一定的大数据科学研究能，受到系统的科学研究能，受到系统
              </div>

              <div class="bottom-content">
                <div class="bottom-msg">
                  <div class="header">
                    <img src="@/assets/image/home/course_img1.svg" alt="" />
                  </div>
                  <div class="name">张克榕</div>
                  <div class="time">2019/10/15 12:20:23</div>
                </div>
                <div class="delete-img">
                  <el-rate disabled text-color="#ff9900" v-model="rateValue"></el-rate>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="100">
            </el-pagination>
          </div>
        </div>

        <!-- <Navigation :tabList="tabList" @tabsIndex="tabsIndex" :filtrate="true" /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle.vue";
export default {
  components: {
    HeaderTitle,
  },
  data() {
    return {
      rateValue: 4.5,
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
::v-deep .el-dialog {
     line-height: 0rem;
}
 .top-bar {
     margin-top: 0.12rem;
     // width: 15.84rem;
     height: 0.8rem;
     background: #ffffff;
     box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
     display: flex;
     align-items: center;
     position: relative;
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
     .evaluation {
         display: flex;
         align-items: center;
         position: absolute;
         right: 1.12rem;
         vertical-align: bottom;
         .text {
             margin-top: 0.1rem;
             font-size: 0.14rem;
             color: #666666;
        }
         .num {
             margin-left: 0.12rem;
             font-size: 0.36rem;
             font-weight: bold;
             color: #333333;
        }
         .icon {
             margin-left: 0.18rem;
             font-size: 0.25rem;
             el-rate {
            }
        }
    }
}
 .bottom {
     padding: 0.62rem 1.12rem 2.24rem 1.12rem;
     // width: 15.84rem;
     margin-top: 0.32rem;
     height: 8.2rem;
     background: #ffffff;
     opacity: 1;
     border-radius: 0.04rem;
     .main-content {
         display: flex;
         flex-wrap: wrap;
         overflow: overlay;
         height: 6rem;
         .content {
             padding: 0.4rem;
             width: 4.3rem;
             height: 1.8rem;
             background: #f6f6f8;
             opacity: 1;
             border-radius: 0.04rem;
             font-size: 0.14rem;
             color: #666666;
             margin-right: 0.2rem;
             margin-bottom: 0.2rem;
             // height: 1.2rem;
             // overflow: overlay;
             .des {
                 height: 0.7rem;
                 overflow: overlay;
                 line-height: 0.24rem;
            }
             .bottom-content {
                 margin-top: 0.2rem;
                 display: flex;
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
                         margin-top: 0.025rem;
                         margin-left: 0.12rem;
                    }
                }
                 .delete-img {
                     height: 0.24rem;
                     margin-top: 0.025rem;
                     border-radius: 50%;
                     display: flex;
                     align-items: center;
                }
            }
        }
    }
     .el-pagination {
         margin-top: 0.5rem;
         text-align: center;
    }
}
 
</style>