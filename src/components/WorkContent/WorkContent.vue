<!--  -->
<template>
  <div class="body">
    <div>
      <div class="course-content">

        <div class="course-item" v-for="(item, index) in 25" :key="index">

           <div class="checkbox">
          <el-tooltip
            class="item"
            effect="dark"
            content="UI设计1班:第一次作业第一次作业"
            placement="top"
          >
            <router-link to="/course/workdetail"
              ><div class="name">
                UI设计一班：第一次作业UI设计一班：第一次作业
              </div></router-link
            >
          </el-tooltip>
          <div v-if="isCheckBox" class="el-checkbox">
            <CheckBox />
          </div>
        </div>
          <div class="create">创建者：张老师</div>
          <div class="bottom-message">
            <div class="classnum">任务类型：完成试卷</div>
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
    </div>
    <Dialog :editDV="editDV" :deleteDV="deleteDV" @Cancle="(editDV = false), (deleteDV = false)" @editHandleClose="editDV = false" @deleteHandleClose="deleteDV = false" />
  </div>
</template>

<script>
import Dot from "@/components/Dot/Dot";
import Dialog from "@/components/Dialog/Dialog.vue";
import CheckBox from "@/components/CheckBox/CheckBox.vue";
export default {
  components: {
    Dot,
    Dialog,
    CheckBox
  },
  props: {
    isCheckBox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editDV: false,
      deleteDV: false,
      checked: false,
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
::v-deep .el-dialog {
  // height: 3rem;
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
  top: 0.25rem;
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
.course-content {
  margin-top: -0.15rem;
  height: 100%;
  width: 100%;
  overflow: overlay;
  display: flex;
  flex-wrap: wrap;
  .course-item {
    width: 2.91rem;
    height: 1.8rem;
    margin-top: 0.3rem;
    // margin-left: 0.03rem;
    margin-right: 0.26rem;
    background: #ffffff;
    box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
    // margin-left: 0.32rem;
    border-radius: 0.08rem;
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
      width: 92%;
      border-left: 0.07rem solid #999999;
      font-size: 0.2rem;
      font-weight: bold;
      line-height: 0.34rem;
      color: #333333;
      padding-left: 0.1rem;
      margin: 0.2rem 0.15rem 0.2rem 0rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
</style>