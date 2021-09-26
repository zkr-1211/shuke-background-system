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
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-bar">
          <HeaderTitle name="作业/任务情况" />
        </div>
      </el-col>
    </el-row>
    <div class="bottom">
      <el-row :gutter="32" class="el-row">
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="left">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
              <el-tab-pane label="天梯赛任务"></el-tab-pane>
              <el-tab-pane label="作业"></el-tab-pane>
              <el-tab-pane label="随堂练习"></el-tab-pane>
            </el-tabs>
            <div v-if="tabIndex == 0">
              <div class="course-outline">
                <el-collapse accordion>
                  <el-collapse-item :name="index" v-for="(item, index) in 3" :key="index">
                    <template slot="title">
                      <div class="title">第一章：Python</div>
                      <div class="dot">共100份</div>
                    </template>
                    <div class="second-course-outline">
                      <el-collapse accordion>
                        <el-collapse-item :name="index" v-for="(item, index) in 1" :key="index">
                          <template slot="title">
                            <div class="second-title">第一章：Python</div>
                            <!-- <div class="dot">共100份</div> -->
                          </template>

                          <div class="outline-item" v-for="(item1, index1) in item" :key="index1">
                            <div class="tip" :class="[
                                index1 == 0 ? 'tip1' : '',
                                index1 == 1 ? 'tip2' : '',
                              ]"></div>
                            主任务01：完成各类型图标设计<span>(18)</span>
                            <!-- <Dot class="Dot" /> -->
                          </div>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
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
            <div v-if="tabIndex == 2"></div>
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
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
          <div class="right">
            <div class="right-top-text">
              <span>当前作业：</span>
              <span>子任务01:完成10个线性图标的设计</span>
            </div>
            <div class="right-bottom-content">
              <el-row :gutter="32" class="el-row">
                <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="18">
                  <div class="right-left">
                    <div class="score">
                      <div class="score-left">
                        <span>得分</span>
                        <div class="score-tie" :class="[
                            memberId == 0 ? 'score-tie1' : '',
                            memberId == 1 ? 'score-tie2' : '',
                            memberId == 2 ? 'score-tie3' : '',
                          ]"></div>
                        <span>此作业为补交作业</span>
                        <span>逾期：12天3小时64分</span>
                      </div>

                      <div class="score-right">
                        <span>89.65</span>
                        <span>分</span>
                      </div>
                    </div>
                    <div id="work-content" :class="isFullScren ? 'work-content' : 'icon-content'">
                      <div class="icon-top">
                        <div class="empty" v-if="true">
                          <div class="img">
                            <img src="@/assets/image/home/img_empty_big.svg" alt="" />
                          </div>
                          <div class="text">还未创建任何课程</div>
                        </div>

                        <img v-else class="look-image" src="@/assets/image/home/img_empty_big.svg" alt="" />
                      </div>
                      <div class="icon-bottom">
                        <div class="icon-bottom-left">
                          <img src="@/assets/image/course/ic_txt.svg" alt="" />
                          <span>图标设计技巧</span>
                          <span>共10个文件</span>
                        </div>
                        <div class="icon-bottom-right">
                          <img src="@/assets/image/course/icon_delect_b.svg" alt="" />
                          <img @click="fullScreenEvent" src="@/assets/image/course/icon_fullscreen_b.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="comment">
                      <div class="nav">
                        <span>作业评价</span>
                        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="commitImgList" list-type="picture">
                          <a href="javascript:void(0);">添加图片</a>
                        </el-upload>
                      </div>
                      <div class="content">
                        <!-- <input  v-model="commentDes"   type="text" name="" id=""> -->
                        <textarea v-model="commentDes"></textarea>
                      </div>
                      <div class="add-img">
                        <div class="img-item" v-for="(item, index) in 15" :key="index">
                          <img src="@/assets/image/course/icon_fullscreen_b.svg" alt="" />
                          <div class="delete">删除</div>
                        </div>
                      </div>
                      <div class="button">
                        <Button class="Button" name="添加到评价板" />
                        <Button name="确认评价" />
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
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
                        <div class="item" :class="index == memberId ? 'is-active' : ''" v-for="(item, index) in 15" :key="index" @click="selectMember(index)">
                          <div :class="index == memberId ? 'item-active' : ''"></div>
                          <img class="header" src="@/assets/image/course/icon_complete.svg" alt="" />
                          <div class="person">
                            <div class="name">张克人</div>
                            <div class="num">得分:60</div>
                          </div>
                          <img class="finish" src="@/assets/image/course/icon_complete.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>

          <div class="evaluation-board">
            <el-row :gutter="32" class="el-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="right-top-text">
                  <span>评语板</span>
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="18">
                <div class="comment" v-for="(item, index) in 3" :key="index">
                  <div class="nav">
                    <span>评语板{{ index + 1 }}</span>
                    <a href="">删除</a>
                  </div>
                  <div class="content">
                    <!-- <input  v-model="commentDes"   type="text" name="" id=""> -->
                    <textarea v-model="commentDes"></textarea>
                  </div>
                  <div class="button">
                    <Button class="Button" name="复制评语" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Dot from "@/components/dot/Dot.vue";
import Button from "@/components/button/Button.vue";
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
export default {
  components: {
    Dot,
    Button,
    HeaderTitle,
  },
  data() {
    return {
      commitImgList: [],
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
    handleRemove(file, commitImgList) {
      console.log(file, commitImgList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>
<style lang='scss' scoped>
//去除大纲下划线
::v-deep .el-collapse-item__wrap {
  will-change: height;
  background-color: #fff;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: none;
}
.el-collapse {
  border: none;
}
::v-deep .el-tabs--border-card > .el-tabs__content {
  padding: 0.1rem;
}




::v-deep .el-collapse-item__header {
  display: flex;
  align-items: center;
  line-height: 0.6rem;
  cursor: pointer;
  transition: border-bottom-color 0.3s;
  outline: 0;
  width: 100%;
  height: 0.6rem;
  background: #ffffff;
  font-size: 0.2rem;
  color: #333333;
  padding-left: 0.65rem;
  border: none;
  padding-right: 0.3rem;
  position: relative;
  background-image: url(../../../assets/image/course/right.svg);
  background-repeat: no-repeat;
  background-position: 0.1rem;
}
::v-deep .el-collapse-item__header.is-active {
  border-bottom-color: transparent;
  background-image: url(../../../assets/image/course/bottom.svg);
}
::v-deep .el-icon-arrow-right:before {
  content: none;
  border: none;
}
::v-deep .el-collapse-item__arrow.is-active {
  content: none;
}
.course-outline {
  // width: 5rem;
  height: 6.8rem;
  overflow-x: hidden;
  margin: 0 auto;
  .title {
    color: #333333;
    font-weight: bold;
  }
  .second- {
    color: #666666;
  }
  .second-course-outline {
    margin-left: 0.2rem;
  }
  .outline-item {
    background: #ffffff;
    padding: 0.24rem 0.3rem 0.24rem 0.5rem;
    font-size: 0.16rem;
    line-height: 0.27rem;
    color: #666666;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #f6f7f9;
    }
    &:hover .Dot {
      display: block;
    }
    span {
      font-size: 0.16rem;
      font-weight: bold;
      color: #666666;
    }
    .tip {
      width: 0.12rem;
      height: 0.12rem;
      background: #f96164;
      border-radius: 50%;
      opacity: 1;
      margin-right: 0.21rem;
    }
    .tip1 {
      background: #33d182;
    }
    .tip2 {
      background: #ffbc13;
    }
    .Dot {
      right: 0.15rem;
      position: absolute;
      display: none;
    }
  }
}
::v-deep .el-collapse-item__content {
  padding-bottom: 0;
}
::v-deep .el-tabs__nav-scroll {
  overflow: hidden;
  background-color: #f6f6f8;
}
.el-tabs {
  box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0);
  border: none;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  font-size: 0.16rem;
  font-weight: bold;
  color: #666666;
  // width: 1.2rem;
  text-align: center;
  background-color: #fff;
  border-right-color: #dcdfe6;
  border-left-color: #dcdfe6;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  font-size: 0.16rem;
  font-weight: bold;
  color: #999999;
  width: 1.2rem;
  height: 0.48rem;
  line-height: 0.48rem;
  text-align: center;
  background-color: #edeff3;
  &:hover {
    color: #666666;
  }
}
.top-bar {
  margin-top: 0.2rem;
  // width: 15.84rem;
  height: 0.8rem;
  background: #ffffff;
  box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
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
}
.bottom {
  margin-top: 0.32rem;
  display: flex;
  .left {
    // width: 5rem;
    height: 8.16rem;
    background: #ffffff;
    // box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
    position: relative;
    opacity: 1;
    .bottom-tip {
      font-size: 0.14rem;
      color: #c3c3c3;
      display: flex;
      justify-content: space-evenly;
      position: absolute;
      bottom: 0.3rem;
      width: 100%;
      .red {
        display: flex;
        align-items: center;
        > div {
          width: 0.12rem;
          height: 0.12rem;
          background: #f96164;
          border-radius: 50%;
          margin-right: 0.17rem;
        }
      }
      .lv {
        display: flex;
        align-items: center;
        > div {
          width: 0.12rem;
          height: 0.12rem;
          background: #33d182;
          border-radius: 50%;
          margin-right: 0.17rem;
        }
      }
      .yellow {
        display: flex;
        align-items: center;
        > div {
          width: 0.12rem;
          height: 0.12rem;
          background: #ffbc13;
          border-radius: 50%;
          margin-right: 0.17rem;
        }
      }
    }
  }
  .right {
    // margin-left: 0.32rem;
    // width: 10.52rem;
    height: 100%;
    background: #fbfafc;
    padding: 0.31rem 0.4rem 0.31rem 0.4rem;
    overflow-y: hidden;
    .right-top-text {
      display: flex;
      // background-color: red;
      span:nth-of-type(1) {
        font-size: 0.18rem;
        font-weight: bold;
        color: #666666;
      }
      span:nth-of-type(2) {
        font-size: 0.18rem;
        color: #999999;
      }
    }
    .right-bottom-content {
      display: flex;
      margin-top: 0.32rem;
      .right-left {
        .score {
          // width: 7.52rem;
          height: 0.8rem;
          background: #ffffff;
          opacity: 1;
          display: flex;
          align-items: center;
          padding: 0.2rem;
          justify-content: space-between;
          .score-left {
            display: flex;
            align-items: center;
            span:nth-of-type(1) {
              font-size: 0.2rem;
              font-weight: bold;
              color: #666666;
              line-height: 0.2rem;
            }
            span:nth-of-type(2) {
              font-size: 0.14rem;
              color: #999999;
              margin-left: 0.15rem;
            }
            span:nth-of-type(3) {
              font-size: 0.14rem;
              color: #999999;
              margin-left: 0.21rem;
            }
            .score-tie {
              margin-left: 0.21rem;
              width: 0.12rem;
              height: 0.12rem;
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
            width: 1.2rem;
            height: 0.5rem;
            background: #f6f6f8;
            opacity: 1;
            border-radius: 0.06rem;
            display: flex;
            align-items: center;
            justify-content: center;
            span:nth-of-type(1) {
              font-size: 0.18rem;
              font-weight: bold;
              color: #2a77ff;
              letter-spacing: 0.01rem;
            }
            span:nth-of-type(2) {
              font-size: 0.18rem;
              color: #666666;
              line-height: 0.18rem;
              margin-left: 0.05rem;
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
              width: 7.52rem;
              // height: 4.23rem;
              opacity: 1;
            }
            .empty {
              top: 50%;
              left: 50%;
              position: absolute;
              transform: translate(-50%, -50%);
              // height: 3.3rem;
              // width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              .img {
                width: 1.73rem;
                height: 1.11rem;

                img {
                  width: 1.73rem;
                  height: 1.11rem;
                }
              }
              .text {
                margin-top: 0.17rem;
                font-size: 0.11rem;
                font-weight: bold;
                color: #999999;
              }
            }
          }
          .icon-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.2rem;
            width: 100%;
            height: 0.4rem;
            background: #ffffff;
            .icon-bottom-left {
              display: flex;
              align-items: center;
              span:nth-of-type(1) {
                font-size: 0.15rem !important;
              }
              span:nth-of-type(2) {
                font-size: 0.12rem;
                color: #979797;
                margin-left: 0.15rem;
              }
              img {
                margin-right: 0.12rem;
                cursor: pointer;
              }
            }
            .icon-bottom-right {
              display: flex;
              align-items: center;
              img:nth-of-type(1) {
                margin-right: 0.06rem;
                cursor: pointer;
                width: 0.34rem;
                height: 0.34rem;
              }
              img:nth-of-type(2) {
                // margin-right: 0.06rem;
                cursor: pointer;
                width: 0.34rem;
                height: 0.34rem;
              }
            }
          }
        }
        .icon-content {
          margin-top: 0.2rem;
          // width: 7.52rem;
          height: 4.63rem;
          background: #fff;
          opacity: 1;
          position: relative;
          .icon-top {
            width: 7.52rem;
            height: 4.23rem;
            // background: rgb(110, 152, 167);
            opacity: 1;
            overflow: auto;

            .look-image {
              width: 7.52rem;
              // height: 4.23rem;
              opacity: 1;
            }
            .empty {
              top: 50%;
              left: 50%;
              position: absolute;
              transform: translate(-50%, -50%);
              // height: 3.3rem;
              // width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              .img {
                width: 1.73rem;
                height: 1.11rem;
                img {
                  width: 1.73rem;
                  height: 1.11rem;
                }
              }
              .text {
                margin-top: 0.17rem;
                font-size: 0.11rem;
                font-weight: bold;
                color: #999999;
              }
            }
          }
          .icon-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.2rem;
            // width: 7.52rem;
            height: 0.4rem;
            background: #ffffff;
            .icon-bottom-left {
              display: flex;
              align-items: center;
              span:nth-of-type(1) {
                font-size: 0.15rem !important;
              }
              span:nth-of-type(2) {
                font-size: 0.12rem;
                color: #979797;
                margin-left: 0.15rem;
              }
              img {
                margin-right: 0.12rem;
                cursor: pointer;
              }
            }
            .icon-bottom-right {
              display: flex;
              align-items: center;
              img:nth-of-type(1) {
                margin-right: 0.06rem;
                cursor: pointer;
                width: 0.34rem;
                height: 0.34rem;
              }
              img:nth-of-type(2) {
                // margin-right: 0.06rem;
                cursor: pointer;
                width: 0.34rem;
                height: 0.34rem;
              }
            }
          }
        }
        .comment {
          margin-top: 0.2rem;
          // width: 7.52rem;
          // height: 100%;
          // background: #ffffff;
          opacity: 1;
          .nav {
            // width: 7.52rem;
            height: 0.6rem;
            background: #f6f6f8;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.2rem;
            position: relative;
            span {
              font-size: 0.16rem;
              font-weight: bold;
              color: #666666;
              opacity: 1;
            }
            a {
              position: absolute;
              right: 0.3rem;
              top: 0.2rem;
              font-size: 0.16rem;
              color: #999999;
              text-decoration: underline;
              opacity: 1;
            }
          }
          .content {
            // width: 7.52rem;
            height: 1.84rem;
            background: #ffffff;
            opacity: 1;
            padding: 0.3rem 0.4rem 0.3rem 0.4rem;
            overflow-y: hidden;
            overflow-x: auto;
            textarea {
              width: 100% !important;
              height: 100% !important;
              font-size: 0.14rem;
              line-height: 0.24rem;
              color: #666666;
              border: none;
              resize: none;
              overflow-y: auto;
            }
          }
          .add-img {
            margin-top: 0.12rem;
            // width: 7.52rem;
            height: 100%;
            display: flex;
            // margin-left: 0.12rem;
            flex-wrap: wrap;
            // transition: all 1s;
            overflow: auto;
            .img-item {
              position: relative;
              overflow: hidden;
              display: flex;
              justify-content: space-between;
              &:hover .delete {
                transform: translateY(0vh);
              }
              img {
                margin-right: 0.11rem;
                margin-top: 0.12rem;
                width: 0.8rem;
                height: 0.8rem;
                background: rgb(205, 221, 245);
                opacity: 1;
              }
              .delete {
                cursor: pointer;
                width: 0.8rem;
                height: 0.24rem;
                background: #2a77ff;
                opacity: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.12rem;
                color: #ffffff;
                position: absolute;
                bottom: 0;
                transform: translateY(100vh);
                transition: all 0.5s;
              }
            }
          }
          .button {
            margin-top: 0.2rem;
            display: flex;
            justify-content: flex-end;
            .Button {
              margin-right: 0.12rem;
            }
          }
        }
      }
      .right-right {
        // margin-left: 0.2rem;
        min-width: 2rem;
        .select-class {
          // width: 2rem;
          height: 0.8rem;
          background: #ffffff;
          opacity: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .el-select {
            height: 0.4rem;
            background: #ffffff;
            border: 0.01rem solid #e0e0e0;
            opacity: 1;
            border-radius: 0.04rem;
          }
        }
        .member {
          margin-top: 0.2rem;
          height: 6.4rem;
          background-color: #fff;
          .nav {
            // width: 2rem;
            height: 0.4rem;
            opacity: 1;
            display: flex;
            align-items: center;
            font-size: 0.14rem;
            font-weight: bold;
            justify-content: space-between;
            padding: 0.13rem 0.24rem 0.13rem 0.24rem;
            span:nth-of-type(1) {
              color: #666666;
            }
            span:nth-of-type(2) {
              color: #999999;
            }
          }
          .content {
            height: 5.95rem;
            // background-color: red;
            overflow-y: auto;
            overflow-x: hidden;
            .is-active {
              background-color: #f6f7f9;
            }
            .item {
              cursor: pointer;
              // width: 2rem;
              height: 0.6rem;
              // background: #ffffff;
              display: flex;
              align-items: center;
              position: relative;
              border-bottom: 0.01rem solid #edeff3;
              &:hover {
                background-color: #f6f7f9;
                // border-left: 0.1rem solid #5592fe;
              }
              .item-active {
                position: absolute;
                left: 0;
                width: 0.1rem;
                height: 0.6rem;
                background: #5592fe;
              }
              .header {
                width: 0.32rem;
                height: 0.32rem;
                margin-left: 0.24rem;
              }
              .finish {
                width: 0.18rem;
                height: 0.18rem;
                background: #33d182;
                border-radius: 50%;
                opacity: 1;
                position: absolute;
                right: 0.2rem;
                bottom: 0.13rem;
              }
              .person {
                margin-left: 0.12rem;
                .name {
                  font-size: 0.14rem;
                  color: #666666;
                }
                .num {
                  font-size: 0.14rem;
                  color: #999999;
                }
              }
            }
          }
        }
      }
    }
  }
  .evaluation-board {
    margin-top: 0.4rem;
    // width: 1052px;
    padding: 0.31rem 0.4rem 0.31rem 0.4rem;
    height: 100%;
    // background: #8a2fe6;
    background: #fbfafc;
    opacity: 1;
    .right-top-text {
      display: flex;
      // background-color: red;
      span:nth-of-type(1) {
        font-size: 0.18rem;
        font-weight: bold;
        color: #666666;
      }
    }
    .comment {
      margin-top: 0.4rem;
      // width: 74%;
      // height: 100%;
      // background: #ffffff;
      opacity: 1;
      .nav {
        // width: 7.52rem;
        height: 0.6rem;
        background: #f6f6f8;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.2rem;
        span {
          font-size: 0.16rem;
          font-weight: bold;
          color: #666666;
          opacity: 1;
        }
        a {
          font-size: 0.16rem;
          color: #999999;
          text-decoration: none;
          opacity: 1;
        }
      }
      .content {
        // width: 7.52rem;
        height: 1.84rem;
        background: #ffffff;
        opacity: 1;
        padding: 0.3rem 0.4rem 0.3rem 0.4rem;
        overflow-y: hidden;
        overflow-x: auto;
        textarea {
          width: 100% !important;
          height: 100% !important;
          font-size: 0.14rem;
          line-height: 0.24rem;
          color: #666666;
          border: none;
          resize: none;
          overflow-y: auto;
        }
      }
      .button {
        margin-top: 0.2rem;
        display: flex;
        justify-content: flex-end;
        .Button {
          margin-right: 0.12rem;
        }
      }
    }
  }
}
::v-deep .el-select .el-input__inner {
  cursor: pointer;
  width: 1.68rem;
  height: 0.4rem;
  background: #ffffff;
  border: 0.01rem solid #e0e0e0;
  opacity: 1;
  border-radius: 0.04rem;
}
</style>