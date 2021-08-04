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
        <el-tabs
          v-model="activeName"
          type="border-card"
          @tab-click="handleClick"
        >
          <el-tab-pane label="天梯赛任务"></el-tab-pane>
          <el-tab-pane label="作业"></el-tab-pane>
          <el-tab-pane label="随堂练习"></el-tab-pane>
        </el-tabs>
        <div v-if="tabIndex == 0">士大夫</div>
        <div v-if="tabIndex == 1">
          <div class="course-outline">
            <el-collapse accordion>
              <el-collapse-item
                :name="index"
                v-for="(item, index) in 15"
                :key="index"
              >
                <template slot="title">
                  <div class="title">第一章：Python</div>
                  <div class="dot">共100份</div>
                </template>

                <div
                  class="outline-item"
                  v-for="(item1, index1) in item"
                  :key="index1"
                >
                  <div
                    class="tip"
                    :class="[
                      index1 == 0 ? 'tip1' : '',
                      index1 == 1 ? 'tip2' : '',
                    ]"
                  ></div>
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
        <div class="right-left">
          <div class="score">
            <div class="score-left">
              <span>得分</span>
              <div></div>
              <span>此作业为补交作业</span>
              <span>逾期：12天3小时64分</span>
            </div>

            <div class="score-right">
              <span>89.65</span>
              <span>分</span>
            </div>
          </div>
          <div class="icon-content"></div>
          <div class="comment"></div>
        </div>
        <div class="right-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Dot from "@/components/dot/Dot.vue";
export default {
  components: {
    Dot,
  },
  data() {
    return {
      activeName: "1",
      tabIndex: "1",
    };
  },
  computed: {},

  mounted() {},

  methods: {
    handleClick(tab, event) {
      // console.log(tab.index);
      this.tabIndex = tab.index;
      // this.$emit('tabsIndex',tab.index)
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
    height: 1000px;
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
    .right-left {
      .score {
        width: 100%;
        height: 80px;
        background: #ffffff;
        opacity: 1;
        display: flex;
        align-items: center;
        padding: 20px;
        margin-top: 32px;
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
          > div {
            margin-left: 21px;
            width: 12px;
            height: 12px;
            background: #ffbc13;
            border-radius: 50%;
            opacity: 1;
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
      .icon-content {
      }
      .comment {
      }
    }
    .right-right {
    }
  }
}
</style>