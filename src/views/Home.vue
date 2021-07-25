<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="shuke-logo">
          <img src="@/assets/image/home/icon_shuke.svg" alt="" />
        </div>
        <div class="right-person">
          <div class="right">
            <el-dropdown trigger="click" placement="bottom-end">
              <span class="el-dropdown-link">
                <div class="header"><!-- <img src="" alt="" /> --></div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>账户信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <div class="name">张克榕</div>
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
                  <div style="width: 460px; height: 536px">
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
                                  src="@/assets/image/home/topbar_notice.svg"
                                  alt=""
                                />
                              </div>
                              <div class="info">
                                陈小平 提醒您修改 课程:UI设计 标设计
                              </div>
                            </div>

                            <div class="time">01月21日</div>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="配置管理" name="second"
                        >
                        <div class="notice-message">
                          <div
                            class="notice"
                            v-for="(item, index) in 0"
                            :key="index"
                          >
                            <div class="left-item">
                              <div class="img">
                                <img
                                  src="@/assets/image/home/topbar_notice.svg"
                                  alt=""
                                />
                              </div>
                              <div class="info">
                                陈小平 提醒您修改 课程:UI设计 标设计
                              </div>
                            </div>

                            <div class="time">01月21日</div>
                          </div>
                        </div></el-tab-pane
                      >
                    </el-tabs>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="256px">
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
                  @click="saveNavState('/recordVideo')"
                  index="/recordVideo"
                  :class="selectIndex == '/recordVideo' ? 'selectStyle' : ''"
                >
                  <img
                    v-if="selectIndex == '/recordVideo'"
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
          <div class="aside-bottom">
            <div>树课社区</div>
            <div>客服帮助</div>
          </div>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      selectIndex: 1,
      activePath: "",
      activeName: "first",
      isNotic: false,
    };
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
    this.selectIndex = this.activePath || "/main";
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
.home {
  height: 100vh;
  width: 100vw;
  // background-color: royalblue;
  overflow-x: hidden;
  overflow-y: hidden;
}
.selectStyle {
  background: linear-gradient(90deg, #2a77ff 0%, #5592fe 100%);
  box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.16);
  opacity: 1;
  border-radius: 4px;
  color: #fff !important;
}
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  // line-height: 60px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  .shuke-logo {
    margin-left: 40px;
  }
  .right-person {
    width: 356px;
    height: 64px;
    background-color: #2a77ff;
    display: flex;
    justify-content: center;
    .right {
      width: 220px;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .header {
        background-color: #fff;
        width: 36px;
        height: 36px;
        // background: rgba(0, 0, 0, 0);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 50%;
        img {
        }
      }

      .message {
        position: relative;
        width: 60px;
        img {
          width: 36px;
          height: 36px;
        }
      }
    }
    .name {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      margin-left: 20px;
    }
  }
}

.el-aside {
  position: relative;
  background-color: #fff;
  color: #333;
  width: 256px;
  height: 100vh-5vh;
  overflow: hidden;
  .tac {
    width: 257px;
    margin-top: 26px;
    .el-menu {
      padding-left: 20px;
      padding-right: 20px;
      .el-menu-item {
        display: flex;
        align-items: center;
        margin-top: 12px;
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        // background: linear-gradient(90deg, #2a77ff 0%, #5592fe 100%);
        box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.16);
        border-radius: 4px;
        img {
          width: 24px;
          height: 24px;
        }
        span {
          margin-left: 20px;
        }
      }
      .el-menu-item:hover {
        border-radius: 4px;
        background-color: #f6f6f6;
      }
    }
  }
  .aside-bottom {
    position: absolute;
    bottom: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 14px;
    color: #666666;
    > div:nth-of-type(1) {
      cursor: pointer;
    }
    > div:nth-of-type(2) {
      margin-left: 48px;
      cursor: pointer;
    }
  }
}

.el-main {
  height: 100vh;
  overflow: auto;
  width: 100%;
  padding-left: 30px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
::v-deep .el-badge__content {
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 20px;
  padding: 0 8px;
  text-align: center;
  white-space: nowrap;
  border: none;
}
::v-deep .el-badge__content.is-fixed {
  position: absolute;
  top: 5px;
  right: 13px;
  transform: translateY(-50%) translateX(100%);
}
.el-dropdown-link {
  cursor: pointer;
  // color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-dropdown-menu {
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px 0;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
}
.el-tabs {
  padding-left: 30px;
}
::v-deep .el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
  background-color: #e4e7ed;
  z-index: 1;
}
::v-deep .el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: #5592fe;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 50px;
  list-style: none;
}
::v-deep .el-tabs__item.is-active {
  font-size: 16px;
  color: #5592fe;
}
::v-deep .el-tabs__item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 16px;
  color: #666666;
  position: relative;
}
//消息内容
.notice-message {
  height: 495px;
  width: 100%;
  overflow: auto;
  padding-right: 30px;
  .notice {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
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
//滚动条
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  width: 10px;
  height: 580px;
  background: #ffffff;
}
::-webkit-scrollbar-thumb {
  width: 6px;
  height: 120px;
  background: #e5e5e5;
  opacity: 1;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  // background: #5e5353;
}
::-webkit-scrollbar-thumb:active {
  // background: #5e5353;
}
</style>
