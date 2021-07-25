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
          <div class="img">
            <!-- <img src="@/assets/image/home/ic_back_n.svg" alt="" /> -->
          </div>
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
              <img src="@/assets/image/home/topbar_notice.svg" alt="" />
            </div>
            <div class="info">陈小平 提醒您修改 课程:UI设计 标设计</div>
          </div>
          <div class="time">01月21日</div>
        </div>
      </div>
      <div class="notice-message" v-else>
        <div class="notice" v-for="(item, index) in 10" :key="index">
          <div class="left-item">
            <div class="img">
              <img src="@/assets/image/home/topbar_notice.svg" alt="" />
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
import Tabs from "@/components/tabs/Tabs.vue";
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
    height: 64px;
    background: #ffffff;
    display: flex;
    align-items: center;
    .logo {
      margin: 0 auto;
      width: 1000px;
      img {
      }
    }
  }
  .center {
    margin: 50px auto 24px;
    width: 1000px;
    text-align: center;
    .content-title {
      position: relative;
      .left-item {
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        .img {
          width: 32px;
          height: 32px;
          background-image: url(../../../assets/image/home/ic_back_n.svg) !important;
        }
        &:hover .img {
          background-image: url(../../../assets/image/home/ic_back_h.svg) !important;
        }
        &:active .img {
          background-image: url(../../../assets/image/home/ic_back_p.svg) !important;
        }
        span {
          margin-left: 12px;
          font-size: 16px;
          line-height: 27px;
          color: #333333;
        }
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        line-height: 34px;
        color: #666666;
      }
    }
  }
  .bottom {
    margin: 0px auto;
    width: 1000px;
    height: 820px;
    background: #ffffff;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    .Tabs {
      margin-top: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      //   background-color: red;
      //消息内容
    }
    .notice-message {
      margin: 20px auto 0;
      height: 600px;
      width: 800px;
      overflow: hidden;
      //   background-color: red;
      padding-right: 30px;
      .notice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e0e0e0;
        padding: 0px 20px 0px 20px;
        height: 56px;
        .left-item {
          display: flex;
          align-items: center;
          .img {
            width: 15px;
            height: 15px;
            background-color: #2a77ff;
            img {
              width: 15px;
              height: 15px;
            }
          }
          .info {
            width: 254px;
            font-size: 14px;
            font-weight: 400;
            color: #333334;
            margin-left: 15px;
          }
        }

        .time {
          width: 60px;
          font-size: 14px;
          color: #c3c3c3;
        }
      }
    }
    .pagination {
      margin-top: 20px;
      //   width: 200px;
      display: flex;
      justify-content: center;
      //    background-color: red;
    }
  }
}
::v-deep .el-pager li.active {
  color: #ffffff;
  background: #2a77ff;
  border-radius: 2px;
  cursor: default;
}
::v-deep .el-pager li {
  padding: 0 4px;
  background: #fff;
  font-size: 13px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  text-align: center;
  margin-right: 3px;
  margin-left: 3px;
}
</style>