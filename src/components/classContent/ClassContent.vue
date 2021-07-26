<!--  -->
<template>
  <div class="body">
    <div>
      <div class="course-content">
        <div class="course-item" v-for="(item, index) in 25" :key="index">
          <div class="checkbox">
            <div class="name">UI设计1班</div>
            <div v-if="isCheckBox">
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
          </div>
          <div class="create">创建者：张老师</div>
          <div class="bottom-message">
            <div class="classnum">班级：1000</div>
            <div class="dot-bottom">
              <div class="num">所属课程：ui设计入门课程</div>
              <div class="dot" v-if="isCheckBox"></div>
              <el-dropdown trigger="click" placement="bottom-end" v-else>
                <span class="el-dropdown-link">
                  <Dot />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <div @click="dialogVisible1 = true">
                    <el-dropdown-item>重命名</el-dropdown-item>
                  </div>
                  <div @click="dialogVisible = true">
                    <el-dropdown-item>删除</el-dropdown-item>
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除课程 -->
    <el-dialog
      title="UI设计教程"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>删除</h2>
      <span class="delete-text"
        >您确认删除本班级么？该班级将移入回收站，30天内可前往恢复或清理。</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="dialogVisible = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="dialogVisible = false"
          >确认删除</el-button
        >
      </span>
    </el-dialog>
    <!-- 重命名课程 -->
    <el-dialog
      title=""
      :visible.sync="dialogVisible1"
      width="30%"
      :show-close="false"
      top="40vh"
    >
      <h2>修改班级名称</h2>
      <input class="course-input" type="text" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="dialogVisible1 = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="dialogVisible1 = false"
          >确 认</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Dot from "@/components/dot/Dot.vue";
export default {
  components: {
    Dot,
  },
  props: {
    isCheckBox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
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
  // height: 300px;
}
::v-deep .el-dialog__title {
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  color: #2a77ff;
  margin-left: 43px;
}
h2 {
  position: absolute;
  top: 25.8px;
  color: #000000;
  font-size: 20px;
}
.course-input {
  font-size: 20px;
  color: #666666;
  padding: 10px 0px 10px 0px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0 !important;
  border: none;
}
.cancel-button {
  border: none;
  background: #fff !important;
  box-shadow: 0 !important;
  font-size: 14px;
  font-weight: bold;
  color: #666666;
  margin-right: 15px;
}
.el-button {
  margin-top: 40px;
  background: #2a77ff;
  // box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.2);
  &:hover {
    background: #5592fe;
  }
  &:active {
    background: #2065e0;
  }
}
.delete-text {
  font-size: 14px;
  line-height: 2px;
  color: #666666;
}
.course-content {
  margin-top: -15px;
  // padding-right: 132px;
  height: 100%;
  width: 100%;
  // width: 90%;
  // min-height: 1800px;
  overflow: auto;
  // background-color: red;
  display: flex;
  // align-items: center;
  // justify-content: space-between;
  flex-wrap: wrap;
  // padding-right: 32px;
  .course-item {
    width: 291px;
    height: 180px;
    margin-top: 30px;
    // margin-left: 3px;
    margin-right: 29.5px;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
    // margin-left: 32px;
    border-radius: 8px;
    .img {
      width: 291px;
      height: 168px;
      img {
        width: 291px;
        height: 168px;
        background: rgba(0, 0, 0, 0);

        border-radius: 8px;
      }
    }
    .checkbox {
      position: relative;
      .el-checkbox {
        position: absolute;
        right: 20px;
        top: 5px;
        font-size: 20px;
      }
    }
    .name {
      width: 100%;
      border-left: 7px solid #2a77ff;
      font-size: 20px;
      font-weight: bold;
      line-height: 34px;
      color: #333333;
      padding-left: 10px;
      margin: 20px 15px 20px 0px;
    }
    .create {
      font-size: 16px;
      line-height: 27px;
      color: #666666;
      margin: 15px 15px 10px 20px;
    }
    .bottom-message {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #999999;
      //   display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 15px 15px 20px;
      .classnum {
        margin-top: 15px;
        font-size: 16px;
        color: #666666;
        opacity: 0.8;
      }
      .dot-bottom {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .num {
          font-size: 12px;
          color: #999999;
          margin-right: 35px;
        }
      }
    }
  }
}
</style>