<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的团队</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <!-- 左侧 -->
      <div class="left">
        <HeaderTitle name="所有团队" />
        <div class="content">
          <div class="item" v-for="(item, index) in 10" :key="index">
            <div class="team-name">UI设计教育团队</div>
            <div class="num">20人</div>
            <!--  -->
            <el-dropdown trigger="click" placement="bottom-end">
              <span class="el-dropdown-link">
                <div class="dot">
                  <Dot />
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div v-if="false">
                  <el-dropdown-item>退出团队</el-dropdown-item>
                </div>
                <div v-else>
                  <div @click="deleteDV = true">
                    <el-dropdown-item> 解散团队 </el-dropdown-item>
                  </div>
                  <div @click="createDV = true">
                    <el-dropdown-item> 重命名 </el-dropdown-item>
                  </div>
                  <div @click="createDV = true">
                    <el-dropdown-item> 移交团队 </el-dropdown-item>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
            <!--  -->
          </div>
        </div>
        <div class="add">
          <div class="img">
            <img src="@/assets/image/home/icon_add_n.svg" alt="" />
          </div>
          <div class="text">创建团队</div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <HeaderTitle name="管理团队成员" />
        <div class="add-img">
          <img src="@/assets/image/home/ic_team_invitation.svg" alt="" />
        </div>
        <div class="team-search">
          <div class="team-name">UI设计教育团队<img @click="createDV = true" src="@/assets/image/home/ic_edit.svg" alt=""></div>
          <div class="search">
            <input type="text" placeholder="搜索你想要的班级" />
            <i class="el-icon-search"></i>
          </div>
        </div>
        <div class="nav-title">
          <div class="people">成员</div>
          <div class="number">工号</div>
          <div class="quanxian">
            权限<img src="@/assets/image/home/ic_help.svg" alt="" />
          </div>
        </div>
        <div class="content">
          <div class="item" v-for="(item, index) in 10" :key="index">
            <div class="check"></div>
            <div class="person">
              <div class="header">
                <img src="@/assets/image/home/ic_help.svg" alt="" />
              </div>
              <div class="name">张克榕</div>
              <div class="me" v-if="index == 0">我</div>
            </div>
            <div class="num">154455211</div>
            <div class="guanliyuan" @click="quanXianDV = true">超级管理员</div>
            <div class="set">
              <img @click="noQuanXianDV = true" src="@/assets/image/home/ic_help.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 创建课程 -->
    <el-dialog title="" :visible.sync="createDV" width="30%" :show-close="false" top="40vh">
      <h2>修改团队名称</h2>
      <input class="course-input" type="text" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="createDV = false">取 消</el-button>
        <el-button type="primary" @click="createDV = false">修 改</el-button>
      </span>
    </el-dialog>
    <!-- 删除课程 -->
    <el-dialog title="UI设计教程" :visible.sync="deleteDV" width="30%" :show-close="false" top="40vh">
      <h2>解散</h2>
      <span class="delete-text">解散团队将无法找回，您确认要解散么？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="deleteDV = false">取 消</el-button>
        <el-button type="primary" @click="deleteDV = false">确认解散</el-button>
      </span>
    </el-dialog>
    <!-- 没有权限 -->
    <el-dialog title="" :visible.sync="noQuanXianDV" width="30%" :show-close="false" top="40vh">
      <h2>很抱歉，没有权限呢</h2>
      <span class="delete-text">您当前权限无法使用该功能呢，可联系超级管理员修改权限哦</span>
      <span slot="footer" class="dialog-footer">
      </span>
    </el-dialog>
    <!--权限设置  -->
    <el-dialog title="" :visible.sync="quanXianDV" width="30%" :show-close="false" top="10vh">
      <h2>权限设置</h2>
      <span class="select-num">已选中10人</span>
      <div class="quan-xian">
        <div class="quanxian-item" v-for="(item,index) in 10" :key="index">
          <div class="chick">
            <el-checkbox v-model="checked"></el-checkbox>
          </div>
          <div class="title">录播权限</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <span class="delete-man">删除成员</span>
        <el-button class="cancel-button" @click="quanXianDV = false">取 消</el-button>
        <el-button type="primary" @click="quanXianDV = false">确 认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
import Dot from "@/components/dot/Dot";
export default {
  components: {
    HeaderTitle,
    Dot,
  },
  data() {
    return {
      createDV: false,
      deleteDV: false,
      noQuanXianDV: false,
      quanXianDV: false,
      checked: false,
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.quan-xian {
  width: 530px;
  height: 590px;
  overflow-y: auto;
  position: relative;
  .quanxian-item {
    display: flex;
    align-items: center;
    height: 50px;
  }
}
.select-num{
font-size: 16px;
color: #2A77FF;
position: absolute;
right: 30px;
top: 30px;
}
.title {
  font-size: 20px;
  color: #666666;
  margin-left: 20px;
  line-height: 20px;
}
.delete-man {
  font-size: 14px;
  font-weight: bold;
  color: #f96164;
  margin-right: 280px;
  cursor: pointer;
}
::v-deep .el-dialog__body {
  padding: 10px 30px 30px;
  color: #606266;
  font-size: 15px;
  word-break: break-all;
  display: flex;
  align-items: center;
}
::v-deep .el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 2px solid #999999;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  background-color: #fff;
  z-index: 1;
  -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
::v-deep .el-checkbox__inner::after {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  content: "";
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 6px;
  position: absolute;
  top: 2px;
  -webkit-transform: rotate(45deg) scaleY(0);
  transform: rotate(45deg) scaleY(0);
  width: 0.015625rem;
  -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
  transition: -webkit-transform 0.15s ease-in 0.05s;
  transition: transform 0.15s ease-in 0.05s;
  transition: transform 0.15s ease-in 0.05s,
    -webkit-transform 0.15s ease-in 0.05s;
  -webkit-transform-origin: center;
  transform-origin: center;
}
::v-deep .el-dialog__title {
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  color: #2a77ff;
  margin-left: 43px;
}
h2 {
  position: absolute;
  top: 25.8px;
  color: #000000;
  font-size: 20px;
}
.course-input {
  font-size: 20px;
  color: #666666;
  padding: 10px 0px 10px 0px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0 !important;
  border: none;
}
.cancel-button {
  border: none;
  background: #fff !important;
  box-shadow: 0 !important;
  font-size: 14px;
  font-weight: bold;
  color: #666666;
  margin-right: 15px;
}
.el-button {
  margin-top: 40px;
  background: #2a77ff;
  &:hover {
    background: #5592fe;
  }
  &:active {
    background: #2065e0;
  }
}
.delete-text {
  font-size: 14px;
  line-height: 2px;
  color: #666666;
}
.body {
  .breadcrumb {
  }
  .main {
    margin-top: 12px;
    display: flex;
    .left {
      width: 420px;
      height: 936px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      overflow: hidden;
      .content {
        //   background-color: red;
        height: 750px;
        overflow-y: auto;
        // padding: 0px 30px 30px 50px;
        .item {
          position: relative;
          padding: 0px 10px 0px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          display: flex;
          width: 380px;
          height: 60px;
          background: #ffffff;
          opacity: 1;
          &:hover {
            background-color: #f6f7f9;
          }
          &:hover .dot {
            display: block;
            // background-color: red;
          }
          &:active {
            background-color: #edeff3;
          }
          .team-name {
            font-size: 16px;
            color: #666666;
          }
          .num {
            margin-left: 140px;
            font-size: 16px;
            color: #999999;
            position: absolute;
            right: 55px;
          }
          .dot {
            cursor: pointer;
            margin-top: 5px;
            display: none;
          }
        }
      }
      .add {
        // background-color: red;
        display: flex;
        align-items: center;
        position: relative;
        left: 155px;
        top: 50px;
        cursor: pointer;
        .img {
          display: flex;
          align-items: center;

          img {
            width: 24px;
            height: 24px;
            cursor: pointer;
          }
        }
        .text {
          font-size: 16px;
          color: #666666;
          margin-left: 16px;
        }
      }
    }
    .right {
      width: 1124px;
      height: 936px;
      background: #ffffff;
      opacity: 1;
      margin-left: 40px;
      position: relative;
      .add-img {
        position: absolute;
        top: 20px;
        right: 40px;
        img {
          width: 80px;
          height: 80px;
          cursor: pointer;
        }
      }
      .team-search {
        margin-top: 46px;
        position: relative;
        width: 1124px;
        height: 100px;
        display: flex;
        align-items: center;
        padding-left: 110px;
        justify-content: space-between;
        .team-name {
          font-size: 30px;
          font-weight: bold;
          color: #666666;
          display: flex;
          align-items: center;
          img {
            margin-left: 24px;
            width: 25px;
            height: 25px;
            cursor: pointer;
          }
        }
        .search {
          font-size: 16px;
          font-weight: bold;
          color: #c3c3c3;
          margin-right: 48px;
          input {
            width: 366px;
            height: 38px;
            background: #ffffff;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
            border-radius: 35px;
            border: none;
            padding-left: 20px;
            font-size: 14px;
            color: #999999;
            line-height: 138px;
          }
          .el-icon-search {
            font-size: 20px;
            position: absolute;
            right: 70px;
            top: 40px;
            font-weight: 900;
          }
          ::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 24px;
            color: #999999;
          } /* 使用webkit内核的浏览器 */
          :-moz-placeholder {
            font-size: 14px;
            line-height: 24px;
            color: #999999;
          } /* Firefox版本4-18 */
          ::-moz-placeholder {
            font-size: 14px;
            line-height: 24px;
            color: #999999;
          } /* Firefox版本19+ */
          :-ms-input-placeholder {
            font-size: 14px;
            line-height: 24px;
            color: #999999;
            /* IE浏览器 */
          }
        }
      }
      .nav-title {
        margin: 0 auto;
        width: 1084px;
        height: 80px;
        // background: #df6a6a;
        font-size: 20px;
        font-weight: bold;
        color: #666666;
        display: flex;
        align-items: center;
        padding: 0px 20px 0px 20px;
        .people {
          margin-left: 80px;
        }
        .number {
          margin-left: 381px;
        }
        .quanxian {
          margin-left: 319px;
          display: flex;
          align-items: center;
          img {
            margin-left: 7px;
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
      }
      .content {
        margin: 0 auto;
        width: 1084px;
        height: 600px;
        padding: 0px 20px 0px 20px;
        overflow-y: auto;
        overflow-x: hidden;
        .item {
          position: relative;
          display: flex;
          align-items: center;
          width: 1084px;
          height: 64px;
          background: #ffffff;
          font-size: 16px;
          line-height: 34px;
          color: #666666;
          &:hover {
            background-color: #f6f7f9;
          }
          &:hover .check {
            display: block;
          }
          &:hover .set {
            display: block;
          }
          &:active {
            background-color: #edeff3;
          }
          .check {
            width: 20px;
            height: 20px;
            background: #ffffff;
            border: 2px solid #999999;
            border-radius: 2px;
            margin-left: 24px;
            display: none;
            position: absolute;
            cursor: pointer;
          }
          .person {
            display: flex;
            align-items: center;
            margin-left: 82px;
            width: 190px;
            .header {
              display: flex;
              align-items: center;
              img {
                width: 32px;
                height: 32px;
                cursor: pointer;
              }
            }
            .name {
              margin-left: 32px;
              width: 100%;
            }
            .me {
              margin-left: 15px;
              width: 148px;
              height: 28px;
              background: #5592fe;
              border-radius: 4px;
              font-size: 16px;
              font-weight: bold;
              line-height: 28px;
              text-align: center;
              color: #ffffff;
            }
          }
          .num {
            margin-left: 222px;
          }
          .guanliyuan {
            margin-left: 283px;
          }
          .set {
            margin-left: 57px;
            display: none;
            img {
              display: flex;
              align-items: center;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>