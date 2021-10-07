<!--  -->
<template>
  <div class="body">
    <div>
      <div class="course-content">
        <div class="course-item" v-for="(item, index) in problemSetList" :key="index">
           <div class="checkbox">
          <el-tooltip
            class="item"
            effect="dark"
            content="UI设计1班:第一次作业第一次作业"
            placement="top"
          >
            <a href="/course/classdetail"
              ><div class="name">
              {{item.name}}
              </div></a
            >
          </el-tooltip>
          <div v-if="isCheckBox" class="el-checkbox">
            <CheckBox v-model="item.select" @IsCheck="IsCheck"/>
          </div>
        </div>
          <div class="create">创建者：{{item.teacher}}</div>
          <div class="bottom-message">
            <div class="classnum">班级:{{item.classNum}}</div>
            <div class="dot-bottom">
              <div class="num">最后编辑时间：{{item.time}}</div>
              <div class="dot" v-if="isCheckBox"></div>
              <el-dropdown trigger="click" placement="bottom-end" v-else>
                <span class="el-dropdown-link">
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
      </div>
    </div>
    <Dialog
      :editDV="editDV"
      :deleteDV="deleteDV"
      @Cancle="(editDV = false), (deleteDV = false)"
      @editHandleClose="editDV = false"
      @deleteHandleClose="deleteDV = false"
    />
  </div>
</template>

<script>
import Dot from "@/components/dot/Dot.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import CheckBox from "@/components/checkBox/CheckBox.vue";
export default {
  components: {
    Dot,
    Dialog,
    CheckBox
  },
  props: {
    problemSetList: {
      type: Array,
      default: [],
    },
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

  methods: {
    IsCheck() {
      let selectIdList = []
      this.problemSetList.forEach(item=>{
        if(item.select === true) {
          selectIdList.push(item.id)
        }
      })
      this.$emit('problemSet',selectIdList)
    }
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-dialog {
  // height: 3rem;
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
  // padding-right: 1.32rem;
  height: 100%;
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
        top: 0.08rem;
        font-size: 0.2rem;
      }
    }
    .name {
      width: 90%;
      border-left: 0.07rem solid #2a77ff;
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