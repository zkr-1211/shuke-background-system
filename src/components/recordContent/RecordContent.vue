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
              <div @click="dialogVisible1 = true">
                <el-dropdown-item>重命名</el-dropdown-item>
              </div>
              <div @click="dialogVisible = true">
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
        >您确认删除课程么？该课程将移入回收站，30天内可前往恢复或清理。</span
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
      <h2>修改课程名称</h2>
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
import Button from "@/components/button/Button.vue";
export default {
  components: {
    Button,
    Dot
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

  methods: {
    toDetail() {
      this.$router.push("course/courseDetail");
    },
  },
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
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  .course-item {
    width: 291px;
    height: 373px;
    margin-top: 30px;
    margin-right: 29px;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
    position: relative;
    .button {
      position: absolute;
      bottom: 20px;
      left: 15px;
    }
    .dot3 {
      position: absolute;
      right: 12px;
      bottom: 25px;
    }

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
      font-size: 20px;
      font-weight: bold;
      line-height: 34px;
      color: #333333;
      margin: 15px 15px 20px 15px;
    }
    .create {
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      color: #666666;
      margin: 15px 15px 10px 15px;
    }
    .bottom-message {
      font-size: 12px;
      line-height: 18px;
      color: #999999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 15px 15px 15px;

      .num {
        margin-right: 35px;
      }
    }
  }
}
</style>