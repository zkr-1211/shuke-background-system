<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
        <el-breadcrumb-item>班级详情</el-breadcrumb-item>
        <el-breadcrumb-item>作业</el-breadcrumb-item>
        <el-breadcrumb-item>作业详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-bar">
          <HeaderTitle name="作业详情" />
          <span>共100人</span>
          <div class="button">
            <Button name="补交提醒" />
            <Button name="查看学生作业" class="button1" />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="bottom">
          <el-row :gutter="32" class="el-row">
            <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="6">
              <div class="left-content">
                <HeaderTitle name="提交情况" />
                <div class="total">共100人</div>
                <div class="add" @click="addDV = true">
                  <img v-if="true" src="@/assets/image/course/ic_sort_1.svg" alt="" />
                  <img v-else src="@/assets/image/course/ic_sort_2.svg" alt="" />
                </div>
                <div class="member-content">
                  <div class="nav-title">
                    <div class="people">成员</div>
                    <div class="num-text">提交情况</div>
                    <div class="process">得分</div>
                  </div>
                  <div class="content">
                    <div class="item" v-for="(item, index) in 30" :key="index" :class="index % 2 == 1 ? 'item-background' : ''">
                      <div class="left-message">
                        <div class="header"></div>
                        <div class="name">张克榕</div>
                      </div>
                      <div class="num">已提交</div>
                      <div class="process-num">90分</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="18">
              <div class="right-content">
                <el-row :gutter="32" class="el-row">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="right-top">
                      <!-- <el-row :gutter="0" class="el-row"> -->
                      <!-- <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="8"> -->
                      <div class="right-top-left">
                        <div class="time-start">
                          <span>发布时间:</span>
                          <el-date-picker v-model="startTime" type="date" placeholder="选择日期">
                          </el-date-picker>
                        </div>
                        <!-- </el-col> -->
                        <!-- <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="8"> -->
                        <div class="time-end">
                          <span>截止时间:</span>
                          <el-date-picker v-model="endTime" type="date" placeholder="选择日期">
                          </el-date-picker>
                        </div>
                      </div>

                      <!-- </el-col> -->
                      <!-- <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4"> -->
                      <div class="right-top-right">
                        <div class="people-num">
                          <div class="num">100/89</div>
                          <div class="text">提交人数</div>
                        </div>
                        <!-- </el-col> -->
                        <!-- <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4"> -->
                        <div class="people-num people-num1">
                          <div class="num">100/99</div>
                          <div class="text">批改情况</div>
                        </div>
                        <!-- </el-col> -->
                        <!-- </el-row> -->
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="right-bottom">
                      <div class="nav">
                        <div class="img">
                          <img src="@/assets/image/course/ic_class_invitation.svg" alt="" />
                        </div>
                        <div class="text">作业名称</div>
                        <div class="title">
                          UI设计入门任务——扁平化图标设计与制作
                        </div>
                      </div>
                      <div class="content">
                        <div class="type">
                          <span>作业类型:</span>
                          <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                        <div class="des">
                          <div class="span">作业描述:</div>
                          <div>
                            <textarea v-model="desc" name="" id="" cols="50" rows="3"></textarea>
                          </div>
                        </div>

                        <div class="select">
                          <span>试卷选择:</span>
                          <div class="item">
                            <div class="img">
                              <img src="@/assets/image/course/ic_class_invitation.svg" alt="" />
                            </div>
                            <div class="text">图标设计技巧</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle.vue";
import Dot from "@/components/Dot/Dot.vue";
export default {
  components: {
    Button,
    HeaderTitle,
    Dot,
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      desc: "大师傅士大夫士大撒地方撒旦夫",
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.body {
  overflow: hidden;
}
.top-bar {
  margin-top: 0.2rem;
  // width: 15.84rem;
  height: 0.8rem;
  background: #ffffff;
  box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  span {
    margin-left: 0.2rem;
    font-size: 0.16rem;
    color: #999999;
  }
  .title {
    width: 100%;
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
  .button {
    position: absolute;
    right: 0.3rem;
    display: flex;
    margin-right: 0.3rem;
    .button1 {
      margin-left: 0.47rem;
    }
  }
}
.bottom {
  margin-top: 0.32rem;
  // display: flex;
  .left-content {
    // margin-left: 0.32rem;
    // max-width: 3.68rem;
    margin-bottom: 0.32rem;
    height: 7.24rem;
    background: #fff;
    position: relative;
    overflow-x: auto;
    overflow: hidden;
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
        width: 0.3rem;
        height: 0.3rem;
        cursor: pointer;
      }
    }
    .member-content {
      // background-color: red;

      .nav-title {
        // width: 85%;
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
          // width: 1.6rem;
          // background-color: red;
        }
        .num-text {
          margin-left: 0.6rem;
          // width: 1.3rem;
          // background-color: coral;
        }
        .process {
          margin-right: 0.7rem;
        }
      }
      .content {
        height: 5.8rem;
        // background-color: red !important;
        // min-width: 3.7rem;

        overflow: auto;
        .item {
          // width: 86%;
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
            // margin-right: 0.7rem;

            margin-left: -0.1rem;
          }
          .process-num {
            margin-right: 0.6rem;
            // margin-right: 0.7rem;
            // margin-left: 0.1rem;
          }
        }
        .item-background {
          background-color: #fafafa;
        }
      }
    }
  }
  .right-content {
    // margin-left: 0.32rem;
    // width: 100%;
    .right-top {
      padding-left: 0.3rem;
      // width: 11.24rem;
      //  min-width: 5rem;
      height: 1.2rem;
      background: #ffffff;
      display: flex;
      // line-height: 1.2rem;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      overflow: auto;
      .right-top-left {
        display: flex;
        align-items: center;
        .time-start {
          display: flex;
          align-items: center;
          // width: 100%;
          // background-color: red;
          span {
            //  width: 100%;
            margin-right: 0.3rem;
            font-size: 0.16rem;
            font-weight: bold;
            color: #999999;
          }
        }
        .time-end {
          // width: 100%;
          display: flex;
          align-items: center;
          margin-left: 0.4rem;
          span {
            margin-right: 0.3rem;
            font-size: 0.16rem;
            font-weight: bold;
            color: #999999;
          }
        }
      }
      .right-top-right {
        display: flex;
        align-items: center;
        .people-num {
          margin-right: 1rem;
          text-align: center;
          line-height: 0.1rem;
          .num {
            font-size: 0.2rem;
            font-weight: bold;
            line-height: 0.34rem;
            color: #2a77ff;
          }
          .text {
            font-size: 0.14rem;
            font-weight: bold;
            color: #666666;
            margin-left: 0.03rem;
          }
        }
        .people-num1 {
          margin-right: 1.03rem;
          text-align: center;
        }
      }
    }
    .right-bottom {
      margin-top: 0.32rem;
      height: 4.28rem;
      background: #ffffff;
      .nav {
        height: 0.8rem;
        background: #edeff3;
        font-size: 0.2rem;
        font-weight: bold;
        color: #333333;
        display: flex;
        align-items: center;
        .img {
          width: 0.8rem;
          height: 0.8rem;
          background: #2a77ff;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 0.22rem;
            height: 0.2rem;
            background: #ffffff;
            opacity: 1;
          }
        }
        .text {
          margin-left: 0.4rem;
        }
        .title {
          margin-left: 0.44rem;
        }
      }
      .content {
        margin: 0.1rem 0rem 0rem 1.76rem;
        width: 7rem;
        height: 3rem;
        .type {
          span {
            margin-right: 0.3rem;
            font-size: 0.15rem;
          }
        }
        .des {
          margin-top: 0.3rem;
          width: 8.86rem;
          height: 1.02rem;
          // background: #5f3c3c;
          // border: 0.01rem solid #e0e0e0;
          border-radius: 0.04rem;
          display: flex;
          .span {
            // background-color: red;
            margin-right: 0.3rem;
            // width: 10rem;
            // font-size: 0.15rem !important;
            font-size: 0.15rem;
          }
          textarea {
            width: 82%;
            height: 0.82rem;
            background: #ffffff;
            border: 0.01rem solid #e0e0e0;
            border-radius: 0.04rem;
            padding: 0.16rem;
            font-size: 0.16rem;
            color: #999999;
            resize: none;
          }
        }
        .select {
          margin-top: 0.35rem;
          display: flex;
          span {
            font-size: 0.15rem;
            margin-right: 0.3rem;
          }
          .item {
            cursor: pointer;
            width: 1.54rem;
            height: 0.44rem;
            background: #f6f6f8;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            .img {
              display: flex;
              align-items: center;
              img {
                width: 0.2rem;
                height: 0.2rem;
                background-color: seagreen;
              }
            }
            .text {
              line-height: 0.44rem;
              font-size: 0.14rem;
              color: #666666;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
  }
}
::v-deep .el-select .el-input__inner {
  cursor: pointer;
  // padding: 0.1rem 0rem 0.1rem 0.3rem;
}
.el-select {
  width: 1.68rem;
}
</style>