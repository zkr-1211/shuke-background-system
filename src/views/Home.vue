<template>
  <div class="home" id="full-Screen">
    <el-container>
      <el-header>
        <div class="nav_drawer drawer-show" @click="drawer = true">
          <img src="@/assets/image/home/ic_nav_drawer.svg" alt="" />
        </div>
        <div class="shuke-logo">
          <img src="@/assets/image/home/icon_shuke.svg" alt="" />
        </div>
        <div class="right-person">
          <div class="trigon"></div>
          <div class="right">
            <el-dropdown trigger="click" placement="bottom-end">
              <span class="el-dropdown-link">
                <div class="header">
                  <!-- <img src="" alt="" /> -->
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/accountInfomation">
                  <el-dropdown-item>账户信息</el-dropdown-item>
                </router-link>

                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="name">张老板</div>
            <div class="message">
              <el-dropdown trigger="click" placement="bottom-end">
                <span class="el-dropdown-link">
                  <el-badge :value="12" class="item">
                    <img
                      src="@/assets/image/home/topbar_notice.svg"
                      alt=""
                      @click="isNoticF()"
                    />
                  </el-badge>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <div class="notices">
                    <div class="time-img">
                      <router-link to="/allNotice">
                        <div class="img1"></div>
                      </router-link>
                    </div>
                    <el-tabs
                      value="first"
                      @tab-click="handleClick"
                      v-if="isNotic"
                    >
                      <el-tab-pane label="用户管理" name="first">
                        <div class="notice-message">
                          <div
                            class="notice"
                            v-for="(item, index) in 10"
                            :key="index"
                          >
                            <div class="left-item">
                              <div class="img">
                                <img
                                  src="@/assets/image/home/topbar_notice_label.svg"
                                  alt=""
                                />
                              </div>
                              <div class="info">
                                陈小平 提醒您修改 课程:UI设计 标设计陈小平
                                陈小平 提醒您修改 课程:UI设计 标设计陈小平
                                陈小平 提醒您修改 课程:UI设计 标设计陈小平
                              </div>
                            </div>

                            <div class="time">01月21日</div>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="配置管理" name="second">
                        <div class="notice-message">
                          <div
                            class="notice"
                            v-for="(item, index) in 0"
                            :key="index"
                          >
                            <div class="left-item">
                              <div class="img">
                                <img
                                  src="@/assets/image/home/topbar_notice_label.svg"
                                  alt=""
                                />
                              </div>
                              <div class="info">
                                陈小平 提醒您修改 课程:UI设计 标设计 111
                                提醒您修改 课程:UI设计 标设计
                              </div>
                            </div>

                            <div class="time">01月21日</div>
                          </div>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="full-screen" @click="fullScreenEvent">
              <div class="image">
                <img src="@/assets/image/home/icon_fullscreen_b.svg" alt="" />
              </div>
              <div class="text">
                <span v-if="!isFullScren">全屏模式</span>
                <span v-else>退出全屏</span>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside class="hidden-md-and-down">
          <el-row class="tac">
            <el-col>
              <el-menu
                router
                text-color="#666666"
                :default-active="activePath"
                class="el-menu-vertical-demo"
                @select="handleSelect"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item
                  @click="saveNavState('/main')"
                  index="/main"
                  :class="selectIndex == '/main' ? 'selectStyle' : ''"
                >
                  <img
                    v-if="selectIndex == '/main'"
                    src="@/assets/image/leftbar/leftbar_home_s.svg"
                    alt=""
                  />
                  <img
                    v-else
                    src="@/assets/image/leftbar/leftbar_home_n.svg"
                    alt=""
                  />
                  <!-- <i class="el-icon-menu"></i> -->
                  <span>首页</span>
                </el-menu-item>

                <el-menu-item
                  @click="saveNavState('/course')"
                  index="/course"
                  :class="selectIndex == '/course' ? 'selectStyle' : ''"
                >
                  <img
                    v-if="selectIndex == '/course'"
                    src="@/assets/image/leftbar/leftbar_course_s.svg"
                    alt=""
                  />
                  <img
                    v-else
                    src="@/assets/image/leftbar/leftbar_course_n.svg"
                    alt=""
                  />
                  <span>课程</span>
                </el-menu-item>
                <el-menu-item
                  @click="saveNavState('/recordvideo')"
                  index="/recordvideo"
                  :class="selectIndex == '/recordvideo' ? 'selectStyle' : ''"
                >
                  <img
                    v-if="selectIndex == '/recordvideo'"
                    src="@/assets/image/leftbar/leftbar_recordvideo_s.svg"
                    alt=""
                  />
                  <img
                    v-else
                    src="@/assets/image/leftbar/leftbar_recordvideo_n.svg"
                    alt=""
                  />
                  <span>录播资源</span>
                </el-menu-item>
                <el-menu-item
                  @click="saveNavState('/recovery')"
                  index="/recovery"
                  :class="selectIndex == '/recovery' ? 'selectStyle' : ''"
                >
                  <img
                    v-if="selectIndex == '/recovery'"
                    src="@/assets/image/leftbar/leftbar_recovery_s.svg"
                    alt=""
                  />
                  <img
                    v-else
                    src="@/assets/image/leftbar/leftbar_recovery_n.svg"
                    alt=""
                  />
                  <span>课程回收站</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
          <div class="aside-progress">
            <div>
              <el-progress :percentage="50" :show-text="false"></el-progress>
            </div>
            <div class="text">
              <div class="capacity">已用2.6GB/20GB</div>
              <div class="add-capacity">扩容</div>
            </div>
          </div>
          <div class="aside-bottom">
            <div>树课社区</div>
            <div>客服帮助</div>
          </div>
        </el-aside>
        <el-main>
          <div class="center">
             <router-view />
          </div>
         
        </el-main>
      </el-container>
    </el-container>
    <el-drawer
      :modal="true"
      :show-close="false"
      size="28%"
      title=""
      :visible.sync="drawer"
      :direction="direction"
    >
      <el-menu
        router
        text-color="#666666"
        :default-active="activePath"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item
          @click="saveNavState('/main')"
          index="/main"
          :class="selectIndex == '/main' ? 'selectStyle' : ''"
        >
          <img
            v-if="selectIndex == '/main'"
            src="@/assets/image/leftbar/leftbar_home_s.svg"
            alt=""
          />
          <img v-else src="@/assets/image/leftbar/leftbar_home_n.svg" alt="" />
          <!-- <i class="el-icon-menu"></i> -->
          <span style="marginleft: 0.2rem">首页</span>
        </el-menu-item>

        <el-menu-item
          @click="saveNavState('/course')"
          index="/course"
          :class="selectIndex == '/course' ? 'selectStyle' : ''"
        >
          <img
            v-if="selectIndex == '/course'"
            src="@/assets/image/leftbar/leftbar_course_s.svg"
            alt=""
          />
          <img
            v-else
            src="@/assets/image/leftbar/leftbar_course_n.svg"
            alt=""
          />
          <span style="marginleft: 0.2rem">课程</span>
        </el-menu-item>
        <el-menu-item
          @click="saveNavState('/recordvideo')"
          index="/recordvideo"
          :class="selectIndex == '/recordvideo' ? 'selectStyle' : ''"
        >
          <img
            v-if="selectIndex == '/recordvideo'"
            src="@/assets/image/leftbar/leftbar_recordvideo_s.svg"
            alt=""
          />
          <img
            v-else
            src="@/assets/image/leftbar/leftbar_recordvideo_n.svg"
            alt=""
          />
          <span style="marginleft: 0.2rem">录播资源</span>
        </el-menu-item>
        <el-menu-item
          @click="saveNavState('/recovery')"
          index="/recovery"
          :class="selectIndex == '/recovery' ? 'selectStyle' : ''"
        >
          <img
            v-if="selectIndex == '/recovery'"
            src="@/assets/image/leftbar/leftbar_recovery_s.svg"
            alt=""
          />
          <img
            v-else
            src="@/assets/image/leftbar/leftbar_recovery_n.svg"
            alt=""
          />
          <span style="marginleft: 0.2rem">课程回收站</span>
        </el-menu-item>
      </el-menu>
      <div class="aside-progress">
        <div>
          <el-progress :percentage="50" :show-text="false"></el-progress>
        </div>
        <div class="text">
          <div class="capacity">已用2.6GB/20GB</div>
          <div class="add-capacity">扩容</div>
        </div>
      </div>
      <div class="aside-bottom">
        <div>树课社区</div>
        <div>客服帮助</div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import "element-ui/lib/theme-chalk/display.css";
import fullScreenMixins from '@/mixins/fullScreenMixins'
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mixins:[fullScreenMixins],
  data() {
    return {
      drawer: false,
      direction: "ltr",
      selectIndex: 1,
      activePath: "",
      activeName: "first",
      isNotic: false,
      isFullScren: false,
    };
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
    this.selectIndex = this.activePath || "/main";
    // window.addEventListener("resize", () => {
    //   // console.log("resize");
    // });
  },
  methods: {
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
    handleSelect(index) {
      // console.log("index", index);
      this.selectIndex = index;
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //下拉菜单嵌套Tabs第一次下划线不显示的解决办法
    isNoticF() {
      setTimeout(() => {
        this.isNotic = true;
      }, 10);
    },
  },
};
</script>
<style lang="scss" scoped>
//抽屉需要样式抽出来
.aside-progress {
  position: absolute;
  left: 0.38rem;
  text-align: center;
  bottom: 2rem;
  width: 70%;
  font-size: 0.14rem;
  color: #666666;
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.1rem;
  }
  .capacity {
    color: #7c878e;
  }
  .add-capacity {
    cursor: pointer;
    font-size: 0.14rem;
    color: #2980ff;
  }
}
//抽屉需要样式抽出来
.aside-bottom {
  position: absolute;
  bottom: 1.5rem;
  left: 0.38rem;
  display: flex;
  width: 70%;
  justify-content: center;
  font-size: 0.14rem;
  color: #666666;
  > div:nth-of-type(1) {
    cursor: pointer;
  }
  > div:nth-of-type(2) {
    margin-left: 0.48rem;
    cursor: pointer;
  }
}
.home {
  height: 100vh;
  width: 100%;
  background-color: #f7f6fa;
  overflow-x: hidden;
  overflow-y: hidden;
}
.el-menu {
  border: none;
}
.selectStyle {
  background: linear-gradient(90deg, #2a77ff 0%, #5592fe 100%);
  box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.16);
  opacity: 1;
  border-radius: 0.04rem;
  color: #fff !important;
}
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  // line-height: 0.6rem;
  width: 100%;
  height: 0.64rem !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem;
  position: relative;
  .nav_drawer {
    position: absolute;
    left: 0.2rem;
    bottom: -0.12rem;
    margin-left: 0.15rem;
    display: none;
    cursor: pointer;
  }
  // .drawer-show{
  //   display: block;
  // }

  @media only screen and (max-width: 1200px) {
    .drawer-show {
      display: block;
    }
    .shuke-logo {
      margin-left: 0.9rem !important;
    }
  }
  @media only screen and (max-width: 550px) {
    .shuke-logo {
      font-size: 0.12rem !important;
      padding-right: 0.5rem;
    }
  }

  .shuke-logo {
    margin-left: 0.4rem;
    display: flex;
    align-items: center;
    img {
      width: 1.76rem;
      height: 0.36rem;
    }
  }
  .right-person {
    width: 3.8rem;
    height: 0.64rem;
    background-color: #2a77ff;
    display: flex;
    justify-content: center;
    position: relative;
    .trigon {
      left: -0.34rem;
      position: absolute;
      width: 0;
      height: 0;
      border-color: #2a77ff transparent;
      border-width: 0 0 0.64rem 0.34rem;
      border-style: solid;
    }
    .right {
      width: 3.6rem;
      // margin-left: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .header {
        background-color: #fff;
        width: 0.36rem;
        height: 0.36rem;
        // background: rgba(0, 0, 0, 0);
        box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.16);
        border-radius: 50%;
        display: flex;
        align-items: center;
        img {
        }
      }
      .message {
        position: relative;
        width: 0.6rem;
        height: 0.64rem;
        display: flex;
        align-items: center;
        img {
          width: 0.36rem;
          height: 0.36rem;
        }
      }
      .full-screen {
        cursor: pointer;
        margin-left: 0.1rem;
        display: flex;
        align-items: center;
        .image {
          display: flex;
          width: 0.34rem;
          height: 0.34rem;
        }
        .text {
          font-size: 0.16rem;
          color: #ffffff;
          margin-left: 0.12rem;
        }
      }
    }
    .name {
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      margin-left: 0.2rem;
    }
  }
}
.el-aside {
  position: relative;
  background-color: #fff;
  color: #333;
  width: 2.56rem !important;
  height: 9.8rem;
  overflow: hidden;
  // margin-right: 2.56rem !important;
  .tac {
    // width: 2.57rem;
    margin-top: 0.26rem;
    .el-menu {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      .el-menu-item {
        display: flex;
        align-items: center;
        margin-top: 0.12rem;
        font-size: 0.14rem;
        font-weight: bold;
        color: #ffffff;
        border-radius: 0.04rem;
        img {
          width: 0.24rem;
          height: 0.24rem;
        }
        span {
          margin-left: 0.2rem;
        }
      }
      .el-menu-item:hover {
        border-radius: 0.04rem;
        background-color: #f6f6f6;
      }
    }
  }
}

.el-main {
  height: 95vh;
  margin-left: 0.2rem;
  overflow-y: overlay;
  overflow-x: hidden;
  .center{
    // min-width: 13.66rem;
    // overflow: overlay;
  }
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 2.6rem;
}
.el-container:nth-child(7) .el-aside {
  line-height: 3.2rem;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 4rem;
}
::v-deep .el-badge__content {
  background-color: #f56c6c;
  border-radius: 0.1rem;
  color: #fff;
  display: inline-block;
  font-size: 0.12rem;
  height: 0.18rem;
  line-height: 0.2rem;
  padding: 0 0.08rem;
  text-align: center;
  white-space: nowrap;
  border: none;
}
::v-deep .el-badge__content.is-fixed {
  position: absolute;
  top: 0.05rem;
  right: 0.13rem;
  transform: translateY(-50%) translateX(100%);
}
.el-dropdown-link {
  cursor: pointer;
  // color: #409eff;
}
.el-icon-arrow-down {
  font-size: 0.12rem;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 0.14rem;
  margin-bottom: 0.2rem;
}
.el-dropdown-menu {
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0.1rem 0;
  margin: 0.05rem 0;
  background-color: #fff;
  border: .01rem solid #ebeef5;
  border-radius: 0.04rem;
  box-shadow: 0rem 0.03rem 0.04rem rgba(0, 0, 0, 0.16);
  .notices {
    width: 4.6rem;
    height: 5.36rem;
    position: relative;
    .time-img {
      &:hover .img1 {
        background-image: url(../assets/image/home/topbar_notice_history_h.svg) !important;
      }
      &:active .img1 {
        background-image: url(../assets/image/home/topbar_notice_history_p.svg) !important;
      }
      .img1 {
        position: absolute;
        z-index: 98;
        right: 0.4rem;
        top: 0.12rem;
        width: 0.2rem;
        height: 0.2rem;
        display: flex;
        align-items: center;
        background-image: url(../assets/image/home/topbar_notice_history_n.svg) !important ;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
      }
    }
  }
}
.el-tabs {
  padding-left: 0.3rem;
}
::v-deep .el-tabs__nav {
  white-space: nowrap;
  position: relative;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  float: left;
  z-index: 2;
  display: flex;
}
::v-deep .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0;
}
::v-deep .el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0rem;
  background-color: #e4e7ed;
  z-index: 1;
}
::v-deep .el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.04rem;
  background-color: #5592fe;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 0.5rem;
  list-style: none;
}
::v-deep .el-tabs__item.is-active {
  font-size: 0.16rem;
  color: #5592fe;
}
::v-deep .el-tabs__item {
  padding: 0 0.2rem;
  height: 0.4rem;
  box-sizing: border-box;
  line-height: 0.4rem;
  display: inline-block;
  list-style: none;
  font-size: 0.16rem;
  color: #666666;
  position: relative;
}
.notice-message {
  height: 4.95rem;
  width: 100%;
  overflow: overlay;
  padding-right:.3rem;
  .notice {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.7rem;
    padding: .1rem 0 .1rem 0;
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
        align-items: center;
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
        color: #333334;
        padding-left: 0.15rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
    }
    .time {
      min-width: 22%;
      // padding-right: 0.3rem;
      font-size: 0.14rem;
      color: #c3c3c3;
      text-align: right;
    }
  }
}
</style>
