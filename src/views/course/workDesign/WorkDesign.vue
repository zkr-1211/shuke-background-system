<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>作业</el-breadcrumb-item>
        <el-breadcrumb-item>作业设计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
        <TopBar name="作业设计" />
        <div class="right-bottom">
          <div class="nav">
            <div class="img">
              <img src="@/assets/image/course/ic_class_invitation.svg" alt="" />
            </div>
            <div class="text">作业名称：</div>
            <div class="title">UI设计入门任务——扁平化图标设计与制作</div>
              <el-dropdown trigger="click" placement="bottom-end" class="dot">
                <span class="el-dropdown-link">
                  <Dot />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <div>
                    <el-dropdown-item>编辑</el-dropdown-item>
                  </div>
                  <div>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
          </div>
          <div class="content">
            <div class="type">
              <span>作业类型:</span>
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
            <div class="des">
              <div class="span">作业描述:</div>
              <div>
                <input type="text" name="" id="" />
              </div>
            </div>

            <div class="select">
              <span>试卷选择:</span>
              <div class="item">
                <div class="img">
                  <img
                    src="@/assets/image/course/ic_class_invitation.svg"
                    alt=""
                  />
                </div>
                <div class="text">添加内容</div>
              </div>
            </div>
            <div class="button">
              <Button name="保存" />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
        <DataTimeStartEnd name="起止时间设置" />
        <UseClass name="发布班级" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopBar from "@/components/topBar/TopBar";
import DataTimeStartEnd from "@/components/dataTimeStartEnd/DataTimeStartEnd";
import UseClass from "@/components/useClass/UseClass";
import Button from "@/components/button/Button";
import Dot from "@/components/dot/Dot";
export default {
  components: { TopBar, DataTimeStartEnd, UseClass, Button, Dot },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.right-bottom {
  margin-top: 0.32rem;
  // width: 11.24rem;
  height: 4.28rem;
  background: #ffffff;
  .nav {
    // width: 11.24rem;
    height: 0.8rem;
    background: #edeff3;
    font-size: 0.2rem;
    font-weight: bold;
    color: #333333;
    display: flex;
    align-items: center;
    position: relative;
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
    .dot {
      position: absolute;
      right: 0.2rem;
      top: 0.3rem;
    }
  }
  .content {
    margin: 0.1rem 0rem 0rem 1.76rem;
    width: 7rem;
    height: 3rem;
    .type {
      line-height: 0;
      span {
        margin-right: 0.3rem;
        font-size: 0.15rem;
      }
    }
    .des {
      //   margin-top: 0.3rem;
      width: 8.86rem;
      height: 1.02rem;
      line-height: 0;
      // background: #5f3c3c;
      // border: 0.01rem solid #e0e0e0;
      border-radius: 0.04rem;
      display: flex;
      align-items: center;
      .span {
        // background-color: red;
        margin-right: 0.3rem;
        margin-top: 0.12rem;
        // width: 10rem;
        // font-size: 0.15rem !important;
        font-size: 0.15rem;
      }
      input {
        // width: 200%;
        width: 3rem;
        height: 0.01rem;
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
      margin-top: 0.15rem;
      display: flex;
      span {
        margin-top: 0.12rem;
        font-size: 0.15rem;
        margin-right: 0.3rem;
      }
      .item {
        cursor: pointer;
        width: 1.54rem;
        height: 0.44rem;
        // background: #f6f6f8;
        border: 0.01rem solid #e0e0e0;
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
            // background-color: seagreen;
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
    .button {
      margin-top: 0.4rem;
    }
  }
}
</style>