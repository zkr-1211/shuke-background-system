<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
        <div class="left">
          <div class="left-top">
            <HeaderTitle name="天梯赛模板" />
          </div>
          <div class="left-bottom">
            <!-- <HeaderTitle name="赛程" /> -->
            <div class="course-content">
              <div class="course-item" v-for="(item, index) in 25" :key="index">
                <div class="checkbox">
                  <a href="/course/workDetail">
                    <div class="name">UI设计赛程</div>
                  </a>

                  <div v-if="isCheckBox">
                    <CheckBox />
                  </div>
                </div>
                <div class="create">创建者：张老师</div>
                <div class="bottom-message">
                  <div class="classnum">任务数：20</div>
                  <div class="dot-bottom">
                    <div class="num">起止时间：2021/10/15-2021/10/16</div>
                    <div class="dot" v-if="isCheckBox"></div>
                    <el-dropdown trigger="click" placement="bottom-end" v-else>
                      <span class="el-dropdown-link">
                        <Dot />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <div @click="editDV = true">
                          <el-dropdown-item>重命名</el-dropdown-item>
                        </div>
                        <div @click="deleteDV = true">
                          <el-dropdown-item>删除</el-dropdown-item>
                        </div>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
              </div>
            </div>
            <router-link to="/course/laddersTemplateDesign">
              <div class="createTemplete">
                <Button name="设计模板" @click.native="">
                  <img src="@/assets/image/course/ic_button_see.svg" alt="" />
                </Button>
              </div>
            </router-link>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
        <div class="right">
          <div class="right-top">
            <div class="top-bar">
              <HeaderTitle name="赛程" />
              <div class="buttons">
                <Button name="任务提交情况" />
                <Button name="创建" class="Button">
                  <img src="@/assets/image/course/ic_button_see.svg" alt="" />
                </Button>
              </div>
            </div>
          </div>
          <div class="right-bottom1">
            <Navigation :tabList="tabList" @tabsIndex="tabsIndex" />
            <LaddersWork />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import Button from "@/components/button/Button.vue";
import Dot from "@/components/dot/Dot";
import SmallHeaderTitle from "@/components/smallHeaderTitle/SmallHeaderTitle.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import LaddersWork from "@/components/laddersWork/LaddersWork.vue";
import CheckBox from "@/components/checkBox/CheckBox.vue";
export default {
  components: {
    HeaderTitle,
    SmallHeaderTitle,
    Button,
    Dot,
    LaddersWork,
    Navigation,
    CheckBox,
  },
  data() {
    return {
      tabIndex: 0,
      tabsTitle: ["课程信息", "付费设置", "详情页设置", "课程学习码"],
      radio: "开启",
      value: "",
      options: [
        {
          value: "选项1",
          label: "全部班级",
        },
        {
          value: "选项2",
          label: "全部班级",
        },
        {
          value: "选项3",
          label: "全部班级",
        },
        {
          value: "选项4",
          label: "全部班级",
        },
        {
          value: "选项5",
          label: "全部班级",
        },
      ],
      tabList: [
        {
          title: "全部",
        },
        {
          title: "我创建的",
        },
        {
          title: "进行中",
        },
        {
          title: "暂停中",
        },
        {
          title: "未开始",
        },
        {
          title: "已过期",
        },
      ],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    selectActive(index) {
      this.tabIndex = index;
    },
    isPay(e) {
      // console.log("e", e,this.radio)
    },
  },
};
</script>
<style lang='scss' scoped>
.breadcrumb {
  margin-bottom: 12px;
}
.left {
  // width: 214px;
  height: 936px;
  //   background: #ffffff;
  opacity: 1;
  border-radius: 4px;
  //   padding-top: 70px;
  margin-bottom: 12px;
  .left-top {
  }
  .left-bottom {
    margin-top: 0.32rem;
    height: 8.24rem;
    background-color: #fff;
    .course-content {
      margin-top: -0.15rem;
      // padding-right: 1.32rem;
      height: 7.2rem;
      overflow: auto;
      width: 100%;
      // width: 90%;
      // min-height: 18rem;
      overflow: auto;
      // background-color: red;
      display: flex;
      // align-items: center;
      // justify-content: space-between;
      flex-wrap: wrap;
      // padding-right: 0.32rem;
      .course-item {
        width: 100%;
        height: 1.8rem;
        // margin-top: 0.3rem;
        // margin-left: 0.03rem;
        // margin-right: 0.29rem;
        background: #ffffff;
        box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
        // margin-left: 0.32rem;
        // border-radius: 0.08rem;
        padding-bottom: 30px;
        border-bottom: 1px solid #e0e0e0;
        .img {
          width: 2.91rem;
          height: 1.68rem;
          img {
            width: 2.91rem;
            height: 1.68rem;
            background: rgba(0, 0, 0, 0);
            border-radius: 0.08rem;
          }
        }
        .checkbox {
          position: relative;
          .el-checkbox {
            position: absolute;
            right: 0.2rem;
            top: 0.05rem;
            font-size: 0.2rem;
          }
        }
        .name {
          width: 100%;
          border-left: 0.07rem solid #5592fe;
          font-size: 0.2rem;
          font-weight: bold;
          line-height: 0.34rem;
          color: #333333;
          padding-left: 0.1rem;
          margin: 0.2rem 0.15rem 0.2rem 0rem;
        }

        .create {
          font-size: 0.16rem;
          line-height: 0.27rem;
          color: #666666;
          margin: 0.15rem 0.15rem 0.1rem 0.2rem;
        }
        .bottom-message {
          font-size: 0.12rem;
          font-weight: 400;
          line-height: 0.18rem;
          color: #999999;
          // display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.05rem 0.15rem 0.15rem 0.2rem;
          .classnum {
            margin-top: 0.15rem;
            font-size: 0.16rem;
            color: #666666;
            opacity: 0.8;
          }
          .dot-bottom {
            margin-top: 0.1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .dot {
              width: 0.27rem;
              height: 0.27rem;
              .dynamic_right2 {
                width: 0.27rem;
                height: 0.27rem;
                // background-color: red;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                flex-direction: column;
                .dynamic_right2_dot {
                  margin-bottom: 0.02rem;
                  margin-right: 0.1rem;
                  width: 3.05rem;
                  height: 3.05rem;
                  background: #999999;
                  border-radius: 50%;
                }
              }
            }
            .num {
              font-size: 0.12rem;
              color: #999999;
              margin-right: 0.35rem;
            }
          }
        }
      }
    }
    .createTemplete {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.3rem;
    }
  }
}
.right {
  // width: 1338px;
  height: 843px;
  // background: #994545;
  opacity: 1;
  border-radius: 4px;
  // position: relative;
  .right-top {
    // width: 1338px;
    height: 74px;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
    opacity: 1;
    margin-bottom: 20px;

    .top-bar {
      // margin-top: 12px;
      // width: 1584px;
      height: 80px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
      position: relative;
      display: flex;
      align-items: center;

      .title {
        // background-color: #2a77ff;
        width: 100%;
        // height: 200px;
        margin: 20px;
        font-size: 20px;
        font-weight: bold;
        line-height: 34px;
        color: #666666;
        border-left: 8px solid #5592fe;
        .name {
          margin-left: 12px;
        }
      }
      .buttons {
        display: flex;
        margin-right: 0.3rem;
        font-size: 14px;
        font-weight: bold;
        color: #f4f4f4;
        position: absolute;
        right: 0.3rem;
        .Button {
          margin-left: 20px;
        }
      }
    }
  }
  .right-bottom {
    // width: 1338px;
    padding: 60px;
    height: 843px;
    background: #ffffff;
    opacity: 1;
    border-radius: 4px;
    position: relative;
    .cover {
      margin-top: 16px;
      width: 240px;
      height: 136px;
      background: rgba(0, 0, 0, 1);
      opacity: 1;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
      img {
        object-fit: cover;
        width: 240px;
        height: 136px;
      }
    }
    .button {
      // margin-top: 57px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      bottom: 60px;
      .cancel {
        margin-right: 30px;
        min-width: 0.8rem;
        height: 0.4rem;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.01);
        border-radius: 4px;
        // width: 36px;
        font-size: 0.14rem;
        font-weight: bold;
        color: #666666;
        &:hover {
          // opacity: 0.9;
          background-color: #eceaea;
        }
        &:active {
          // opacity: 0.6;
          background-color: #e0e0e0;
        }
      }
    }
  }
  .right-bottom1 {
    // width: 1338px;
    // padding: 60px;
    height: 843px;
    // background: #ffffff;
    opacity: 1;
    border-radius: 4px;
    .cover {
      margin-top: 16px;
      width: 240px;
      height: 136px;
      background: rgba(0, 0, 0, 1);
      opacity: 1;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
      img {
        object-fit: cover;
        width: 240px;
        height: 136px;
      }
    }
  }
  .input {
    width: 100%;
    height: 42px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    opacity: 1;
    border-radius: 4px;
    padding-left: 30px;
    // line-height: 0;
    display: flex;
    margin-top: 16px;
    margin-bottom: 40px;
  }
  .textarea {
    margin-top: 16px;
    width: 100%;
    height: 160px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    opacity: 1;
    border-radius: 4px;
    resize: none;
    padding-left: 30px;
    padding-top: 25px;
  }
  .isPay {
    opacity: 0.5;
  }
  .type {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    // justify-content: center;
    .select-class {
      margin-left: 20px;
      // width: 2rem;
      // height: 0.8rem;
      background: #ffffff;
      opacity: 1;
      display: flex;
      // align-items: center;
      // justify-content: center;
      ::v-deep .el-select .el-input__inner {
        cursor: pointer;
        width: 1.68rem;
        height: 0.4rem;
        background: #ffffff;
        border: 0.01rem solid #e0e0e0;
        opacity: 1;
        border-radius: 0.04rem;
      }
      .el-select {
        height: 0.4rem;
        background: #ffffff;
        border: 0.01rem solid #e0e0e0;
        opacity: 1;
        border-radius: 0.04rem;
      }
    }
  }

  .button1 {
    margin-left: 5px;
    display: flex;
    align-items: center;
    // justify-content: center;
    // position: absolute;
    // left: 50%;
    // bottom: 60px;
    .cancel {
      margin-right: 30px;
      min-width: 0.8rem;
      width: 1rem;
      height: 0.4rem;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.01);
      border-radius: 4px;
      // width: 36px;
      font-size: 0.14rem;
      font-weight: bold;
      color: #666666;
      &:hover {
        // opacity: 0.9;
        background-color: #eceaea;
      }
      &:active {
        // opacity: 0.6;
        background-color: #e0e0e0;
      }
    }
  }
  .image {
    margin-top: 30px;
    width: 50%;
    height: 425px;
    background: #f7f6fa;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .centet-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img {
        display: flex;
        align-items: center;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .text {
        margin-top: 12px;
        font-size: 14px;
        color: #666666;
      }
    }
  }
  .content-img {
    margin-top: 10px;
    // width: 100%;
    // height: 100%;
    img {
      // width: 640px;
      // height: 740px;
      opacity: 1;
    }
  }
  .is-pay {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #333333;
    margin-bottom: 40px;

    .el-radio {
      margin-left: 20px;
      font-size: 18px;
      color: #333333;
    }
  }
  .course-money {
    width: 280px;
    // min-width: 240px;

    height: 42px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    opacity: 1;
    border-radius: 4px;
    padding-left: 30px;
    // line-height: 0;
    display: flex;
    margin-top: 16px;
    margin-bottom: 40px;
  }
}
::v-deep .el-radio__inner {
  border-radius: 0%;
  width: 20px;
  height: 20px;
  background: #5592fe;
  border: 2px solid #999999;
  border-radius: 2px;
  background-color: #fff;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
::v-deep .el-radio__label {
  font-size: 18px;
  color: #333333;
  padding-left: 10px;
}
// 选中后的图片添加
::v-deep .el-radio__input.is-checked .el-radio__inner {
  border: 1.5px solid #2a77ff;
  background: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../../../assets/image/course/icon_radio_s.svg);
}
// 选中后的背景颜色
::v-deep .el-radio__inner::after {
  background-color: rgba(0, 0, 0, 0);
}
// 选中后的字体颜色
::v-deep .el-radio__input.is-checked + .el-radio__label {
  color: #333333;
}
</style>