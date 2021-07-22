<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="shuke-logo">
          <img src="@/assets/image/home/icon_shuke.svg" alt="" />
        </div>
        <div class="right-person">
          <div class="right">
            <div class="header"><!-- <img src="" alt="" /> --></div>
            <div class="name">张克榕</div>
            <div class="message">
              <img src="@/assets/image/home/topbar_notice.svg" alt="" />
              <div class="message-num">10</div>
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
                active-text-color="#fff"
                active-background-color="red"
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
    };
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
    this.selectIndex = this.activePath;
  },
  methods: {
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
    handleSelect(index) {
      console.log("index", index);
      this.selectIndex = index;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.selectStyle {
  background: linear-gradient(90deg, #2a77ff 0%, #5592fe 100%);
  box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.16);
  opacity: 1;
  border-radius: 4px;
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

        .message-num {
          position: absolute;
          top: -8px;
          right: -5px;
          width: 32px;
          height: 20px;
          background-color: #f45a5c;
          border-radius: 10px;
          font-family: Source Han Sans CN;
          line-height: 20px;
          color: #fafafa;
          img {
            width: 36px;
            height: 36px;
          }
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
  height: 700px;
  .tac {
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
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
  // width: 255px;
  min-height: 400px;
}
</style>
