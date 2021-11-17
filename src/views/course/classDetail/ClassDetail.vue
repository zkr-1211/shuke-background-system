<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
        <el-breadcrumb-item>班级详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  -->
    <div class="top">
      <el-row :gutter="32" class="el-row">
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="item-1">
            <div class="class-name">UI设计一班</div>
            <div class="course-name">所属课程：UI设计入门课程</div>
            <div class="message">
              <div class="time">创建日期：2020.11.12</div>
              <div class="person">班级管理员:蔡裕兰</div>
            </div>
            <div class="button">
              <Button name="结课" @ClickButton="ClickButton()" />
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="3" :xl="3">
          <div class="item-2">
            <router-link to="/course/chapterissue">
              <div class="content">
                <div class="img">
                  <img
                    src="@/assets/image/course/icon_studyreport.svg"
                    alt=""
                  />
                </div>
                <div class="text">章节发放管理</div>
              </div></router-link
            >
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
          <div class="item-3">
            <img src="@/assets/image/home/course_img2.svg" alt="" />
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="item-4">
            <div class="content1 content">
              <div class="img">
                <img src="@/assets/image/course/icon_grouping.svg" alt="" />
              </div>
              <div class="text">分组情况</div>
            </div>
            <div class="content2 content">
              <div class="img">
                <img src="@/assets/image/course/icon_studyreport.svg" alt="" />
              </div>
              <div class="text">生成学习报表</div>
            </div>
            <div class="content3 content">
              <div class="img">
                <img src="@/assets/image/course/icon_classreport.svg" alt="" />
              </div>
              <div class="text">班级学习报告</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="bottom">
      <!--  -->
      <el-row :gutter="32" class="el-row">
        <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="16">
          <div class="left-content">
            <!--  -->
            <div class="chart">
              <HeaderTitle name="课程学习成绩情况" />
              <div>
                <LearnScoreChart ref="myChart" />
              </div>
            </div>

            <div class="data">
              <el-row :gutter="32" class="el-row">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="student-report">
                    <HeaderTitle name="学生成绩排名" />
                    <div class="content">
                      <div class="item" v-for="(item, index) in 5" :key="index">
                        <div class="left">
                          <div
                            class="num"
                            :class="[
                              index == 0 ? 'num-color1' : '',
                              index == 1 ? 'num-color2' : '',
                              index == 2 ? 'num-color3' : '',
                            ]"
                          >
                            {{ index + 1 }}
                          </div>
                          <div class="header"><img src="" alt="" /></div>
                          <div class="name">张克榕</div>
                        </div>
                        <div class="avg-score">平均分：70分</div>
                        <div class="rank">进步2名</div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="work-data">
                    <HeaderTitle name="作业数据" />
                    <a href="/course/work">
                      <div class="button"><Button name="查看作业" /></div>
                    </a>
                    <div>
                      <WorkDataChart ref="myChart1" />
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="9" :xl="8">
          <!--  -->
          <div class="right-content">
            <HeaderTitle name="班级成员" />
            <div class="total">共100人</div>
            <div class="add" @click="addDV = true">
              <img src="@/assets/image/course/ic_class_invitation.svg" alt="" />
            </div>
            <div class="nav-title">
              <div class="people">成员</div>
              <div class="num-text">学号</div>
              <div class="process">当前进度</div>
            </div>
            <div class="content">
              <div
                class="item"
                v-for="(item, index) in 30"
                :key="index"
                :class="index % 2 == 1 ? 'item-background' : ''"
              >
                <div class="left-message">
                  <div class="header"></div>
                  <div class="name">张克榕</div>
                </div>
                <div class="num">182718144</div>
                <div class="process-num">1845545655</div>
                 <el-dropdown trigger="click" placement="bottom-end" class="dot3" >
                <span class="el-dropdown-link" @click.stop>
                  <Dot/>
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
        </el-col>
      </el-row>
    </div>
    <!-- 添加成员 -->
    <el-dialog
      title=""
      :visible.sync="addDV"
      width="30%"
      :show-close="false"
      top="20vh"
    >
      <h2>添加成员</h2>
      <Tabs class="tabs" :tabList="tabList" @tabsIndex="tabsIndex" />
      <div class="contentDv">
        <div v-if="tabIndex == 0">
          <div class="jiaowu">
            <div class="school">
              <el-form ref="form" :model="form">
                <el-form-item label="学院名称">
                  <el-select v-model="form.region" placeholder="请选择学院">
                    <el-option
                      label="人工智能学院"
                      value="shanghai"
                    ></el-option>
                    <el-option label="商学院" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="专业">
                  <el-select v-model="form.region" placeholder="请选择专业">
                    <el-option label="网络工程" value="shanghai"></el-option>
                    <el-option
                      label="计算机科学与技术"
                      value="beijing"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="入学年份">
                  <el-select v-model="form.region" placeholder="请选择入学年份">
                    <el-option label="2020" value="shanghai"></el-option>
                    <el-option label="2021" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="班级">
                  <el-select v-model="form.region" placeholder="请选择班级">
                    <el-option label="一班" value="shanghai"></el-option>
                    <el-option label="二班" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="姓名">
                  <el-select v-model="form.region" placeholder="请选择姓名">
                    <el-option label="张可溶" value="shanghai"></el-option>
                    <el-option label="张卡" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="dialog-footer">
            <el-button class="cancel-button" @click="addDV = false"
              >取 消</el-button
            >
            <el-button type="primary" @click="isCreate()">添 加</el-button>
          </div>
        </div>
        <div v-else-if="tabIndex == 1">
          <div class="biaoge">
            <div class="xiazai">
              <div class="text">下载花名册表格模板</div>
              <div class="biaoge-content">
                <div class="icon">
                  <img
                    src="@/assets/image/course/ic_folder.svg"
                    alt=""
                  />
                </div>
                <div class="text-title">空白花名册模板.execl</div>
                <div class="img">
                  <img
                    src="@/assets/image/course/ic_popup_download.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="xiazai">
              <div class="text">上传花名册表格模板</div>
              <div class="biaoge-content">
                <div class="icon">
                  <img
                    src="@/assets/image/course/ic_folder.svg"
                    alt=""
                  />
                </div>
                <div class="text-title">空白花名册模板.execl</div>
                <div class="img">
                  <img
                    src="@/assets/image/course/ic_popup_upload.svg"
                    alt=""
                  />
                </div>
                <div class="span">重新上传</div>
              </div>
            </div>
          </div>
          <div class="dialog-footer">
            <el-button class="cancel-button" @click="addDV = false"
              >取 消</el-button
            >
            <el-button type="primary" @click="isCreate()">导 入</el-button>
          </div>
        </div>
        <div v-else>
          <div class="yaoqingma">
            <div class="num">202075025452125</div>
          </div>
          <div class="dialog-footer">
            <el-button class="cancel-button" @click="addDV = false"
              >取 消</el-button
            >
            <el-button type="primary" @click="isCreate()">复 制</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import Dot from "@/components/Dot/Dot.vue";
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle.vue";
import LearnScoreChart from "@/components/LearnScoreChart/LearnScoreChart.vue";
import WorkDataChart from "@/components/WorkDataChart/WorkDataChart.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
export default {
  components: {
    Button,
    Dot,
    HeaderTitle,
    LearnScoreChart,
    WorkDataChart,
    Tabs,
  },
  data() {
    return {
      addDV: false,
      tabIndex: 0,
      tabList: [
        {
          title: "从教务中",
        },
        {
          title: "从表格中",
        },
        {
          title: "邀请码",
        },
      ],
      form: {
        region: "",
      },
      name: "张雪",
      xData: ["2020-02", "2020-03", "2020-04", "2020-05"],
      yData: [30, 132, 80, 134],
    };
  },
  computed: {},

  mounted() {
    this.$refs.myChart.LearnScoreChart();
    this.$refs.myChart1.WorkDataChartData();
  },

  methods: {
    ClickButton() {
      console.log("ClickButton");
    },
    tabsIndex(index) {
      this.tabIndex = index;
      //   console.log("index", index);
    },
  },
};
</script>
<style lang='scss' scoped>
.tabs {
  margin: 0.4rem 0.3rem 0.2rem 0.3rem;
}
.contentDv {
  width: 90%;
  margin: 0px auto;
  height: 3.85rem;
  .dialog-footer {
    text-align: right;
  }
  .jiaowu {
    height: 3.1rem;
    overflow: overlay;
  }
}
.yaoqingma {
  height: 3.1rem;
  // background-color: red;
  width: 100%;
  display: flex;
  align-items: center;
  .num {
    width: 4.86rem;
    height: 0.8rem;
    background: #f6f7f9;
    font-size: 0.4rem;
    font-weight: bold;
    line-height: 0.8rem;
    color: #666666;
    letter-spacing: 0.04rem;
    text-align: center;
  }
}
.biaoge {
  height: 3.1rem;
  width: 100%;
  overflow: overlay;
  overflow-y: hidden;
  .xiazai {
    margin-top: 0.2rem;
    .text {
      font-size: 0.16rem;
      color: #333333;
    }
    .biaoge-content {
      margin-top: 0.16rem;
      // width: 4.86rem;
      height: 0.8rem;
      background: #f6f7f9;
      opacity: 1;
      display: flex;
      align-items: center;
      padding-left: 0.3rem;
      position: relative;

      .icon {
        width: 0.3rem;
        height: 0.3rem;
        // background-color: rosybrown;
        cursor: pointer;

        img {
          width: 0.3rem;
          height: 0.3rem;
          cursor: pointer;
        }
      }
      .text-title {
        margin-left: 0.1rem;
        font-size: 0.16rem;
        color: #333333;
        font-weight: bold;
      }
      .span {
        position: absolute;
        right: 0.7rem;
      }
      .img {
        width: 0.3rem;
        height: 0.3rem;
        // background-color: rosybrown span
        position: absolute;
        right: 0.3rem;
        line-height: 0.33rem;
        font-size: 0.14rem;
        color: #666666;
        cursor: pointer;
        // background-color: rosybrown;
        display: flex;
        align-items: center;

        img {
          width: 0.3rem;
          height: 0.3rem;
          // background-color: rosybrown;
          cursor: pointer;
        }
      }
    }
  }
}
::v-deep .el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 0.16rem;
  color: #606266;
  // line-height: 0.16rem;
  padding: 0 0.2rem 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 1rem;
}
::v-deep .el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  // background-image: none;
  border-bottom: 0.01rem solid #e0e0e0 !important;
  border: none;
  // box-sizing: border-box;
  color: #666666;
  display: inline-block;
  font-size: 0.16rem;
  height: 0.3rem;
  line-height: 0.3rem;
  outline: 0;
  padding: 0.15rem 0.1rem;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
::v-deep .el-select .el-input__inner {
  cursor: pointer;
  padding-right: 1.2rem;
}
::v-deep .el-dialog__title {
  font-size: 0.2rem;
  font-weight: bold;
  line-height: 0.4rem;
  color: #2a77ff;
  margin-left: 0.43rem;
  display: flex;
  // align-items: center;
}
h2 {
  position: absolute;
  top: 0.3rem;
  color: #000000;
  font-size: 0.25rem;
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
  &:hover {
    background: #5592fe;
  }
  &:active {
    background: #2065e0;
  }
}
.body {
  .el-row .el-col {
    margin-top: 0.12rem;
  }
  .top {
    // margin-top: 0.2rem;
    // display: flex;
    .item-1 {
      border-radius: 0.08rem;
      position: relative;
      // width: 5.1rem;
      height: 1.8rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      display: flex;
      // align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-left: 0.3rem;
      .class-name {
        font-size: 0.2rem;
        font-weight: bold;
        color: #333333;
      }
      .course-name {
        margin-top: 0.3rem;
        font-size: 0.16rem;
        color: #666666;
      }
      .message {
        margin-top: 0.2rem;
        font-size: 0.12rem;
        color: #999999;
        display: flex;
        align-items: center;
        .time {
        }
        .person {
          margin-left: 0.2rem;
        }
      }
      .button {
        position: absolute;
        right: 0.3rem;
        top: 0.25rem;
      }
    }
    .item-2 {
      border-radius: 0.08rem;
      // margin-left: 0.32rem;
      // width: 1.88rem;
      height: 1.8rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        width: 1.24rem;
        height: 1.1rem;
        background: #e7e6e642;
        // box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.16);
        // opacity: 0.2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 0.05rem;
        .img {
          width: 0.5rem;
          height: 0.5rem;
          margin-bottom: 0.12rem;
          display: flex;
          align-items: center;
          img {
            width: 0.5rem;
            height: 0.5rem;
          }
        }
        .text {
          font-size: 0.14rem;
          font-weight: bold;
          color: #666666;
        }
      }
    }
    .item-3 {
      height: 1.8rem;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      border-radius: 0.08rem;
      overflow: hidden;
      cursor: pointer;
      img {
        height: 1.8rem;
        width: 100%;
        object-fit: cover;
      }
    }
    .item-4 {
      border-radius: 0.08rem;
      height: 1.8rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .content {
        width: 1.24rem;
        height: 1.1rem;
        background: #e7e6e642;
        // box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.16);
        // opacity: 0.2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 0.05rem;
        cursor: pointer;
        .img {
          width: 0.5rem;
          height: 0.5rem;
          display: flex;
          align-items: center;
          // background-color: firebrick;
          margin-bottom: 0.12rem;
          img {
            width: 0.5rem;
            height: 0.5rem;
          }
        }
        .text {
          font-size: 0.14rem;
          font-weight: bold;
          color: #666666;
        }
      }
    }
  }
  .bottom {
    margin-top: 0.2rem;
    // display: flex;
    .left-content {
      .chart {
        // width: 10.52rem;
        // height: 3.66rem;
        background: #ffffff;
        opacity: 1;
      }
      .data {
        margin-top: 0.2rem;
        // display: flex;
        // overflow: hidden;
        .student-report {
          // width: 5.1rem;
          // overflow: hidden;
          height: 3.26rem;
          background: #ffffff;
          opacity: 1;
          .content {
            padding: 0rem 0.6rem 0rem 0.3rem;
            height: 2.26rem;
            width: 100%;
            overflow-y: auto;
            // background-color: firebrick;
            .item {
              cursor: pointer;
              height: 0.6rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              font-size: 0.14rem;
              color: #666666;
              .left {
                width: 1.2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .num {
                  font-size: 0.24rem;
                  font-weight: bold;
                  color: #666666;
                  line-height: 0.24rem;
                }
                .num-color1 {
                  color: #ffbc13;
                }
                .num-color2 {
                  color: #5592fe;
                }
                .num-color3 {
                  color: #f96164;
                }
                .header {
                  width: 0.32rem;
                  height: 0.32rem;
                  background: #2a7ff2;
                  border-radius: 50%;
                  opacity: 1;
                  img {
                  }
                }
                .name {
                }
              }
              .avg-score {
              }
              .rank {
              }
            }
          }
        }
        .work-data {
          position: relative;
          // margin-left: 0.32rem;
          // width: 5.1rem;
          height: 3.26rem;
          background: #fff;
          opacity: 1;
          .button {
            position: absolute;
            right: 0.3rem;
            top: 0.3rem;
          }
        }
      }
    }
    .right-content {
      // margin-left: 0.32rem;
      min-width: 3.8rem;
      height: 7.24rem;
      background: #fff;
      position: relative;

      .total {
        font-size: 0.16rem;
        color: #999999;
        position: absolute;
        top: 0.28rem;
        left: 1.5rem;
      }
      .add {
        position: absolute;
        right: 0.3rem;
        top: 0.25rem;
        display: flex;
        align-items: center;
        img {
          width: 0.4rem;
          height: 0.4rem;
          cursor: pointer;
        }
      }
      .nav-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.14rem;
        font-weight: bold;
        color: #666666;
        // width: 4rem;
        height: 0.48rem;
        // background: #977b7b;
        padding-left: 0.2rem;
        // justify-content: space-between;
        .people {
          padding-left: 0.2rem;
          // margin-left: 1.6rem;
          // background-color: red;
        }
        .num-text {
          // margin-left: 1.1rem;
          // margin-right: 0.6rem;
          // background-color: coral;
        }
        .process {
          margin-right: 1.2rem;
          // margin-left: 1.2rem;
        }
      }
      .content {
        // display: flex;
        height: 5.8rem;
        overflow: overlay;
        // width: 100%;
        .item {
          // background-color: chartreuse;
          // width: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 0.4rem;
          position: relative;
          height: 0.6rem;
          font-size: 0.14rem;
          color: #666666;
          .left-message {
            display: flex;
            align-items: center;
            .header {
              width: 0.32rem;
              height: 0.32rem;
              background-color: forestgreen;
              border-radius: 50%;
            }
            .name {
              margin-left: 0.12rem;
            }
          }
          .num {
            margin-left: -0.12rem;
          }
          .process-num {
            margin-right: 0.9rem;
          }
          .dot3 {
            position: absolute;
            top: 0.17rem;
            right: 0.3rem;
          }
        }
        .item-background {
          background-color: #fafafa;
        }
      }
    }
  }
}
</style>