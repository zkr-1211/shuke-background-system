<!--  -->
<template>
  <div class="body">
    <div class="course-outline" :class="ChapterIssue || isUploadResource ? '' : 'course-outline-h'">
      <el-collapse v-model="activeName" accordion @change="changeCollapse">
        <el-collapse-item :name="index" v-for="(item, index) in chapterList" :key="item.chapter_id">
          <template slot="title">
            <div class="title">{{ item.title }}</div>
            <el-dropdown trigger="click" placement="bottom-end" class="dot">
              <span class="el-dropdown-link" @click.stop>
                <Dot />
              </span>
              <el-dropdown-menu slot="dropdown">
                <div @click="onEdit(item)">
                  <el-dropdown-item>修改章节</el-dropdown-item>
                </div>
                <div @click="onDelete(item.chapter_id)">
                  <el-dropdown-item>删除</el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </template>

          <div
            class="outline-item"
            v-for="(item1, index1) in item.sections"
            :key="item1.section_id"
            @click="secItemClick(index1, item1.section_id)"
          >
            <el-dropdown trigger="click" placement="bottom-end" class="dot" v-if="ChapterIssue || isUploadResource">
              <span class="el-dropdown-link" @click.stop>
                <Dot />
              </span>
              <el-dropdown-menu slot="dropdown">
                <div @click="onEditSec(item1)">
                  <el-dropdown-item>修改小节</el-dropdown-item>
                </div>
                <div @click="onDeleteSec(item1.section_id)">
                  <el-dropdown-item>删除</el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </el-dropdown>

            <span class="index">0{{ index1 + 1 }}:</span>
            <span class="content">{{ item1.name }}</span>
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
          <div class="add" @click="addSection(item.chapter_id)">
            <!-- <div class="add" v-if="isUploadResource"> -->
            <div class="img">
              <img src="@/assets/image/course/icon_add_n.svg" alt="" />
            </div>
            <div class="add-item">添加小节</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import Dot from '@/components/Dot/Dot.vue'
  export default {
    components: {
      Dot
    },
    props: {
      //是否是章节发布管理
      ChapterIssue: {
        type: Boolean,
        default: false
      },
      //是否是上传资源大纲
      isUploadResource: {
        type: Boolean,
        default: false
      },
      //是否是上传资源大纲
      chapterList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activeName: 0,
        isEdit: false
      }
    },
    computed: {},

    mounted() {},

    methods: {
      changeCollapse(e) {},
      onDelete(id) {
        this.$confirm('此操作将删除该章节, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$emit('onDelete', id)
          })
          .catch(() => {})
      },
      onEdit(item) {
        this.$emit('onEdit', item)
      },
      onDeleteSec(id) {
        this.$confirm('此操作将删除该小节, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$emit('onDeleteSec', id)
          })
          .catch(() => {})
      },
      onEditSec(item) {
        this.$emit('onEditSec', item)
      },
      addSection(id) {
        this.$emit('addSection', id)
      },
      secItemClick(index, id) {
        this.$emit('secItemClick', index, id)
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
    overflow: hidden;
    transition: all 0s;
    .dot {
      position: absolute;
      right: 0.2rem;
      top: 0.15rem;
    }
  }
  .course-outline-h {
    height: 4.2rem;
  }
  .course-outline {
    width: 100%;
    overflow-x: hidden;
    overflow: overlay;
    margin: 0 auto;
    .outline-item {
      background: #ffffff;
      padding: 0.3rem 0.3rem 0rem 0.3rem;
      font-size: 0.16rem;
      color: #666666;
      display: flex;
      position: relative;
      .dot {
        position: absolute;
        right: 0.2rem;
        top: 0.32rem;
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
      margin-top: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        display: flex;
        width: 0.3rem;
        height: 0.3rem;
      }
      .add-item {
        margin-left: 0.08rem;
        font-size: 0.2rem;
        line-height: 0.34rem;
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
    background-image: url(../../assets/image/course/right.svg);
    background-repeat: no-repeat;
    background-position: 0.1rem;
  }
  ::v-deep .el-collapse-item__header.is-active {
    border-bottom-color: transparent;
    background-image: url(../../assets/image/course/bottom.svg);
  }
  ::v-deep .el-icon-arrow-right:before {
    content: none;
    border: none;
  }
  ::v-deep .el-collapse-item__arrow.is-active {
    content: none;
  }
</style>
