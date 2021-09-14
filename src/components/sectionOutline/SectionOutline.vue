<!--  -->
<template>
  <div class="body">
    <div
      class="course-outline"
      :class="!ChapterIssue ? 'course-outline-h' : ''"
    >
      <el-collapse v-model="activeName" @change="changeCollapse">
        <el-collapse-item
          :name="index"
          v-for="(item, index) in content"
          :key="index"
        >
          <template slot="title">
            <div class="icon">
              <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
            </div>
            <div class="title">图标设计技巧.mp4</div>
            <div class="size">650.25M</div>
            <div class="dot">
              <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox> -->
              <el-checkbox-group
                v-model="item.isCheck"
                @change="handleCheckAllChange"
              >
               <el-checkbox></el-checkbox>
              </el-checkbox-group>
            </div>
            <template>
              <div class="lock1" @click.stop="lockClick(index)">
                <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
              </div>
              <div class="look1">
                <img src="@/assets/image/course/ic_visual_on.svg" alt="" />
              </div>
            </template>
          </template>

          <div
            class="outline-item"
            v-for="(item1, index1) in item"
            :key="index1"
          >
            <div v-if="ChapterIssue" class="dot">
              <!-- <Dot /> -->
            </div>
            <!-- <span class="index">0{{index1+1}}:</span> -->
            <span class="content">函数相关题目题集</span>
            <span class="num">题目数:1000</span>
            <template v-if="!isEdit">
              <div class="lock" v-if="true">
                <img src="@/assets/image/course/ic_locking_on.svg" alt="" />
              </div>
              <div class="look" v-if="true">
                <img src="@/assets/image/course/iv_visual_off.svg" alt="" />
              </div>
            </template>
            <!-- 编辑状态 -->
            <template v-else>
              <div class="lock">
                <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
              </div>
              <div class="look">
                <img src="@/assets/image/course/ic_visual_on.svg" alt="" />
              </div>
            </template>
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
    ChapterIssue: {
      type: Boolean,
      default: false,
    },
    checkAll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeName: 0,
      isEdit: false,
      oneCheck: false,
      content: [
        {
          city:'福州',
          isCheck: false,
        },
        {
          city:'福州222',
          isCheck: false,
        },
      ],
    };
  },
  computed: {},

  mounted() {},
  watch: {
    checkAll(newVal, oldVal) {
      // console.log("newVal", newVal);
      if (newVal) {
        this.oneCheck = false;
        this.content.forEach((item) => {
          item.isCheck = true;
        });
      } else {
        this.content.forEach((item) => {
          if (!this.oneCheck) item.isCheck = false;
        });
      }
    },
  },

  methods: {
    changeCollapse(e) {
      // console.log("e", e);
    },
    handleCheckAllChange(e) {
      // console.log("e", e);
      // this.checkAll = checkedCount === this.content.length;
      this.content.forEach((item) => {
        if (item.isCheck === false) {
          this.oneCheck = true;
          this.$emit("isCheck");
          // console.log("object", item.isCheck);
        }
      });
    },
    lockClick(index) {
      // console.log("index", index);
      this.$emit("lockClick", index);
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
  // overflow: hidden;
  transition: all 0s;

  .dot {
    position: absolute;
    left: 0.3rem;
    z-index: 999;
    // top: 0.15rem;
    // background-color: #333333;
    // background-color: rgba(151, 3, 250, 1);
  }
}

.course-outline-h {
  height: 4.2rem;
}
.course-outline {
     overflow: auto;
  width: 100%;
  // height: 4.2rem;
  overflow-y: hidden;
  margin: 0 auto;
  position: relative;
  .icon {
    margin-left: 0.15rem;
    display: flex;
    img {
      width: 0.3rem;
      height: 0.3rem;
    }
  }
  .title{
  // min-width: 1.5rem;
  white-space: nowrap;
}
  .size {
    margin-left: 2rem;
     white-space: nowrap;
  }
  .lock1 {
    // position: absolute;
    display: flex;
    margin-left: 1.6rem;
    // right: 0.8rem;
    // top: 0.1rem;
    img {
      width: 0.34rem;
      height: 0.34rem;
      // background: #ffffff;
    }
  }
  .look1 {
    margin-left: 0.2rem;
    display: flex;
    img {
      width: 0.34rem;
      height: 0.34rem;
      // background: #ffffff;
    }
  }
  .outline-item {
    // width: 5.78rem;
    background: #f8f8f8;
    padding: 0.3rem 0.3rem 0.3rem 0.3rem;
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
      margin-left: 1.38rem;
      display: flex;
      img {
        width: 0.34rem;
        height: 0.34rem;
        // background: #ffffff;
      }
    }
    .look {
      margin-left: 0.2rem;
      display: flex;
      img {
        width: 0.34rem;
        height: 0.34rem;
        // background: #ffffff;
      }
    }
    .index {
      font-size: 0.16rem;
      color: #2065e0;
    }
    .content {
      margin-left: 1.05rem;
    }
    .num {
      margin-left: 1.75rem;
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
  background: #ffffff;
  font-size: 0.2rem;
  color: #333333;
  padding-left: 0.65rem;
  //   border: none;
  padding-right: 0.3rem;
  position: relative;
  font-size: 0.16rem;
}
::v-deep .el-icon-arrow-right:before {
  background-image: url(../../assets/image/course/right.svg);
  background-repeat: no-repeat;
  background-size: 0.18rem;
  position: absolute;
  right: 15px;
  bottom: 24px;
  content: "\e6e";
  border: none;
}
::v-deep .el-collapse-item__arrow.is-active {
  // bottom: 0.03rem;
  position: absolute;
  right: 0;
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