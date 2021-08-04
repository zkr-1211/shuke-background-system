<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-bar">
      <div class="title">
        <div class="name">作业/任务情况</div>
      </div>
    </div>

    <div class="bottom">
      <div class="left">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="天梯赛任务"></el-tab-pane>
          <el-tab-pane label="作业"></el-tab-pane>
          <el-tab-pane label="随堂练习"></el-tab-pane>
        </el-tabs>
        <div v-if="tabIndex == 0">士大夫</div>
        <div v-if="tabIndex == 1">
          <div class="course-outline">
            <el-collapse accordion>
              <el-collapse-item :name="index" v-for="(item, index) in 15" :key="index">
                <template slot="title">
                  <div class="title">第一章：Python</div>
                  <div class="dot">共100份</div>
                </template>

                <div class="outline-item" v-for="(item1, index1) in item" :key="index1">
                  <div class="tip" :class="[
                      index1 == 0 ? 'tip1' : '',
                      index1 == 1 ? 'tip2' : '',
                    ]"></div>
                  主任务01：完成各类型图标设计<span>(18)</span>
                  <Dot class="Dot" />
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div v-if="tabIndex == 2">士大夫</div>
        <div class="bottom-tip">
          <div class="red">
            <div></div>
            <span>还有未批改</span>
          </div>
          <div class="lv">
            <div></div>
            <span>全部批改完成</span>
          </div>
          <div class="yellow">
            <div></div>
            <span>逾期补交</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-top-text">
          <span>当前作业：</span>
          <span>子任务01:完成10个线性图标的设计</span>
        </div>
        <div class="right-bottom-content">
          <div class="right-left">
            <div class="score">
              <div class="score-left">
                <span>得分</span>
                <div class="score-tie" :class="[memberId == 0?'score-tie1':'',memberId == 1?'score-tie2':'',memberId == 2?'score-tie3':'']"></div>
                <span>此作业为补交作业</span>
                <span>逾期：12天3小时64分</span>
              </div>

              <div class="score-right">
                <span>89.65</span>
                <span>分</span>
              </div>
            </div>
            <div id="work-content" :class="isFullScren ?'work-content':'icon-content'">
              <div class="icon-top">

                <div class="empty" v-if="true">
                  <div class="img">
                    <img src="@/assets/image/home/img_empty_big.svg" alt="" />
                  </div>
                  <div class="text">还未创建任何课程</div>
                </div>

                <img v-else class="look-image" src="@/assets/image/home/img_empty_big.svg" alt="">
              </div>
              <div class="icon-bottom">
                <div class="icon-bottom-left">
                  <img src="@/assets/image/course/ic_txt.svg" alt="">
                  <span>图标设计技巧</span>
                  <span>共10个文件</span>
                </div>
                <div class="icon-bottom-right">
                  <img src="@/assets/image/course/icon_delect_b.svg" alt="">
                  <img @click="fullScreenEvent" src="@/assets/image/course/icon_fullscreen_b.svg" alt="">
                </div>
              </div>
            </div>
            <div class="comment">
              <div class="nav">
                <span>作业评价</span>
                <a href="">添加图片</a>
              </div>
              <div class="content">
                <!-- <input  v-model="commentDes"   type="text" name="" id=""> -->
                <textarea v-model="commentDes"></textarea>
              </div>
              <div class="add-img">
                <div class="img-item" v-for="(item,index) in 15" :key="index">
                  <img src="@/assets/image/course/icon_fullscreen_b.svg" alt="">
                  <div class="delete">删除</div>
                </div>
              </div>
              <div class="button">
                <Button class="Button" name="添加到评价板" />
                <Button name="确认评价" />
              </div>
            </div>
          </div>
          <div class="right-right">
            <div class="select-class">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="member">
              <div class="nav">
                <span class="">成员</span>
                <span class="">100/001</span>
              </div>
              <div class="content">
                <div class="item" :class="index==memberId ? 'is-active':''" v-for="(item,index) in 15" :key="index" @click="selectMember(index)">
                  <div :class="index==memberId ? 'item-active':''"></div>
                  <img class="header" src="@/assets/image/course/icon_complete.svg" alt="">
                  <div class="person">
                    <div class="name">张克人</div>
                    <div class="num">得分:60</div>
                  </div>
                  <img class="finish" src="@/assets/image/course/icon_complete.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import Dot from "@/components/dot/Dot.vue";
import Button from "@/components/button/Button.vue";
export default {
  components: {
    Dot,
    Button,
  },
  data() {
    return {
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
      value: "",
      timer: null,
      activeName: "1",
      tabIndex: "1",
      memberId: 0,
      //设置当前全屏状态的初始值为 false
      isFullScren: false,
      commentDes:
        "对于我作评语大全，师授课的方课程知，对教师工作评语大全。理论和实际相结合，通过例题使知识更条理化。但授课速度有点快重点突出，层次分明，对教师工作评语大全。理论和实际相结合，通过例题使知识更条理化。通过例题使知识更条理化。但授课速度有点快重点突出，层次分明，对教师工作评语大全。理论和实际相结合，通过例题使知识更条理化。",
    };
  },
  computed: {},
  mounted() {
    let isFullscreen =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.fullScreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen;
    isFullscreen = !!isFullscreen;
    let that = this;
    document.addEventListener("fullscreenchange", () => {
      that.isFullScren = !that.isFullScren;
    });
    document.addEventListener("mozfullscreenchange", () => {
      that.isFullScren = !that.isFullScren;
    });
    document.addEventListener("webkitfullscreenchange", () => {
      that.isFullScren = !that.isFullScren;
    });
    document.addEventListener("msfullscreenchange", () => {
      that.isFullScren = !that.isFullScren;
    });
  },

  methods: {
    handleClick(tab, event) {
      this.tabIndex = tab.index;
    },
    selectMember(index) {
      this.memberId = index;
    },
    // 全屏事件
    fullScreenEvent() {
      //全屏
      // let el = document.documentElement;
      //局部全屏
      let el = document.getElementById("work-content");
      if (this.isFullScren) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen();
        } else if (el.webkitRequestFullScreen) {
          el.webkitRequestFullScreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.el-collapse {
  border: none;
}
::v-deep .el-tabs--border-card > .el-tabs__content {
  padding: 10px;
}
::v-deep .el-icon-arrow-right:before {
  background-image: url(../../../assets/image/course/right.svg);
  background-repeat: no-repeat;
  background-size: 28px;
  position: relative;
  right: 500px;
  bottom: 3px;
  content: "\e6e";
  border: none;
}
::v-deep .el-collapse-item__arrow.is-active {
  bottom: 3px;
  -webkit-transform: rotate(0);
  transform: rotate(0);
  background-image: url(../../../assets/image/course/bottom.svg);
  background-repeat: no-repeat;
  background-size: 28px;
  position: relative;
  right: 500px;
  content: "\e6e";
}
.el-collapse-item {
  position: relative;
  .dot {
    position: absolute;
    right: 20px;
    top: 1px;
    font-size: 14px;
    color: #c3c3c3;
  }
}
.course-outline {
  width: 500px;
  height: 680px;
  overflow-x: hidden;
  margin: 0 auto;
  // background-color: red;
  .outline-item {
    width: 578px;
    background: #ffffff;
    padding: 24px 30px 24px 50px;
    font-size: 16px;
    line-height: 27px;
    color: #666666;
    // position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    // justify-content: space-between;
    &:hover {
      background-color: #f6f7f9;
    }
    &:hover .Dot {
      display: block;
    }
    span {
      font-size: 16px;
      font-weight: bold;
      color: #666666;
    }
    .tip {
      width: 12px;
      height: 12px;
      background: #f96164;
      border-radius: 50%;
      opacity: 1;
      margin-right: 21px;
    }
    .tip1 {
      background: #33d182;
    }
    .tip2 {
      background: #ffbc13;
    }
    .Dot {
      right: 15px;
      position: absolute;
      display: none;
    }
  }
}
::v-deep .el-collapse-item__content {
  padding-bottom: 0;
}
::v-deep .el-collapse-item__header {
  display: flex;
  align-items: center;
  line-height: 60px;
  cursor: pointer;
  // transition: border-bottom-color 0.3s;
  outline: 0;
  width: 578px;
  height: 60px;
  background: #ffffff;
  font-size: 20px;
  color: #333333;
  padding-left: 65px;
  border: none;
  padding-right: 30px;
}
::v-deep .el-tabs__nav-scroll {
  overflow: hidden;
  background-color: #f6f6f8;
}
.el-tabs {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0);
  border: none;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  font-size: 16px;
  font-weight: bold;
  color: #666666;
  //   width: 120px;
  text-align: center;
  background-color: #fff;
  border-right-color: #dcdfe6;
  border-left-color: #dcdfe6;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  font-size: 16px;
  font-weight: bold;
  color: #999999;
  width: 120px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background-color: #edeff3;
  &:hover {
    color: #666666;
  }
}
.top-bar {
  margin-top: 20px;
  width: 1584px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
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
}
.bottom {
  margin-top: 32px;
  display: flex;
  .left {
    width: 500px;
    height: 816px;
    background: #ffffff;
    // box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
    position: relative;
    opacity: 1;
    .bottom-tip {
      font-size: 14px;
      color: #c3c3c3;
      display: flex;
      justify-content: space-evenly;
      position: absolute;
      bottom: 30px;
      width: 100%;
      .red {
        display: flex;
        align-items: center;
        > div {
          width: 12px;
          height: 12px;
          background: #f96164;
          border-radius: 50%;
          margin-right: 17px;
        }
      }
      .lv {
        display: flex;
        align-items: center;
        > div {
          width: 12px;
          height: 12px;
          background: #33d182;
          border-radius: 50%;
          margin-right: 17px;
        }
      }
      .yellow {
        display: flex;
        align-items: center;
        > div {
          width: 12px;
          height: 12px;
          background: #ffbc13;
          border-radius: 50%;
          margin-right: 17px;
        }
      }
    }
  }
  .right {
    margin-left: 32px;
    width: 1052px;
    height: 100%;
    background: #fbfafc;
    padding: 31px 40px 31px 40px;

    .right-top-text {
      span:nth-of-type(1) {
        font-size: 18px;
        font-weight: bold;
        color: #666666;
      }
      span:nth-of-type(2) {
        font-size: 18px;
        color: #999999;
      }
    }
    .right-bottom-content {
      display: flex;
      margin-top: 32px;
      .right-left {
        .score {
          width: 752px;
          height: 80px;
          background: #ffffff;
          opacity: 1;
          display: flex;
          align-items: center;
          padding: 20px;

          justify-content: space-between;
          .score-left {
            display: flex;
            align-items: center;
            span:nth-of-type(1) {
              font-size: 20px;
              font-weight: bold;
              color: #666666;
              line-height: 20px;
            }
            span:nth-of-type(2) {
              font-size: 14px;
              color: #999999;
              margin-left: 15px;
            }
            span:nth-of-type(3) {
              font-size: 14px;
              color: #999999;
              margin-left: 21px;
            }
            .score-tie {
              margin-left: 21px;
              width: 12px;
              height: 12px;
              // background: #ffbc13;
              border-radius: 50%;
              opacity: 1;
            }
            .score-tie1 {
              background: #f96164;
            }
            .score-tie2 {
              background: #33d182;
            }
            .score-tie3 {
              background: #ffbc13;
            }
          }
          .score-right {
            width: 120px;
            height: 50px;
            background: #f6f6f8;
            opacity: 1;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            span:nth-of-type(1) {
              font-size: 18px;
              font-weight: bold;
              color: #2a77ff;
              letter-spacing: 1px;
            }
            span:nth-of-type(2) {
              font-size: 18px;
              color: #666666;
              line-height: 18px;
              margin-left: 5px;
            }
          }
        }
        .work-content {
          width: 100vw !important;
          height: 100vh !important;
          // background-color: red;
          background: #fff;
          .icon-top {
            width: 100%;
            height: 90%;
            // background: rgb(110, 152, 167);
            opacity: 1;
            overflow: auto;
            position: relative;
            .look-image {
              width: 752px;
              // height: 423px;
              opacity: 1;
            }
            .empty {
              top: 50%;
              left: 50%;
              position: absolute;
              transform: translate(-50%, -50%);
              // height: 330px;
              // width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              .img {
                width: 173px;
                height: 111px;
                img {
                  width: 173px;
                  height: 111px;
                }
              }
              .text {
                margin-top: 17px;
                font-size: 11px;
                font-weight: bold;
                color: #999999;
              }
            }
          }
          .icon-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            width: 100%;
            height: 40px;
            background: #ffffff;
            .icon-bottom-left {
              display: flex;
              align-items: center;
              span:nth-of-type(1) {
              }
              span:nth-of-type(2) {
                font-size: 12px;
                color: #979797;
                margin-left: 15px;
              }
              img {
                margin-right: 12px;
                cursor: pointer;
              }
            }
            .icon-bottom-right {
              display: flex;
              align-items: center;
              img:nth-of-type(1) {
                margin-right: 6px;
                cursor: pointer;
                width: 34px;
                height: 34px;
              }
              img:nth-of-type(2) {
                // margin-right: 6px;
                cursor: pointer;
                width: 34px;
                height: 34px;
              }
            }
          }
        }
        .icon-content {
          margin-top: 20px;
          width: 752px;
          height: 463px;
          background: #fff;
          opacity: 1;
          .icon-top {
            width: 752px;
            height: 423px;
            // background: rgb(110, 152, 167);
            opacity: 1;
            overflow: auto;
            position: relative;
            .look-image {
              width: 752px;
              // height: 423px;
              opacity: 1;
            }
            .empty {
              top: 50%;
              left: 50%;
              position: absolute;
              transform: translate(-50%, -50%);
              // height: 330px;
              // width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              .img {
                width: 173px;
                height: 111px;
                img {
                  width: 173px;
                  height: 111px;
                }
              }
              .text {
                margin-top: 17px;
                font-size: 11px;
                font-weight: bold;
                color: #999999;
              }
            }
          }
          .icon-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            width: 752px;
            height: 40px;
            background: #ffffff;
            .icon-bottom-left {
              display: flex;
              align-items: center;
              span:nth-of-type(1) {
              }
              span:nth-of-type(2) {
                font-size: 12px;
                color: #979797;
                margin-left: 15px;
              }
              img {
                margin-right: 12px;
                cursor: pointer;
              }
            }
            .icon-bottom-right {
              display: flex;
              align-items: center;
              img:nth-of-type(1) {
                margin-right: 6px;
                cursor: pointer;
                width: 34px;
                height: 34px;
              }
              img:nth-of-type(2) {
                // margin-right: 6px;
                cursor: pointer;
                width: 34px;
                height: 34px;
              }
            }
          }
        }
        .comment {
          margin-top: 20px;
          width: 752px;
          // height: 100%;
          // background: #ffffff;
          opacity: 1;
          .nav {
            width: 752px;
            height: 60px;
            background: #f6f6f8;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            span {
              font-size: 16px;
              font-weight: bold;
              color: #666666;
              opacity: 1;
            }
            a {
              font-size: 16px;
              color: #999999;
              text-decoration: underline;
              opacity: 1;
            }
          }
          .content {
            width: 752px;
            height: 184px;
            background: #ffffff;
            opacity: 1;
            padding: 30px 40px 30px 40px;
            overflow-y: hidden;
            overflow-x: hidden;
            textarea {
              width: 672px !important;
              height: 100% !important;
              font-size: 14px;
              line-height: 24px;
              color: #666666;
              border: none;
              resize: none;
              overflow-y: auto;
            }
          }
          .add-img {
            margin-top: 12px;
            width: 752px;
            height: 195px;
            display: flex;
            // margin-left: 12px;
            flex-wrap: wrap;
            // transition: all 1s;
            overflow: auto;
            .img-item {
              position: relative;
              overflow: hidden;

              &:hover .delete {
                transform: translateY(0vh);
              }
              img {
                margin-right: 12px;
                margin-top: 12px;
                width: 80px;
                height: 80px;
                background: rgb(205, 221, 245);
                opacity: 1;
              }
              .delete {
                cursor: pointer;
                width: 80px;
                height: 24px;
                background: #2a77ff;
                opacity: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                color: #ffffff;
                position: absolute;
                bottom: 0;
                transform: translateY(100vh);
                transition: all 0.5s;
              }
            }
          }
          .button {
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
            .Button {
              margin-right: 12px;
            }
          }
        }
      }
      .right-right {
        margin-left: 20px;
        .select-class {
          width: 200px;
          height: 80px;
          background: #ffffff;
          opacity: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .el-select {
            width: 168px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            opacity: 1;
            border-radius: 4px;
          }
        }
        .member {
          margin-top: 20px;
          height: 640px;
          width: 200px;
          background-color: #fff;
          .nav {
            width: 200px;
            height: 40px;
            opacity: 1;
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            justify-content: space-between;
            padding: 13px 24px 13px 24px;
            span:nth-of-type(1) {
              color: #666666;
            }
            span:nth-of-type(2) {
              color: #999999;
            }
          }
          .content {
            height: 595px;
            // background-color: red;
            overflow-y: auto;
            overflow-x: hidden;
            .is-active {
              background-color: #f6f7f9;
            }
            .item {
              cursor: pointer;
              width: 200px;
              height: 60px;
              // background: #ffffff;
              display: flex;
              align-items: center;
              position: relative;
              border-bottom: 1px solid #edeff3;
              &:hover {
                background-color: #f6f7f9;
                // border-left: 10px solid #5592fe;
              }
              .item-active {
                position: absolute;
                left: 0;
                width: 10px;
                height: 60px;
                background: #5592fe;
              }
              .header {
                width: 32px;
                height: 32px;
                margin-left: 24px;
              }
              .finish {
                width: 18px;
                height: 18px;
                background: #33d182;
                border-radius: 50%;
                opacity: 1;
                position: absolute;
                right: 20px;
                bottom: 13px;
              }
              .person {
                margin-left: 12px;
                .name {
                  font-size: 14px;
                  color: #666666;
                }
                .num {
                  font-size: 14px;
                  color: #999999;
                }
              }
            }
          }
        }
      }
    }
  }
}
::v-deep .el-select .el-input__inner {
  cursor: pointer;
}
</style>