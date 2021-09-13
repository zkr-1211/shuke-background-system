<!--  -->
<template>
  <div class='body'>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
        <el-breadcrumb-item>班级详情</el-breadcrumb-item>
        <el-breadcrumb-item>章节发放管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
        <div class="left">
          <div class="bottom-left">
            <HeaderTitle name="课程大纲" />
            <div class="nav">
              <div class="button">
                <el-button type="primary">编辑大纲</el-button>
              </div>
            </div>
            <CourseOutline ChapterIssue='true' />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
        <div class="right">
          <div class="bottom-right">
            <HeaderTitle name="小节资源" />
            <div class="nav" v-if="true">
              <div class="button">
                <el-button type="primary">
                  <div class="icon-button">
                    <div><img src="@/assets/image/course/ic_button_unsee.svg" alt=""></div>
                    <div>隐藏选中</div>
                  </div>
                </el-button>
              </div>
              <div class="button1">
                <el-button type="primary">
                  <div class="icon-button">
                    <div><img src="@/assets/image/course/ic_button_see.svg" alt=""></div>
                    <div>可见选中</div>
                  </div>
                </el-button>
              </div>
            </div>
            <!-- <CourseOutline ChapterIssue='true' /> -->
          </div>
          <div class="right-content">
            <div class="course-title"><span>01：</span> 什么是web程序应用</div>
            <div class="topNav">
              <div class="title">全部</div>
              <div class="totalFile">共0个文件</div>
            </div>
            <div class="contentNav">
              <div class="select-all">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
              </div>
              <div class="file-name">文件名</div>
              <div class="file-size">大小</div>
              <div class="operate">操作</div>
            </div>
            <div class="tableContent">
              <SectionOutline ChapterIssue='true' />
            </div>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import CourseOutline from "@/components/courseOutline/CourseOutline.vue";
import SectionOutline from "@/components/sectionOutline/SectionOutline.vue";
export default {
  components: {
    HeaderTitle,
    CourseOutline,
    SectionOutline
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.breadcrumb {
  margin-bottom: 0.12rem;
}
.left {
  margin-bottom: 0.3rem;
  background-color: #ffffff;
  height: 9.36rem;
  .bottom-left {
    // width: 6.18rem;
    background: #ffffff;
    position: relative;
    .nav {
      .button {
        position: absolute;
        top: 0.18rem;
        right: 0.3rem;
        font-size: 0.14rem;
        font-weight: bold;
        color: #f4f4f4;
        .el-button {
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
    .course-outline {
      width: 5.78rem;
      height: 4.2rem;
      overflow-x: hidden;
      margin: 0 auto;
      .outline-item {
        width: 5.78rem;
        background: #ffffff;
        padding: 0.24rem 0.3rem 0rem 0.3rem;
        font-size: 0.16rem;
        line-height: 0.27rem;
        color: #666666;
      }
    }
  }
}
.right {
  background-color: #ffffff;
  height: 9.36rem;
  .bottom-right {
    // width: 6.18rem;
    background: #ffffff;
    position: relative;
    .nav {
      .button {
        position: absolute;
        top: 0.18rem;
        right: 0.3rem;
        font-size: 0.14rem;
        font-weight: bold;
        color: #f4f4f4;
        .el-button {
          background: #2a77ff;
          box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
          .icon-button {
            display: flex;
            align-items: center;
            img {
              display: flex;
              margin-right: 0.05rem;
            }
          }

          &:hover {
            background: #5592fe;
          }
          &:active {
            background: #2065e0;
          }
        }
      }
      .button1 {
        position: absolute;
        top: 0.18rem;
        right: 1.8rem;
        font-size: 0.14rem;
        font-weight: bold;
        color: #f4f4f4;

        .el-button {
          background: #2a77ff;
          box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
          .icon-button {
            display: flex;
            align-items: center;
            img {
              display: flex;
              margin-right: 0.05rem;
            }
          }

          &:hover {
            background: #5592fe;
          }
          &:active {
            background: #2065e0;
          }
        }
      }
    }
    .course-outline {
      width: 5.78rem;
      height: 4.2rem;
      overflow-x: hidden;
      margin: 0 auto;
      .outline-item {
        width: 5.78rem;
        background: #ffffff;
        padding: 0.24rem 0.3rem 0rem 0.3rem;
        font-size: 0.16rem;
        line-height: 0.27rem;
        color: #666666;
      }
    }
  }
  .right-content {
    padding: 0rem 0.3rem 0rem 0.3rem;
    .course-title {
      margin-top: 0.12rem;
      font-size: 0.2rem;
      font-weight: bold;
      color: #666666;
      span {
        color: #2a77fb;
      }
    }
    .topNav {
      margin-top: 0.12rem;
      position: relative;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.2rem;
        height: 0.48rem;
        background: #f6f6f8;
        opacity: 1;
        font-size: 0.16rem;
        font-weight: bold;
        color: #666666;
      }
      .totalFile {
        position: absolute;
        right: 0rem;
        top: 0.22rem;
        font-size: 0.16rem;
        color: #999999;
        opacity: 1;
      }
    }
    .contentNav {
      //   width: 328px;
      width: 100%;
      height: 48px;
      background: #f6f6f8;
      opacity: 1;
      font-size: 0.16rem;
      font-weight: bold;
      //   line-height: 27px;
      color: #666666;
      display: flex;
      align-items: center;
      .select-all {
        margin-left: 0.3rem;
        margin-top: 0.02rem;
      }
      .file-name {
        margin-left: 0.5rem;
      }
      .file-size {
        margin-left: 3rem;
      }

      .operate {
        margin-left: 2rem;
      }
    }
  }
}
</style>