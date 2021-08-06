<!--  -->
<template>
  <div class="body">
    <div class="course-content">
      <div class="course-item" v-for="(item, index) in 25" :key="index">
        <div class="button">
          <Button name="下载" v-if="false" />
          <Button name="存至网盘并下载" v-else />
        </div>
        <div class="dot3">
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

        <div class="img" @click="toDetail()">
          <img src="@/assets/image/home/course_img1.svg" alt="" />
        </div>
        <div class="checkbox">
          <div class="name">2020.0101.11:11-229</div>
          <div v-if="isCheckBox">
            <el-checkbox v-model="checked"></el-checkbox>
          </div>
        </div>
        <div class="create">录课班级：电信教学团队</div>
        <div class="bottom-message">
          <div class="classnum">录制时间：2019、10、15 19：45</div>
          <!-- <div class="num">学生数：1000</div> -->
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
import Button from "@/components/button/Button.vue";
import Dialog from "@/components/dialog/Dialog.vue";
export default {
  components: {
    Button,
    Dot,
    Dialog,
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

  methods: {
    toDetail() {
      this.$router.push("course/courseDetail");
    },
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-dialog {
  // line-height: 0rem !important;
}
::v-deep .el-dialog__title {
  font-size: 0.2rem;
  font-weight: bold;
  line-height: 0rem;
  color: #2a77ff;
  margin-left: 0rem;
}
h2 {
  position: absolute;
  top: 0.48rem;
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
  margin-top: 0rem;
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
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  .course-item {
    width: 2.91rem;
    height: 3.73rem;
    margin-top: 0.3rem;
    margin-right: 0.29rem;
    background: #ffffff;
    box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
    position: relative;
    .button {
      position: absolute;
      bottom: 0.2rem;
      left: 0.15rem;
    }
    .dot3 {
      position: absolute;
      right: 0.12rem;
      bottom: 0.25rem;
    }
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
      font-size: 0.2rem;
      font-weight: bold;
      line-height: 0.34rem;
      color: #333333;
      margin: 0.15rem 0.15rem 0.2rem 0.15rem;
    }
    .create {
      font-size: 0.16rem;
      font-weight: 400;
      line-height: 0.27rem;
      color: #666666;
      margin: 0.15rem 0.15rem 0.1rem 0.15rem;
    }
    .bottom-message {
      font-size: 0.12rem;
      line-height: 0.18rem;
      color: #999999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.05rem 0.15rem 0.15rem 0.15rem;
      .num {
        margin-right: 0.35rem;
      }
    }
  }
}
</style>