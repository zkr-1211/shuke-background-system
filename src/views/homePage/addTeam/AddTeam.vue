<!--  -->
<template>
  <div class='home'>

    <div class="top">
      <el-row class="el-row">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="top-background1"><img src="@/assets/image/home/_illustration-bottom.svg" alt=""></div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="top-background2"><img src="@/assets/image/home/_illustration-bottom.svg" alt=""></div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="top-background3"><img src="@/assets/image/home/_illustration-bottom.svg" alt=""></div>
        </el-col>
      </el-row>
    </div>

    <div class="center">
      <div class="main">
        <div class="logo"><img src="@/assets/image/home/icon_shuke.svg" alt=""></div>
        <div class="title">Hi, 蔡裕兰 邀请你加入 阳光物理课程团队</div>
        <div class="button">
          <Button name="加入团队" />
        </div>
        <div class="span">树课让创课更加轻松
          <p>www.shu.ke</p>
        </div>
      </div>
    </div>
    <div class="top">
      <el-row class="el-row">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="top-background1"><img src="@/assets/image/home/_illustration-top.svg" alt=""></div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="top-background2"><img src="@/assets/image/home/_illustration-top.svg" alt=""></div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="top-background3"><img src="@/assets/image/home/_illustration-top.svg" alt=""></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button/Button";
export default {
  components: {
    Button,
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
.home {
     display: flex;
     height: 100vh;
     flex-direction: column;
     align-items: center;
     .top {
         display: flex;
         // height: 1.8rem;
         // background-color: red;
         .top-background1 {
             // width: 100%;
             img {
                 width: 100%;
            }
        }
         .top-background2 {
             img {
                 width: 100%;
            }
        }
         .top-background3 {
             img {
                 width: 100%;
            }
        }
    }
     .center {
         flex: 1;
         display: flex;
         text-align: center;
         align-items: center;
         justify-content: center;
         .main {
             width: 5.2rem;
             height: 4.2rem;
             background: #ffffff;
             box-shadow: 0rem 0.03rem 0.2rem rgba(42, 119, 255, 0.12);
             opacity: 1;
             border-radius: 0.12rem;
             text-align: center;
             // overflow: hidden;
             .logo {
                 padding-top: 0.35rem;
                 img {
                }
            }
             .title {
                 font-size: 0.2rem;
                 font-family: Source Han Sans CN;
                 font-weight: 500;
                 // line-height: 0.34rem;
                 color: #333333;
                 opacity: 1;
                 margin-top: 0.25rem;
            }
             .button {
                 margin-top: 0.42rem;
                 display: flex;
                 text-align: center;
                 align-items: center;
                 justify-content: center;
                 // text-align: center;
                 width: 100%;
                 // background-color: chartreuse;
            }
             .span {
                 font-size: 0.12rem;
                 color: #999999;
                 opacity: 1;
                 margin-top: 0.25rem;
            }
        }
    }
}
 
</style>