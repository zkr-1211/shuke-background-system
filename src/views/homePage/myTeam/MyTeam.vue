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
      <el-row :gutter="40" class="el-row">
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
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
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
          <!-- 右侧 -->
          <div class="right">
            <HeaderTitle name="管理团队成员" />
            <div class="add-img">
              <img src="@/assets/image/home/ic_team_invitation.svg" alt="" />
            </div>
            <div class="team-search">
              <div class="team-name">
                UI设计教育团队<img
                  @click="createDV = true"
                  src="@/assets/image/home/ic_edit.svg"
                  alt=""
                />
              </div>
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
                <div class="guanliyuan" @click="quanXianDV = true">
                  超级管理员
                </div>
                <div class="set">
                  <img
                    @click="noQuanXianDV = true"
                    src="@/assets/image/home/ic_help.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 创建课程 -->
    <el-dialog
      title=""
      :visible.sync="createDV"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>修改团队名称</h2>
      <input class="course-input" type="text" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="createDV = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="createDV = false">修 改</el-button>
      </span>
    </el-dialog>
    <!-- 删除课程 -->
    <el-dialog
      title="UI设计教程"
      :visible.sync="deleteDV"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>解散</h2>
      <span class="delete-text">解散团队将无法找回，您确认要解散么？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="deleteDV = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="deleteDV = false">确认解散</el-button>
      </span>
    </el-dialog>
    <!-- 没有权限 -->
    <el-dialog
      title=""
      :visible.sync="noQuanXianDV"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>很抱歉，没有权限呢</h2>
      <span class="delete-text"
        >您当前权限无法使用该功能呢，可联系超级管理员修改权限哦</span
      >
      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>
    <!--权限设置  -->
    <el-dialog
      title=""
      :visible.sync="quanXianDV"
      width="30%"
      :show-close="false"
      top="10vh"
    >
      <h2>权限设置</h2>
      <span class="select-num">已选中10人</span>
      <div class="quan-xian">
        <div class="quanxian-item" v-for="(item, index) in 10" :key="index">
          <div class="chick">
            <el-checkbox v-model="checked"></el-checkbox>
          </div>
          <div class="title">录播权限</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <span class="delete-man">删除成员</span>
        <el-button class="cancel-button" @click="quanXianDV = false"
          >取 消</el-button
        >
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
     width: 5.3rem;
     height: 5.9rem;
     overflow-y: auto;
     position: relative;
     .quanxian-item {
         display: flex;
         align-items: center;
         height: 0.5rem;
    }
}
 .select-num {
     font-size: 0.16rem;
     color: #2a77ff;
     position: absolute;
     right: 0.3rem;
     top: 0.3rem;
}
 .title {
     font-size: 0.2rem;
     color: #666666;
     margin-left: 0.2rem;
     line-height: 0.2rem;
}
 .delete-man {
     font-size: 0.14rem;
     font-weight: bold;
     color: #f96164;
     margin-right: 2.8rem;
     cursor: pointer;
}
 ::v-deep .el-checkbox__inner {
     display: inline-block;
     position: relative;
     border: 0.02rem solid #999999;
     border-radius: 0.02rem;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     width: 0.2rem;
     height: 0.2rem;
     background-color: #fff;
     z-index: 1;
     -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
     transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
 ::v-deep .el-checkbox__inner::after {
     -webkit-box-sizing: content-box;
     box-sizing: content-box;
     content: "";
     border-left: 0;
     border-top: 0;
     height: 0.07rem;
     left: 0.06rem;
     position: absolute;
     top: 0.02rem;
     -webkit-transform: rotate(45deg) scaleY(0);
     transform: rotate(45deg) scaleY(0);
     width: 0.015625rem;
     -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
     transition: -webkit-transform 0.15s ease-in 0.05s;
     transition: transform 0.15s ease-in 0.05s;
     transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
     -webkit-transform-origin: center;
     transform-origin: center;
}
 ::v-deep .el-dialog {
     line-height: 0rem;
}
 ::v-deep .el-dialog__title {
     font-size: 0.2rem;
     font-weight: bold;
     line-height: 0.4rem;
     color: #2a77ff;
     margin-left: 0.43rem;
}
 h2 {
     position: absolute;
     top: 0.48rem;
     color: #000000;
     font-size: 0.2rem;
}
 .course-input {
     font-size: 0.2rem;
     color: #666666;
     padding: 0.1rem 0rem 0.1rem 0rem;
     width: 100%;
     border-bottom: 0.01rem solid #e0e0e0 !important;
     border: none;
}
 .cancel-button {
     border: none;
     background: #fff !important;
     box-shadow: 0 !important;
     font-size: 0.14rem;
     font-weight: bold;
     color: #666666;
     margin-right: 0.15rem;
}
 .el-button {
     margin-top: 0.4rem;
     background: #2a77ff;
     // box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
     &:hover {
         background: #5592fe;
    }
     &:active {
         background: #2065e0;
    }
}
 .delete-text {
     font-size: 0.14rem;
     line-height: 0.02rem;
     color: #666666;
}
 .body {
     .breadcrumb {
    }
     .main {
         margin-top: 0.12rem;
         // display: flex;
         width: 100%;
         // background-color: red;
         .left {
             // width: 4.2rem;
             height: 9.36rem;
             background: #ffffff;
             box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
             overflow: hidden;
             position: relative;
             .content {
                 height: 7.5rem;
                 overflow-y: auto;
                 .item {
                     position: relative;
                     padding: 0rem 0.1rem 0rem 0.3rem;
                     display: flex;
                     align-items: center;
                     justify-content: space-between;
                     margin: 0 auto;
                     display: flex;
                     // width: 3.8rem;
                     height: 0.6rem;
                     background: #ffffff;
                     opacity: 1;
                     &:hover {
                         background-color: #f6f7f9;
                    }
                     &:hover .dot {
                         display: block;
                    }
                     &:active {
                         background-color: #edeff3;
                    }
                     .team-name {
                         font-size: 0.16rem;
                         color: #666666;
                    }
                     .num {
                         margin-left: 1.4rem;
                         font-size: 0.16rem;
                         color: #999999;
                         position: absolute;
                         right: 0.55rem;
                    }
                     .dot {
                         cursor: pointer;
                         margin-top: 0.05rem;
                         display: none;
                    }
                }
            }
             .add {
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 position: absolute;
                 // left: 1.55rem;
                 transform: translate(-50%,-50%);
                 bottom: 3%;
                 cursor: pointer;
                 left: 50%;
                 .img {
                     display: flex;
                     align-items: center;
                     img {
                         width: 0.24rem;
                         height: 0.24rem;
                         cursor: pointer;
                    }
                }
                 .text {
                     font-size: 0.16rem;
                     color: #666666;
                     margin-left: 0.16rem;
                }
            }
        }
         .right {
             // min-width: 8.2rem;
             height: 9.36rem;
             background: #ffffff;
             opacity: 1;
             // margin-left: 0.4rem;
             position: relative;
             .add-img {
                 position: absolute;
                 top: 0.2rem;
                 right: 0.4rem;
                 img {
                     width: 0.8rem;
                     height: 0.8rem;
                     cursor: pointer;
                }
            }
             .team-search {
                 margin-top: 0.46rem;
                 position: relative;
                 // width: 11.24rem;
                 height: 1rem;
                 display: flex;
                 align-items: center;
                 padding-left: 1.1rem;
                 justify-content: space-between;
                 .team-name {
                     font-size: 0.3rem;
                     font-weight: bold;
                     color: #666666;
                     display: flex;
                     align-items: center;
                     img {
                         margin-left: 0.24rem;
                         width: 0.25rem;
                         height: 0.25rem;
                         cursor: pointer;
                    }
                }
                 .search {
                     font-size: 0.16rem;
                     font-weight: bold;
                     color: #c3c3c3;
                     margin-right: 0.48rem;
                     input {
                         width: 3.66rem;
                         height: 0.38rem;
                         background: #ffffff;
                         box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
                         border-radius: 0.35rem;
                         border: none;
                         padding-left: 0.2rem;
                         font-size: 0.14rem;
                         color: #999999;
                         line-height: 1.38rem;
                    }
                     .el-icon-search {
                         font-size: 0.2rem;
                         position: absolute;
                         right: 0.7rem;
                         top: 0.4rem;
                         font-weight: 900;
                    }
                     ::-webkit-input-placeholder {
                         font-size: 0.14rem;
                         line-height: 0.24rem;
                         color: #999999;
                    }
                    /* 使用webkit内核的浏览器 */
                     :-moz-placeholder {
                         font-size: 0.14rem;
                         line-height: 0.24rem;
                         color: #999999;
                    }
                    /* Firefox版本4-18 */
                     ::-moz-placeholder {
                         font-size: 0.14rem;
                         line-height: 0.24rem;
                         color: #999999;
                    }
                    /* Firefox版本19+ */
                     :-ms-input-placeholder {
                         font-size: 0.14rem;
                         line-height: 0.24rem;
                         color: #999999;
                        /* IE浏览器 */
                    }
                }
            }
             .nav-title {
                 margin: 0 auto;
                 // width: 10.84rem;
                 height: 0.8rem;
                 // background: #df6a6a;
                 font-size: 0.2rem;
                 font-weight: bold;
                 color: #666666;
                 display: flex;
                 flex-wrap: wrap;
                 align-items: center;
                 padding: 0rem 0.2rem 0rem 0.2rem;
                 justify-content: space-between;
                 .people {
                     margin-left: 0.8rem;
                }
                 .number {
                     // margin-left: 3.81rem;
                }
                 .quanxian {
                     margin-right: 2rem;
                     display: flex;
                     align-items: center;
                     img {
                         margin-left: 0.07rem;
                         width: 0.2rem;
                         height: 0.2rem;
                         cursor: pointer;
                    }
                }
            }
             .content {
                 margin: 0 auto;
                 // width: 10.84rem;
                 height: 6rem;
                 padding: 0rem 0.2rem 0rem 0.2rem;
                 overflow-y: auto;
                 overflow-x: hidden;
                 .item {
                     position: relative;
                     display: flex;
                     align-items: center;
                     justify-content: space-between;
                     // width: 10.84rem;
                     height: 0.64rem;
                     background: #ffffff;
                     font-size: 0.16rem;
                     line-height: 0.34rem;
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
                         width: 0.2rem;
                         height: 0.2rem;
                         background: #ffffff;
                         border: 0.02rem solid #999999;
                         border-radius: 0.02rem;
                         margin-left: 0.24rem;
                         display: none;
                         position: absolute;
                         cursor: pointer;
                    }
                     .person {
                         display: flex;
                         align-items: center;
                         margin-left: 0.82rem;
                         width: 1.9rem;
                         .header {
                             display: flex;
                             align-items: center;
                             img {
                                 width: 0.32rem;
                                 height: 0.32rem;
                                 cursor: pointer;
                            }
                        }
                         .name {
                             margin-left: 0.32rem;
                             width: 100%;
                        }
                         .me {
                             margin-left: 0.15rem;
                             width: 1.48rem;
                             height: 0.28rem;
                             background: #5592fe;
                             border-radius: 0.04rem;
                             font-size: 0.16rem;
                             font-weight: bold;
                             line-height: 0.28rem;
                             text-align: center;
                             color: #ffffff;
                        }
                    }
                     .num {
                         margin-right: 1.05rem;
                    }
                     .guanliyuan {
                         margin-right: 1.8rem;
                    }
                     .set {
                         // margin-left: 0.57rem;
                         position: absolute;
                         right: 0.3rem;
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