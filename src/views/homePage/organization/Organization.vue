<template>
  <div class="body">
    <div class="top">
      <div class="logo">
        <img src="@/assets/image/home/icon_shuke.svg" alt="" />
      </div>
    </div>
    <div class="center">
      <div class="content-title">
        <div class="left-item">
          <router-link to="/main">
            <div class="img">
              <!-- <img src="@/assets/image/home/ic_back_n.svg" alt="" /> -->
            </div>
          </router-link>
          <span>返回首页</span>
        </div>
        <div class="title">学校/机构信息</div>
      </div>
    </div>
    <div class="bottom">
      <!-- <div class="Tabs">
        <Tabs :tabList="tabList" @tabsIndex="tabsIndex"> </Tabs>
      </div> -->
      <div class="notice-message" v-if="false">
        <div class="message">
          <div class="label">名称</div>
          <div class="content">福州大学阳光学院</div>
        </div>
        <div class="message">
          <div class="label">地址</div>
          <div class="content">福建省福州市马尾区君竹路99号阳光学院</div>
        </div>
        <div class="message">
          <div class="label">注册人</div>
          <div class="content">张老板</div>
        </div>
        <div class="message">
          <div class="label">认证时间</div>
          <div class="content">2021年</div>
        </div>
        <div class="message">
          <div class="label">手机号</div>
          <div class="content">18750659428</div>
        </div>
      </div>
      <div class="notice-message" v-else>
        <div class="message">
          <div class="label">名称</div>
          <div class="content">福州大学阳光学院</div>
        </div>
        <div class="message">
          <div class="label">地址</div>
          <div class="content">福建省福州市马尾区君竹路99号阳光学院</div>
        </div>
        <div class="message">
          <div class="label">注册人</div>
          <div class="content">张老板</div>
        </div>
        <div class="message">
          <div class="label">身份证</div>
          <div class="content">545954855455144X</div>
        </div>
        <div class="message">
          <div class="label">手机号</div>
          <div class="content">18750659428</div>
        </div>
        <div class="message">
          <div class="label">学校编号</div>
          <div class="content">18750659428</div>
        </div>
        <div class="message">
          <div class="label">学校证件</div>
          <div class="content">上传</div>
        </div>
      </div>
      <div class="button">
        <el-button type="primary" v-if="false">人员管理</el-button>
        <el-button type="primary" v-else>申请认证</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs/Tabs.vue";
export default {
  components: {
    Tabs,
  },
  data() {
    return {
      tabIndex: 0,
      tabList: [
        {
          title: "与我相关",
        },
        {
          title: "团队动态",
        },
      ],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    tabsIndex(index) {
      this.tabIndex = index;
    },
  },
};
</script>
<style lang='scss' scoped>
.body {
     .top {
         width: 100%;
         height: 0.64rem;
         background: #ffffff;
         display: flex;
         align-items: center;
         .logo {
             display: flex;
             margin: 0 auto;
             width: 10rem;
             img {
            }
        }
    }
     .center {
         margin: 0.5rem auto 0.24rem;
         width: 10rem;
         text-align: center;
         .content-title {
             position: relative;
             .left-item {
                 position: absolute;
                 left: 0;
                 display: flex;
                 align-items: center;
                 .img {
                     width: 0.32rem;
                     height: 0.32rem;
                     background-image: url(../../../assets/image/home/ic_back_n.svg) !important;
                     background-repeat: no-repeat;
                     background-size: cover;
                }
                 &:hover .img {
                     background-image: url(../../../assets/image/home/ic_back_h.svg) !important;
                }
                 &:active .img {
                     background-image: url(../../../assets/image/home/ic_back_p.svg) !important;
                }
                 span {
                     margin-left: 0.12rem;
                     font-size: 0.16rem;
                     line-height: 0.27rem;
                     color: #333333;
                }
            }
             .title {
                 font-size: 0.2rem;
                 font-weight: bold;
                 line-height: 0.34rem;
                 color: #666666;
            }
        }
    }
     .bottom {
         margin: 0rem auto;
         width: 10rem;
         height: 8.2rem;
         background: #ffffff;
         box-shadow: 0rem 0.03rem 0.04rem rgba(0, 0, 0, 0.16);
         overflow: hidden;
         .notice-message {
             margin: 0.6rem auto 0;
             height: 6.7rem;
             width: 7rem;
             overflow: hidden;
             // background-color: red;
             padding-right: 0.3rem;
             .message {
                 width: 7rem;
                 height: 0.56rem;
                 // background: red;
                 opacity: 1;
                 display: flex;
                 align-items: center;
                 .label {
                     width: 1.5rem;
                     font-size: 0.14rem;
                     font-weight: bold;
                     color: #333334;
                }
                 .content {
                     font-size: 0.14rem;
                     color: #666666;
                }
            }
        }
         .button {
             width: 100%;
             text-align: center;
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
</style>