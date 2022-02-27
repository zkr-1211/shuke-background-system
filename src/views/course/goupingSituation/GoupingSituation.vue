<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-bar">
          <HeaderTitle name="作业/任务情况" />
        </div>
      </el-col>
    </el-row>
    <div class="bottom">
      <div class="content-item" v-for="(item, index) in 8" :key="index">
        <HeaderTitle :name="'第' + (index + 1) + '组'" />
        <div class="total">共100人</div>
        <div class="nav-title">
          <div class="people">成员</div>
          <div class="num-text">学号</div>
        </div>
        <div class="content">
          <div
            class="item"
            v-for="(item, index) in 30"
            :key="index"
            :class="index % 2 == 1 ? 'item-background' : ''"
          >
            <div class="left-message">
              <div class="header">
                <img src="@/assets/image/home/img_empty_big.svg" alt="" />
              </div>
              <div class="name">张克榕</div>
            </div>
            <div class="num">182718144</div>
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
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle.vue";
import Dot from "@/components/Dot/Dot.vue";
export default {
  components: {
    HeaderTitle,
    Dot,
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.top-bar {
     margin-top: 0.12rem;
     // width: 15.84rem;
     height: 0.8rem;
     background: #ffffff;
     box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
     display: flex;
     align-items: center;
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
}
 .bottom {
     margin-top: 0.4rem;
     display: flex;
     // justify-content: space-between;
     flex-wrap: wrap;
     .content-item {
         width: 3.72rem;
         height: 7.28rem;
         margin-right: 0.26rem;
         margin-bottom: 0.29rem;
         background-color: #fff;
         position: relative;
         .total {
             font-size: 0.16rem;
             color: #999999;
             position: absolute;
             top: 0.28rem;
             left: 1.5rem;
        }
         .nav-title {
             display: flex;
             align-items: center;
             font-size: 0.14rem;
             font-weight: bold;
             color: #666666;
             // width: 4rem;
             height: 0.48rem;
             // background: #977b7b;
             padding-left: 0.2rem;
             // justify-content: space-between;
             .people {
                 padding-left: 0.2rem;
                 // margin-left: 1.6rem;
                 // background-color: red;
            }
             .num-text {
                 margin-left: 1.1rem;
                 // background-color: coral;
            }
        }
         .content {
             // display: flex;
             height: 5.8rem;
             overflow: overlay;
             // width: 100%;
             .item {
                 // background-color: chartreuse;
                 // width: 100%;
                 display: flex;
                 align-items: center;
                 padding-left: 0.4rem;
                 position: relative;
                 height: 0.6rem;
                 font-size: 0.14rem;
                 color: #666666;
                 .left-message {
                     display: flex;
                     align-items: center;
                     .header {
                         width: 0.32rem;
                         height: 0.32rem;
                         // background-color: forestgreen;
                         border-radius: 50%;
                         img {
                             width: 0.32rem;
                             height: 0.32rem;
                        }
                    }
                     .name {
                         margin-left: 0.12rem;
                    }
                }
                 .num {
                     margin-left: 0.53rem;
                }
                 .dot3 {
                     position: absolute;
                     top: 0.17rem;
                     right: 0.3rem;
                }
            }
             .item-background {
                 background-color: #fafafa;
            }
        }
    }
}
 
</style>