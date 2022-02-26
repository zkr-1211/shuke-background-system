<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
        <el-breadcrumb-item>班级详情</el-breadcrumb-item>
        <el-breadcrumb-item>章节发放管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
            <CourseOutline :ChapterIssue="true" :chapterList="chapterList"/>

    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
        <div class="left">
          <div class="bottom-left">
            <HeaderTitle name="课程大纲" />
            <div class="nav">
              <div class="button" @click="dialogFormVisible = true">
                <el-button type="primary">编辑大纲</el-button>
              </div>
            </div>
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
                    <div>
                      <img
                        src="@/assets/image/course/ic_button_unsee.svg"
                        alt=""
                      />
                    </div>
                    <div>隐藏选中</div>
                  </div>
                </el-button>
              </div>
              <div class="button1">
                <el-button type="primary">
                  <div class="icon-button">
                    <div>
                      <img
                        src="@/assets/image/course/ic_button_see.svg"
                        alt=""
                      />
                    </div>
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
                <!-- <el-checkbox :isIndeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox> -->
                <CheckBox v-model="isCheckedAll" @IsCheck="IsCheck" />
              </div>
              <div class="file-name">文件名</div>
              <div class="file-size">大小</div>
              <div class="operate">操作</div>
            </div>
            <div class="tableContent">
              <SectionOutline
                :ChapterIssue="true"
                :checkAll="checkAll"
                @isCheck="isCheckedAllTf"
                @lockClick="lockClick"
                :sectionOutlineList="sectionOutlineList"
              />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--权限设置  -->
    <el-dialog
      title=""
      :visible.sync="lockDV"
      width="30%"
      :show-close="false"
      top="10vh"
    >
      <!-- <div class="what"><img src="@/assets/image/course/ic_button_unsee.svg" alt=""></div> -->
      <div class="d">
        <div>
          <h2>锁定关联资源</h2>
        </div>
        <div class="lock-what">
          <img src="@/assets/image/course/icon_complete.svg" alt="" />
        </div>
      </div>

      <!-- <span class="select-num">已选中10人</span> -->
      <div class="quan-xian">
        <div class="quanxian-item" v-for="(item, index) in 10" :key="index">
          <div class="chick">
            <el-checkbox-group v-model="checkedCities">
              <el-checkbox v-for="city in cities" :label="city" :key="city">
                <div class="what">
                  <div class="">
                    <img src="@/assets/image/course/icon_complete.svg" alt="" />
                  </div>
                  <div class="">{{ city }}</div>
                </div>
              </el-checkbox>
            </el-checkbox-group>
            <!-- <el-checkbox size="medium" border></el-checkbox> -->
          </div>
          <!-- <div class="title">录播权限</div> -->
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <span class="delete-man">删除成员</span> -->
        <el-button class="cancel-button" @click="lockDV = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="lockDV = false">确 认</el-button>
      </span>
    </el-dialog>
    <!-- 新建章节 -->
    <el-dialog title="新建章节" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="章节标题" :label-width="formLabelWidth">
          <el-input
            v-model="form.title"
            autocomplete="off"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="章节描述" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入描述内容（可选输入）"
            v-model="form.describe"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="章节是否可见" :label-width="formLabelWidth">
          <el-select v-model="form.hidden" placeholder="选择是否可见">
            <el-option label="是" :value = true></el-option>
            <el-option label="否" :value = false></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="章节排序值" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入描述内容（可选输入）"
            v-model.number="form.sort"
            autocomplete="off"
            type="number"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addChapterConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle.vue";
import CourseOutline from "@/components/CourseOutline/CourseOutline.vue";
import SectionOutline from "@/components/SectionOutline/SectionOutline.vue";
import CheckBox from "@/components/CheckBox/CheckBox.vue";
import {
  createChapter,
  getChapterInfo,
  getChapterList,
  editChapter,
  deleteChapter,
  getDeletedChapter,
} from "@/api/course/chapter";

const cityOptions = ["上海"];
export default {
  components: {
    HeaderTitle,
    CourseOutline,
    SectionOutline,
    CheckBox,
  },

  data() {
    return {
      lockDV: false,
      checkAll: false,
      isCheckedAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      sectionOutlineList: [
        {
          city: "福州",
          isCheck: false,
        },
        {
          city: "福州2",
          isCheck: false,
        },
      ],
      dialogFormVisible: false,
      form: {
        title: "",
        describe: "",
        hidden: undefined,
        sort: undefined,
      },
      formLabelWidth: "100px",
      course_id: 81,
      chapterList:[]
    };
  },
  computed: {
    // isCheckedAll() {
    //   return this.sectionOutlineList.every(item => item.isCheck)
    // }
  },
  mounted() {
     this.__getChapter()
  },

  methods: {
    async __getChapter() {
      const res = await getChapterList(this.course_id)
      this.chapterList =  res.chapters
      console.log('__getChapter',res);
    },
    handleCheckAllChange(val) {
      this.isIndeterminate = false;
    },
    lockClick(e) {
      this.lockDV = true;
    },
    IsCheck() {
      let flag = this.isCheckedAll;
      this.sectionOutlineList.forEach((item) => {
        item.isCheck = flag;
      });
    },
    isCheckedAllTf(e) {
      if (e) {
        this.isCheckedAll = true;
      } else {
        this.isCheckedAll = false;
      }
    },
    async addChapterConfirm() {
      if (this.form.title.split(" ").join("").length <= 0) {
        this.$message.error("请输入标题");
        return;
      }
      try {
        console.log(this.form);
        await createChapter(this.course_id, this.form);
        this.__getChapter()
        this.dialogFormVisible = false;
        this.$message({
          message: "新建成功",
          type: "success",
        });
      } catch (error) {
        this.$message.error(`${error}`);
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.el-checkbox {
  display: flex;
  align-items: center;
}
.d {
  display: flex;
}
.lock-what {
  img {
    margin-left: 0.12rem;
    padding-top: 0.05rem;
  }
}
.what {
  display: flex;
  align-items: center;
  // background-color: firebrick;
  img {
    margin-right: 0.12rem;
    display: flex;
  }
}
.quan-xian {
  height: 4.9rem;
  overflow-y: auto;
  position: relative;
  margin-top: 0.12rem;
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
  .title {
    font-size: 0.2rem;
    color: #666666;
    margin-left: 0.2rem;
    line-height: 0.2rem;
  }
  .quanxian-item {
    display: flex;
    align-items: center;
    height: 0.5rem;
  }
}
.select-num {
  font-size: 0.16rem;
  color: #2a77ff;
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
}
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
      // width: 3.28rem;
      width: 100%;
      height: 0.48rem;
      background: #f6f6f8;
      opacity: 1;
      font-size: 0.16rem;
      font-weight: bold;
      // line-height: 0.27rem;
      color: #666666;
      display: flex;
      align-items: center;
      .select-all {
        margin-left: 0.28rem;
        margin-top: 0.02rem;
        width: 1rem;
      }
      .file-name {
        white-space: nowrap;
        width: 2.6rem;
      }
      .file-size {
        width: 1.7rem;
        text-align: center;
      }
      .operate {
        text-align: center;
        width: 3rem;
      }
    }
  }
}
</style>