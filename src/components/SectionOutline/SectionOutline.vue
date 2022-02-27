<!--  -->
<template>
  <div class="body">
    <div class="course-outline" :class="!ChapterIssue ? 'course-outline-h' : ''">
      <el-collapse v-model="activeName" @change="changeCollapse">
        <el-collapse-item :name="index" v-for="(item, index) in sectionOutlineList1" :key="item.resource_id">
          <template slot="title">
            <div class="icon">
              <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
            </div>
            <div class="title">{{ item.name }}</div>
            <div class="size">{{ item.fileinfo.size }}</div>
            <div class="dot" @click.stop>
              <CheckBox v-model="item.isCheck" @IsCheck="IsCheck" />
            </div>
            <template v-if="!isUploadResource">
              <div class="lock1" @click.stop="lockClick(index)" v-show="item.locked">
                <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
              </div>
              <div class="look1">
                <img src="@/assets/image/course/ic_visual_on.svg" alt="" />
              </div>
            </template>

            <!-- 上传资源 -->
            <template v-if="isUploadResource">
              <div class="lock1">
                <img src="@/assets/image/course/ic_chapter_dowload.svg" alt="" />
              </div>
              <div class="look1">
                <img src="@/assets/image/course/ic_chapter_delete.svg" alt="" />
              </div>
              <div class="look1">
                <img src="@/assets/image/course/ic_chapter_add.svg" alt="" />
              </div>
            </template>
          </template>

          <div class="outline-item" v-for="(item1, index1) in item" :key="index1">
            <div v-if="ChapterIssue" class="dot">
              <!-- <Dot /> -->
            </div>
            <!-- <span class="index">0{{index1+1}}:</span> -->
            <span class="content">函数相关题目题集</span>
            <span class="num">题目数:1000</span>
            <template v-if="!isEdit">
              <div class="lock" v-if="true">
                <img src="@/assets/image/course/ic_chapter_preview.svg" alt="" />
              </div>
              <div class="look" v-if="true">
                <img src="@/assets/image/course/ic_chapter_eliminate.svg" alt="" />
              </div>
            </template>
            <!-- 编辑状态 -->
            <template v-else>
              <div class="lock">
                <img src="@/assets/image/course/ic_chapter_preview.svg" alt="" />
              </div>
              <div class="look">
                <img src="@/assets/image/course/ic_chapter_eliminate.svg" alt="" />
              </div>
            </template>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import Dot from '@/components/Dot/Dot.vue'
  import CheckBox from '@/components/CheckBox/CheckBox.vue'
  export default {
    components: {
      Dot,
      CheckBox
    },
    props: {
      ChapterIssue: {
        type: Boolean,
        default: false
      },
      isUploadResource: {
        type: Boolean,
        default: false
      },
      checkAll: {
        type: Boolean,
        default: false
      },
      sectionOutlineList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activeName: 0,
        isEdit: false,
        oneCheck: false,
        sectionOutlineList1: []
      }
    },
    computed: {},

    mounted() {},
    watch: {
      sectionOutlineList: {
        handler(newVal, oldVal) {
          this.sectionOutlineList1 = newVal
          // console.log("object", newVal);
        },
        deep: true,
        immediate: true
      },

      checkAll(newVal, oldVal) {
        if (newVal) {
          this.oneCheck = false
          this.content.forEach(item => {
            item.isCheck = true
          })
        } else {
          this.content.forEach(item => {
            if (!this.oneCheck) item.isCheck = false
          })
        }
      }
    },

    methods: {
      changeCollapse(e) {
        // console.log("e", e);
      },
      // 如果为真就全选、不为真就不选
      IsCheck(e) {
        let checkall = this.sectionOutlineList1.every(item => {
          return item.isCheck
        })
        this.$emit('isCheck', checkall)
      },

      lockClick(index) {
        this.$emit('lockClick', index)
      }
    }
  }
</script>
<style lang="scss" scoped>
  ::v-deep .el-collapse-item__wrap {
    will-change: height;
    background-color: #fff;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: none;
  }
  .el-collapse-item {
    transition: all 0s;
    .dot {
      position: absolute;
      top: 0rem;
      left: 0.28rem;
      z-index: 999;
    }
  }
  .course-outline-h {
    height: 4.2rem;
  }
  .course-outline {
    overflow: overlay;
    width: 100%;
    // height: 4.2rem;
    overflow-y: hidden;
    margin: 0 auto;
    position: relative;
    .icon {
      margin-left: 0.35rem;
      display: flex;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
    .title {
      width: 3.2rem;
      white-space: nowrap;
    }
    .size {
      width: 2.3rem;
      height: 0.5rem;
      white-space: nowrap;
    }
    .lock1 {
      display: flex;
      cursor: pointer;
      img {
        width: 0.34rem;
        height: 0.34rem;
      }
    }
    .look1 {
      margin-left: 0.2rem;
      display: flex;
      cursor: pointer;
      img {
        width: 0.34rem;
        height: 0.34rem;
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
        cursor: pointer;
        img {
          width: 0.34rem;
          height: 0.34rem;
          // background: #ffffff;
        }
      }
      .look {
        margin-left: 0.2rem;
        cursor: pointer;
        display: flex;
        img {
          width: 0.34rem;
          height: 0.34rem;
          // background: #ffffff;
        }
      }
      .index {
        white-space: nowrap;
        font-size: 0.16rem;
        color: #2065e0;
      }
      .content {
        white-space: nowrap;
        width: 4rem;
        text-align: center;
        cursor: pointer;
      }
      .num {
        white-space: nowrap;
        cursor: pointer;
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
    padding-left: 0.75rem;
    // border: none;
    padding-right: 0.3rem;
    position: relative;
    font-size: 0.16rem;
  }
</style>
