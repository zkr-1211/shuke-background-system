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
                text-color="#666666"
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span>首页</span>
                </el-menu-item>

                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span>课程</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span>录播资源</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-menu"></i>
                  <span>课程回收站</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>Main</el-main>
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
    return {};
  },
  methods: {
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
  background-color: #fff;
  color: #333;
  width: 256px;
  height: 100%;
  .tac {
    margin-top: 26px;
    .el-menu {
      padding-left: 20px;
      padding-right: 20px;
      .el-menu-item {
        margin-top: 12px;
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
        // background: linear-gradient(90deg, #2a77ff 0%, #5592fe 100%);
        box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.16);
        border-radius: 4px;
      }
      .el-menu-item:hover {
        border-radius: 4px;
        background-color: #f6f6f6;
      }
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
