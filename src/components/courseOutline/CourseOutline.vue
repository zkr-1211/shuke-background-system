<!--  -->
<template>
  <div class="body">
    <div
      class="course-outline"
      :class="ChapterIssue || isUploadResource ? '' : 'course-outline-h'"
    >
      <el-collapse v-model="activeName" accordion @change="changeCollapse">
        <el-collapse-item :name="index" v-for="(item, index) in 5" :key="index">
          <template slot="title">
            <div class="title">第一章：Python</div>
            <div class="dot">
              <Dot />
            </div>
          </template>

          <div
            class="outline-item"
            v-for="(item1, index1) in item"
            :key="index1"
          >
            <div v-if="ChapterIssue || isUploadResource" class="dot">
              <Dot />
            </div>
            <span class="index">0{{ index1 + 1 }}:</span>
            <span class="content">第一节：什么是web程序应用</span>
            <template v-if="!isEdit && ChapterIssue">
              <div class="lock" v-if="true">
                <img src="@/assets/image/course/ic_locking_on.svg" alt="" />
              </div>
              <div class="look" v-if="true">
                <img src="@/assets/image/course/iv_visual_off.svg" alt="" />
              </div>
            </template>
            <!-- 编辑状态 -->
            <template v-if="isEdit && ChapterIssue">
              <div class="lock">
                <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
              </div>
              <div class="look">
                <img src="@/assets/image/course/ic_visual_on.svg" alt="" />
              </div>
            </template>
          </div>
          <div class="add" v-if="isUploadResource">
            <div class="img">
              <img src="@/assets/image/course/ic_visual_on.svg" alt="" />
            </div>
            <div class="add-item">添加小节</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import Dot from "@/components/dot/Dot.vue";
export default {
  components: {
    Dot,
  },
  props: {
    //是否是章节发布管理
    ChapterIssue: {
      type: Boolean,
      default: false,
    },
    //是否是上传资源大纲
    isUploadResource: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeName: 0,
      isEdit: false,
    };
  },
  computed: {},

  mounted() {},

  methods: {
    changeCollapse(e) {
      console.log("e", e);
    },
  },
};
</script>
<style lang='scss' scoped>
// ::v-deep .el-icon-arrow-right:before {
//   background-image: url(../../assets/image/course/right.svg);
//   background-repeat: no-repeat;
//   background-size: 0.28rem;
//   position: relative;
//   right: 5rem;
//   bottom: 0.03rem;
//   content: "\e6e";
//   border: none;
// }
// ::v-deep .el-collapse-item__arrow.is-active {
//   bottom: 0.03rem;
//   -webkit-transform: rotate(0);
//   transform: rotate(0);
//   background-image: url(../../assets/image/course/bottom.svg);
//   background-repeat: no-repeat;
//   background-size: 0.28rem;
//   position: relative;
//   right: 5rem;
//   content: "\e6e";
// }
::v-deep .el-collapse-item__wrap {
  will-change: height;
  background-color: #fff;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: none;
}
.el-collapse-item {
  overflow: hidden;
  transition: all 0s;

  .dot {
    position: absolute;
    right: 0.2rem;
    top: 0.15rem;
    // background-color: rgba(151, 3, 250, 1);
  }
}
.course-outline-h {
  height: 4.2rem;
}
.course-outline {
  width: 100%;
  // height: 4.2rem;
  overflow-x: hidden;
  margin: 0 auto;

  .outline-item {
    // width: 5.78rem;
    background: #ffffff;
    padding: 0.3rem 0.3rem 0rem 0.3rem;
    font-size: 0.16rem;
    // line-height: 0.27rem;
    color: #666666;
    display: flex;
    // align-items: center;
    position: relative;
    .dot {
      position: absolute;
      right: 0.2rem;
      top: 0.32rem;
      // background-color: rgba(151, 3, 250, 1);
    }
    .lock {
      position: absolute;
      right: 0.5rem;
      top: 0.27rem;
      img {
        width: 0.34rem;
        height: 0.34rem;
        background: #ffffff;
      }
    }
    .look {
      position: absolute;
      right: 1rem;
      top: 0.27rem;
      img {
        width: 0.34rem;
        height: 0.34rem;
        background: #ffffff;
      }
    }
    .index {
      font-size: 0.16rem;
      color: #2065e0;
    }
    .content {
      margin-left: 0.05rem;
    }
  }
  .add {
    cursor: pointer;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      display: flex;
      width: 30px;
      height: 30px;
    }
    .add-item {
      margin-left: 8px;
      font-size: 20px;
      line-height: 34px;
      color: #666666;
      opacity: 1;
    }
  }
}
::v-deep .el-collapse-item__header {
  display: flex;
  align-items: center;
  line-height: 0.6rem;
  cursor: pointer;
  transition: border-bottom-color 0.3s;
  outline: 0;
  width: 100%;
  height: 0.6rem;
  background: #f6f6f8;
  font-size: 0.2rem;
  color: #333333;
  padding-left: 0.65rem;
  border: none;
  padding-right: 0.3rem;
  position: relative;
}
::v-deep .el-icon-arrow-right:before {
  background-image: url(../../assets/image/course/right.svg);
  background-repeat: no-repeat;
  background-size: 0.28rem;
  position: absolute;
  left: 15px;
  bottom: 24px;
  content: "\e6e";
  border: none;
}
::v-deep .el-collapse-item__arrow.is-active {
  // bottom: 0.03rem;
  position: absolute;
  left: 0;
  top: 60px;
  -webkit-transform: none;
  transform: none;
  background-repeat: no-repeat;
  background-size: 0.28rem;
  content: "\e6e";
}
::v-deep .el-collapse-item__arrow.is-active:before {
  background-image: url(../../assets/image/course/bottom.svg) !important;
}
</style>