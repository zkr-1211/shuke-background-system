<!--  -->
<template>
  <div class='body'>
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
    <div class="top-bar">
      <div class="title">
        <div class="name">作业详情 <span>共100人</span></div>
      </div>
      <div class="button">
        <Button name="补交提醒" />
        <Button name="查看学生作业" class="button1" />
      </div>
    </div>
    <div class="bottom">
      <div class="left-content">
        <HeaderTitle name="提交情况" />
        <div class="total">共100人</div>
        <div class="add" @click="addDV = true">
          <img src="@/assets/image/course/ic_class_invitation.svg" alt="" />
        </div>
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
      <div class="right-content">
        <div class="right-top">
          <div class="time-start"><span>发布时间:</span>
            <el-date-picker v-model="startTime" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="time-end"><span>截止时间:</span>
            <el-date-picker v-model="endTime" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="people-num">
            <div class="num">100/89</div>
            <div class="text">提交人数</div>
          </div>
          <div class="people-num people-num1">
            <div class="num">100/99</div>
            <div class="text">批改情况</div>
          </div>
        </div>
        <div class="right-bottom">
          <div class="nav">
            <div class="img"><img src="" alt=""></div>
            <div class="text">作业名称</div>
            <div class="title">UI设计入门任务——扁平化图标设计与制作</div>
          </div>
          <div class="content">
            <div class="type"><span>作业类型:</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="des">

              <div class="span">作业描述:</div>
              <div><textarea v-model="desc" name="" id="" cols="50" rows="3"></textarea></div>

            </div>

            <div class="select">
              <span>试卷选择:</span>
              <div class="item">
                <div class="img"><img src="" alt=""></div>
                <div class="text">图标设计技巧</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Button from "@/components/button/Button.vue";
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import Dot from "@/components/dot/Dot.vue";
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
      desc:"大师傅士大夫士大撒地方撒旦夫"
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.top-bar {
  margin-top: 20px;
  width: 1584px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  .title {
    width: 100%;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 34px;
    color: #666666;
    border-left: 8px solid #5592fe;
    .name {
      margin-left: 12px;
      span {
        margin-left: 20px;
        font-size: 16px;
        color: #999999;
        font-weight: 400;
      }
    }
  }
  .button {
    display: flex;
    margin-right: 30px;
    .button1 {
      margin-left: 47px;
    }
  }
}
.bottom {
  margin-top: 32px;
  display: flex;
  .left-content {
    //   margin-left: 32px;
    width: 428px;
    height: 724px;

    background: #fff;
    position: relative;
    .total {
      font-size: 16px;
      color: #999999;
      position: absolute;
      top: 28px;
      left: 150px;
    }
    .add {
      position: absolute;
      right: 30px;
      top: 25px;
      img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
    .nav-title {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: #666666;
      // width: 400px;
      height: 48px;
      // background: #977b7b;
      padding-left: 20px;
      // justify-content: space-between;
      .people {
        padding-left: 20px;
        // width: 160px;
        // background-color: red;
      }
      .num-text {
        margin-left: 115px;
        // width: 130px;
        // background-color: coral;
      }
      .process {
        margin-left: 70px;
      }
    }
    .content {
      height: 580px;
      overflow: auto;
      .item {
        display: flex;
        align-items: center;
        padding-left: 40px;
        position: relative;
        height: 60px;
        font-size: 14px;
        color: #666666;
        .left-message {
          display: flex;
          align-items: center;
          .header {
            width: 32px;
            height: 32px;
            background-color: forestgreen;
            border-radius: 50%;
          }
          .name {
            margin-left: 12px;
          }
        }
        .num {
          margin-left: 55px;
        }
        .process-num {
          margin-left: 87px;
        }
      }
      .item-background {
        background-color: #fafafa;
      }
    }
  }
  .right-content {
    margin-left: 32px;
    .right-top {
      padding: 30px;
      width: 1124px;
      height: 120px;
      background: #ffffff;

      display: flex;
      align-items: center;
      .time-start {
        span {
          margin-right: 30px;
          font-size: 16px;
          font-weight: bold;
          color: #999999;
        }
      }
      .time-end {
        margin-left: 40px;
        span {
          margin-right: 30px;
          font-size: 16px;
          font-weight: bold;
          color: #999999;
        }
      }
      .people-num {
        margin-left: 132px;
        text-align: center;
        .num {
          font-size: 20px;
          font-weight: bold;
          line-height: 34px;
          color: #2a77ff;
        }
        .text {
          font-size: 14px;
          font-weight: bold;
          color: #666666;
          margin-left: 3px;
        }
      }
      .people-num1 {
        margin-left: 103px;
        text-align: center;
      }
    }
    .right-bottom {
      margin-top: 32px;
      width: 1124px;
      height: 428px;
      background: #ffffff;

      .nav {
        width: 1124px;
        height: 80px;
        background: #edeff3;
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        display: flex;
        align-items: center;
        .img {
          width: 80px;
          height: 80px;
          background: #2a77ff;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 22px;
            height: 20px;
            background: #ffffff;
            opacity: 1;
          }
        }
        .text {
          margin-left: 40px;
        }
        .title {
          margin-left: 44px;
        }
      }
      .content {
        margin: 40px 0px 0px 176px;
        width: 700px;
        //   background-color: red;
        height: 300px;
        .type {
          span {
            margin-right: 30px;
          }
        }
        .des {
          margin-top: 50px;
          width: 883px;
          height: 102px;
          background: #ffffff;
          //   border: 1px solid #e0e0e0;
          border-radius: 4px;
          display: flex;
          .span {
            margin-right: 30px;
          }
          textarea {
            width: 763px;
            height: 82px;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            padding: 16px;
            font-size: 16px;
            color: #999999;
          }
        }
        .select {
          margin-top: 35px;
          display: flex;
          span {
            margin-right: 30px;
          }
          .item {
            cursor: pointer;
            width: 154px;
            height: 44px;
            background: #f6f6f8;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            .img {
              img {
                width: 20px;
                height: 20px;
                background-color: seagreen;
              }
            }
            .text {
              line-height: 44px;
              font-size: 14px;
              color: #666666;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
::v-deep .el-select .el-input__inner {
  cursor: pointer;
  // padding: 10px 0px 10px 30px;
}
.el-select{
  width: 168px;
}
</style>