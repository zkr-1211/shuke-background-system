<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="top-bar">
          <HeaderTitle name="最近课程" />
          <div class="button" @click="dialogVisible = true">
            <el-button class="create-button" type="primary">
              <i class="el-icon-plus"></i>
              创建
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <Navigation :tabList="tabList" @tabsIndex="tabsIndex" :filtrate="true" />
      </el-col>
    </el-row>
    <!-- <div class="bottom-content"> -->
    <CourseContent :courseContentList="courseContentList" v-if="tabIndex == 0" v-loading="loading" />
    <WorkContent v-else-if="tabIndex == 1" />
    <ProblemSetDetail v-else-if="tabIndex == 2" />
    <ProblemSet v-else-if="tabIndex == 3" />
    <!-- </div> -->

    <!-- 创建课程 -->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
      top="40vh"
      @close="courseName = ''"
    >
      <h2>输入课程名称</h2>
      <input class="course-input" type="text" v-model="courseName" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCourse">创 建</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Tabs from '@/components/Tabs/Tabs.vue'
  import HeaderTitle from '@/components/HeaderTitle/HeaderTitle.vue'
  import Navigation from '@/components/Navigation/Navigation.vue'
  import CourseContent from '@/components/CourseContent/CourseContent.vue'
  import ProblemSet from '@/components/ProblemSet/ProblemSet.vue'
  import WorkContent from '@/components/WorkContent/WorkContent.vue'
  import ProblemSetDetail from '@/components/ProblemSetDetail/ProblemSetDetail.vue'
  import { getCourseList, createCourse } from '@/api/course'
  export default {
    components: {
      Tabs,
      HeaderTitle,
      Navigation,
      CourseContent,
      ProblemSet,
      WorkContent,
      ProblemSetDetail
    },

    data() {
      return {
        tabIndex: 0,
        courseContentList: [],
        tabList: [
          {
            title: '全部'
          },
          {
            title: '我创建的'
          },
          {
            title: '我加入的'
          },
          {
            title: '近期使用'
          },
          {
            title: '公开课'
          },
          {
            title: '付费课程'
          }
        ],
        dialogVisible: false,
        courseName: '',
        loading: true
      }
    },
    computed: {},

    mounted() {
      this.__getCourseList()
    },

    methods: {
      async __getCourseList() {
        const res = await getCourseList()
        this.courseContentList = res.list
        this.loading = false
      },
      async addCourse() {
        if (this.courseName.length > 0) {
          let data = {
            name: this.courseName
          }
          try {
            await createCourse(data)
            this.__getCourseList()
            this.dialogVisible = false
            this.$message({
              message: '创建成功',
              type: 'success'
            })
          } catch (error) {
            this.$message.error('创建失败')
            this.dialogVisible = false
          }
        }
      },
      tabsIndex(index) {
        this.tabIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
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
  .top-bar {
    margin-top: 0.12rem;
    // width: 15.84rem;
    height: 0.8rem;
    background: #ffffff;
    box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    position: relative;
    .title {
      // background-color: #2a77ff;
      width: 100%;
      // height: 2rem;
      margin: 0.2rem;
      font-size: 0.2rem;
      font-weight: bold;
      line-height: 0.34rem;
      color: #666666;
      border-left: 0.08rem solid #5592fe;
      .name {
        margin-left: 0.12rem;
      }
    }
    .button {
      margin-right: 0.3rem;
      font-size: 0.14rem;
      font-weight: bold;
      color: #f4f4f4;
      width: 1.2rem;
      position: absolute;
      right: 0;
      .el-icon-plus {
        margin-right: 0.07rem;
        font-size: 0.14rem;
      }
      .create-button {
        margin-bottom: 0.4rem;
        background: #2a77ff;
        box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
        &:hover {
          background: #5592fe;
        }
        &:active {
          background: #2065e0;
        }
      }
    }
  }
</style>
