<!--  -->
<template>
  <div class="body">
    <div class="course-content">
      <div class="course-item" v-for="(item, index) in courseContentList" :key="index">
        <div class="img" @click="toDetail()">
          <img src="@/assets/image/home/course_img1.svg" alt="" />
          <!-- <img :src="item.cover_img" alt="" /> -->
        </div>

        <div class="checkbox">
          <el-tooltip class="item" effect="dark" :content="item.course_name" placement="top">
            <a href="/course/classdetail">
              <div class="name">
                {{ item.course_name }}
              </div>
            </a>
          </el-tooltip>
          <div v-if="isCheckBox" class="el-checkbox">
            <CheckBox v-model="item.select" @IsCheck="IsCheck" />
          </div>
        </div>

        <div class="create">创建者：{{ item.teams.team_name }}</div>
        <div class="bottom-message">
          <div class="classnum">班级：100</div>
          <div class="num">学生数：50</div>
          <div class="dot" v-if="isCheckBox"></div>
          <el-dropdown trigger="click" placement="bottom-end" v-else>
            <span class="el-dropdown-link">
              <Dot />
            </span>
            <el-dropdown-menu slot="dropdown">
              <div @click="editName(item.course_id, item.course_name)">
                <el-dropdown-item>重命名</el-dropdown-item>
              </div>
              <div @click="deleteCourse(item.course_id, item.courseName)">
                <el-dropdown-item>删除</el-dropdown-item>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- 删除课程 -->
    <el-dialog :title="deleteName" :visible.sync="deleteDV" width="30%" :show-close="false" top="40vh">
      <h2>删除</h2>
      <span class="delete-text">您确认删除课程么？该课程将移入回收站，30天内可前往恢复或清理。</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="deleteDV = false">取 消</el-button>
        <el-button type="primary" @click="deleteConfirm">确认</el-button>
      </span>
    </el-dialog>
    <!-- 重命名课程 -->
    <el-dialog title="" :visible.sync="editDV" width="30%" :show-close="false" top="40vh">
      <h2>修改课程名称</h2>
      <input class="course-input" type="text" v-model.trim="courseName" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="editDV = false">取 消</el-button>
        <el-button type="primary" @click="editConfirm">确 认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Dot from '@/components/Dot/Dot.vue'
  import CheckBox from '@/components/CheckBox/CheckBox.vue'
  import { editCourse, deleteCourse } from '@/api/course'

  export default {
    components: {
      Dot,
      CheckBox
    },
    props: {
      courseContentList: {
        type: Array,
        default: []
      },
      isCheckBox: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        editDV: false,
        deleteDV: false,
        checked: false,
        courseName: '',
        deleteName: '',
        selectId: null
      }
    },
    computed: {},

    mounted() {},

    methods: {
      toDetail() {
        this.$router.push('course/coursedetail')
      },
      IsCheck() {
        let selectIdList = []
        this.courseContentList.forEach(item => {
          if (item.select === true) {
            selectIdList.push(item.course_id)
          }
        })
        this.$emit('courseContentEven', selectIdList)
      },
      editName(id, name) {
        this.selectId = id
        this.courseName = name
        this.editDV = true
      },
      deleteCourse(id, name) {
        this.selectId = id
        this.deleteDV = true
        this.deleteName = name
      },
      async deleteConfirm() {
        try {
          await deleteCourse(this.selectId)
          this.$parent.__getCourseList()
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        } catch (error) {
          this.$message.error('删除失败')
        } finally {
          this.deleteDV = false
        }
      },
      async editConfirm() {
        if (this.courseName.length > 0) {
          let data = {
            name: this.courseName
          }
          try {
            await editCourse(this.selectId, data)
            this.$parent.__getCourseList()

            this.$message({
              message: '修改成功',
              type: 'success'
            })
          } catch (error) {
            this.$message.error('修改失败')
          } finally {
            this.editDV = false
            this.courseName = ''
            this.selectId = null
          }
        } else {
          alert(`请输入名称`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/style/mixins/dialog.scss';
  .course-content {
    margin-top: -0.15rem;
    // padding-right: 1.32rem;
    height: 100%;
    width: 100%;
    // width: 90%;
    // min-height: 18rem;
    overflow: overlay;
    // background-color: red;
    display: flex;
    // align-items: center;
    // justify-content: space-between;
    flex-wrap: wrap;
    // padding-right: 0.32rem;
    .course-item {
      width: 2.91rem;
      height: 3.1rem;
      margin-top: 0.3rem;
      // margin-left: 0.03rem;
      margin-right: 0.26rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
      // margin-left: 0.32rem;
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
          top: 0.06rem;
          font-size: 0.2rem;
        }
      }
      .name {
        font-size: 0.2rem;
        font-weight: bold;
        line-height: 0.34rem;
        color: #333333;
        margin: 0.15rem 0.15rem 0.2rem 0.15rem;
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
        font-weight: 400;
        line-height: 0.18rem;
        color: #999999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.05rem 0.15rem 0.15rem 0.15rem;
        .classnum {
        }
        .num {
          margin-right: 0.35rem;
        }
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
      }
    }
  }
</style>
