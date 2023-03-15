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
        <div class="title">全部消息</div>
      </div>
    </div>
    <div class="bottom">
      <div class="Tabs">
        <Tabs :tabList="tabList" @tabsIndex="tabsIndex"> </Tabs>
      </div>
      <div class="notice-message" v-if="tabIndex == 0">
        <div class="notice" v-for="(item, index) in 10" :key="index">
          <div class="left-item">
            <div class="img">
              <img src="@/assets/image/home/topbar_notice_label.svg" alt="" />
            </div>
            <div class="info">
              陈小平 提醒您修改 课程:UI设计 标设计陈小平 提醒您修改 课程:UI设计
              标设计陈小平 提醒您修改 课程:UI设计 标设计
            </div>
          </div>
          <div class="time">01月21日</div>
        </div>
      </div>
      <div class="notice-message" v-else>
        <div class="notice" v-for="(item, index) in 10" :key="index">
          <div class="left-item">
            <div class="img">
              <img src="@/assets/image/home/topbar_notice_label.svg" alt="" />
            </div>
            <div class="info">陈小平标设计</div>
          </div>
          <div class="time">01月21日</div>
        </div>
      </div>
      <div class="pagination">
        <div>
          <el-pagination
            :page-size="10"
            layout="prev, pager, next"
            :total="165"
          >
          </el-pagination>
        </div>
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
      //   console.log("index", index);
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
          display: flex;
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
    .Tabs {
      margin-top: 0.15rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: red;
      //消息内容
    }
    .notice-message {
      margin: 0.2rem auto 0;
      height: 6rem;
      width: 8rem;
      overflow: hidden;
      // background-color: red;
      padding-right: 0.3rem;
      .notice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.01rem solid #e0e0e0;
        padding: 0.2rem 0.2rem 0.2rem 0.2rem;
        height: 0.56rem;
        // line-height: 0.56rem;
        cursor: pointer;
        &:hover {
          background-color: #e8e8e8;
        }
        &:active {
          background-color: #c2c2c2;
        }
        .left-item {
          display: flex;
          align-items: center;
          .img {
            display: flex;
            width: 0.15rem;
            height: 0.15rem;
            // background-color: #2a77ff;
            img {
              width: 0.15rem;
              height: 0.15rem;
            }
          }
          .info {
            width: 100%;
            font-size: 0.14rem;
            font-weight: 400;
            color: #333334;
            margin-left: 0.15rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
        .time {
          min-width: 10%;
          text-align: right;
          font-size: 0.14rem;
          color: #c3c3c3;
        }
      }
    }
    .pagination {
      margin-top: 0.2rem;
      // width: 2rem;
      display: flex;
      justify-content: center;
      // background-color: red;
    }
  }
}
::v-deep .el-pager li.active {
  color: #ffffff;
  background: #2a77ff;
  border-radius: 0.02rem;
  cursor: default;
}
::v-deep .el-pager li {
  padding: 0 0.04rem;
  background: #fff;
  font-size: 0.13rem;
  width: 0.32rem;
  height: 0.32rem;
  line-height: 0.32rem;
  box-sizing: border-box;
  text-align: center;
  margin-right: 0.03rem;
  margin-left: 0.03rem;
}
</style>