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
            <div class="course-content">
              <template v-if="true">
                <Empty
                  class="Empty"
                  :buttonisShow="false"
                  title="还没有模板，现在设计一个呗！"
                />
              </template>
              <template v-else>
                <router-link to="/course/ladderstemplatedesign">
                  <div
                    class="course-item"
                    v-for="(item, index) in 2"
                    :key="index"
                  >
                    <div class="checkbox">
                      <a href="/course/workdetail">
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
                        <el-dropdown
                          trigger="click"
                          placement="bottom-end"
                          v-else
                        >
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
                </router-link>
              </template>
            </div>
            <router-link to="">
              <div class="createTemplete">
                <Button name="设计模板">
                  <img src="@/assets/image/course/ic_button_add.svg" alt="" />
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
                <Button
                  name="创建"
                  class="Button"
                  @click.native="templateDV = true"
                >
                  <img src="@/assets/image/course/ic_button_add.svg" alt="" />
                </Button>
              </div>
            </div>
          </div>
          <div class="right-bottom1">
            <Navigation :tabList="tabList" @tabsIndex="tabsIndex" />
            <template v-if="false">
              <Empty
                style="margintop: 2rem"
                class="Empty"
                :buttonisShow="false"
                title="还未创建任何题集"
              />
            </template>
            <template v-else>
              <LaddersWork />
            </template>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 创建赛程 -->
    <el-dialog
      title=""
      :visible.sync="templateDV"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>从模板中创建赛程</h2>
      <div class="section">
        <span class="course-span">选择模板：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="templateDV = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="templateDV = false">创 建</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle.vue";
import Button from "@/components/Button/Button.vue";
import Dot from "@/components/Dot/Dot";
import SmallHeaderTitle from "@/components/SmallHeaderTitle/SmallHeaderTitle.vue";
import Navigation from "@/components/Navigation/Navigation.vue";
import LaddersWork from "@/components/LaddersWork/LaddersWork.vue";
import CheckBox from "@/components/CheckBox/CheckBox.vue";
import Empty from "@/components/Empty/Empty.vue";
export default {
  components: {
    HeaderTitle,
    SmallHeaderTitle,
    Button,
    Dot,
    LaddersWork,
    Navigation,
    CheckBox,
    Empty,
  },
  data() {
    return {
      templateDV: false,
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
    tabsIndex() {},
    isPay(e) {
      // console.log("e", e,this.radio)
    },
    template() {
      console.log("object");
    },
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-dialog {
  line-height: 0rem;
  .section {
    margin-top: 0.3rem;
    .course-span {
      font-size: 0.16rem;
      color: #666666;
    }
  }
}
::v-deep .el-dialog__header {
  padding-top: 0.1rem;
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
::v-deep .el-select .el-input__inner {
  width: 21vw;
  margin-left: 0.15rem;
  cursor: pointer;
  padding-right: 0.35rem;
  border: none;
  border-bottom: 0.01rem solid #e0e0e0 !important;
}
.breadcrumb {
  margin-bottom: 0.12rem;
}
.left {
  height: 9.36rem;
  opacity: 1;
  border-radius: 0.04rem;
  margin-bottom: 0.12rem;
  .left-top {
  }
  .left-bottom {
    margin-top: 0.32rem;
    height: 8.24rem;
    background-color: #fff;
    .course-content {
      margin-top: -0.15rem;
      height: 7.2rem;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      .Empty {
        ::v-deep .empty {
          margin-top: 2rem;
          height: 0rem;
          text-align: center;
          .img {
            img {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
        ::v-deep .text {
          margin-top: -0.15rem;
          font-size: 0.12rem;
        }
      }
      .course-item {
        width: 100%;
        height: 1.8rem;
        background: #ffffff;
        box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
        padding-bottom: 0.3rem;
        border-bottom: 0.01rem solid #e0e0e0;
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
  // width: 13.38rem;
  height: 8.43rem;
  // background: #994545;
  opacity: 1;
  border-radius: 0.04rem;
  // position: relative;
  .right-top {
    // width: 13.38rem;
    height: 0.74rem;
    background: #ffffff;
    box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
    opacity: 1;
    margin-bottom: 0.2rem;
    .top-bar {
      // margin-top: 0.12rem;
      // width: 15.84rem;
      height: 0.8rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      position: relative;
      display: flex;
      align-items: center;
      .title {
        // background-color: #2a77ff;
        width: 100%;
        // height: 2rem;
        margin: 0.2rem;
        font-size: 0.2rem;
        font-weight: bold;
        line-height: 0.34rem;
        color: #666666;
        border-left: 0.08rem solid #5592fe;
        .name {
          margin-left: 0.12rem;
        }
      }
      .buttons {
        display: flex;
        margin-right: 0.3rem;
        font-size: 0.14rem;
        font-weight: bold;
        color: #f4f4f4;
        position: absolute;
        right: 0.3rem;
        .Button {
          margin-left: 0.2rem;
        }
      }
    }
  }
  .right-bottom {
    // width: 13.38rem;
    padding: 0.6rem;
    height: 8.43rem;
    background: #ffffff;
    opacity: 1;
    border-radius: 0.04rem;
    position: relative;
    .cover {
      margin-top: 0.16rem;
      width: 2.4rem;
      height: 1.36rem;
      background: rgba(0, 0, 0, 1);
      opacity: 1;
      border-radius: 0.08rem;
      overflow: hidden;
      margin-bottom: 0.4rem;
      img {
        object-fit: cover;
        width: 2.4rem;
        height: 1.36rem;
      }
    }
    .button {
      // margin-top: 0.57rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      bottom: 0.6rem;
      .cancel {
        margin-right: 0.3rem;
        min-width: 0.8rem;
        height: 0.4rem;
        background: #ffffff;
        border: 0.01rem solid #e0e0e0;
        box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.01);
        border-radius: 0.04rem;
        // width: 0.36rem;
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
    // width: 13.38rem;
    // padding: 0.6rem;
    height: 8.43rem;
    // background: #ffffff;
    opacity: 1;
    border-radius: 0.04rem;
    .cover {
      margin-top: 0.16rem;
      width: 2.4rem;
      height: 1.36rem;
      background: rgba(0, 0, 0, 1);
      opacity: 1;
      border-radius: 0.08rem;
      overflow: hidden;
      margin-bottom: 0.4rem;
      img {
        object-fit: cover;
        width: 2.4rem;
        height: 1.36rem;
      }
    }
  }
  .input {
    width: 100%;
    height: 0.42rem;
    background: #ffffff;
    border: 0.01rem solid #e0e0e0;
    opacity: 1;
    border-radius: 0.04rem;
    padding-left: 0.3rem;
    // line-height: 0;
    display: flex;
    margin-top: 0.16rem;
    margin-bottom: 0.4rem;
  }
  .textarea {
    margin-top: 0.16rem;
    width: 100%;
    height: 1.6rem;
    background: #ffffff;
    border: 0.01rem solid #e0e0e0;
    opacity: 1;
    border-radius: 0.04rem;
    resize: none;
    padding-left: 0.3rem;
    padding-top: 0.25rem;
  }
  .isPay {
    opacity: 0.5;
  }
  .type {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    // justify-content: center;
    .select-class {
      margin-left: 0.2rem;
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
    margin-left: 0.05rem;
    display: flex;
    align-items: center;
    // justify-content: center;
    // position: absolute;
    // left: 50%;
    // bottom: 0.6rem;
    .cancel {
      margin-right: 0.3rem;
      min-width: 0.8rem;
      width: 1rem;
      height: 0.4rem;
      background: #ffffff;
      border: 0.01rem solid #e0e0e0;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.01);
      border-radius: 0.04rem;
      // width: 0.36rem;
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
    margin-top: 0.3rem;
    width: 50%;
    height: 4.25rem;
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
          width: 1rem;
          height: 1rem;
        }
      }
      .text {
        margin-top: 0.12rem;
        font-size: 0.14rem;
        color: #666666;
      }
    }
  }
  .content-img {
    margin-top: 0.1rem;
    // width: 100%;
    // height: 100%;
    img {
      // width: 6.4rem;
      // height: 7.4rem;
      opacity: 1;
    }
  }
  .is-pay {
    display: flex;
    align-items: center;
    font-size: 0.18rem;
    color: #333333;
    margin-bottom: 0.4rem;
    .el-radio {
      margin-left: 0.2rem;
      font-size: 0.18rem;
      color: #333333;
    }
  }
  .course-money {
    width: 2.8rem;
    // min-width: 2.4rem;
    height: 0.42rem;
    background: #ffffff;
    border: 0.01rem solid #e0e0e0;
    opacity: 1;
    border-radius: 0.04rem;
    padding-left: 0.3rem;
    // line-height: 0;
    display: flex;
    margin-top: 0.16rem;
    margin-bottom: 0.4rem;
  }
}
::v-deep .el-radio__inner {
  border-radius: 0%;
  width: 0.2rem;
  height: 0.2rem;
  background: #5592fe;
  border: 0.02rem solid #999999;
  border-radius: 0.02rem;
  background-color: #fff;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
::v-deep .el-radio__label {
  font-size: 0.18rem;
  color: #333333;
  padding-left: 0.1rem;
}
// 选中后的图片添加
::v-deep .el-radio__input.is-checked .el-radio__inner {
  border: 1.05rem solid #2a77ff;
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