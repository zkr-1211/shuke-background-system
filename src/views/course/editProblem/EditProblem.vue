<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>题集库</el-breadcrumb-item>
        <el-breadcrumb-item>编辑题集</el-breadcrumb-item>
        <el-breadcrumb-item>题目详情</el-breadcrumb-item>
        <el-breadcrumb-item>编辑题目</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <TopBar name="编辑题目" />
    <div class="content">
      <div class="top">编辑主观题题目</div>
      <div class="center">
        <SmallHeaderTitle name="输入题干"></SmallHeaderTitle>
        <quill-editor
          ref="text"
          v-model="content"
          class="myQuillEditor"
          :options="editorOption"
        />
        <!-- <el-button type="primary" @click="submit">提交</el-button> -->
        <SmallHeaderTitle name="选项类型" class="SmallHeaderTitle">
          <div class="select-class">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </SmallHeaderTitle>
        <SmallHeaderTitle name="选项详情设置" class="SmallHeaderTitle" />
        <div class="detail-content">
          <div class="nav">
            <div class="num">序号</div>
            <div class="text">选项文字</div>
            <div class="icon">选项图片</div>
            <div class="answer">正确答案</div>
            <div class="move">拖拽位置</div>
          </div>
          <div class="contents">
            <draggable v-model="optionsDetailList">
              <transition-group>
                <div
                  class="item"
                  v-for="(item, index) in optionsDetailList"
                  :key="item.id"
                >
                  <div class="index">{{ index + 1 }}</div>
                  <div class="input-text">
                    <input type="text" v-model="item.text" />
                    <img
                      @click="addOptionsDetail()"
                      v-if="optionsDetailList.length - 1 == index"
                      src="@/assets/image/course/ic_class_invitation.svg"
                      alt=""
                    />
                  </div>
                  <div class="upload-icon">{{ item.uploadImg }}</div>
                  <div class="check">
                    <CheckBox />
                  </div>
                  <div
                    class="delete"
                    v-if="optionsDetailList.length > 1"
                    @click="deleteItem(item.id)"
                  >
                    {{ item.delete }}
                  </div>
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>
        <SmallHeaderTitle name="选项设置" class="SmallHeaderTitle">
          <div class="select-class">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </SmallHeaderTitle>
        <SmallHeaderTitle name="设置得分" class="SmallHeaderTitle">
          <div class="score"><input type="text" />分</div>
        </SmallHeaderTitle>
        <SmallHeaderTitle
          name="输入答案解析"
          class="SmallHeaderTitle"
        ></SmallHeaderTitle>
        <quill-editor
          ref="text"
          v-model="content"
          class="myQuillEditor"
          :options="editorOption"
        />
        <div class="upload-file">上传附件：</div>
        <el-upload
          class="el-upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <!-- <el-button type="primary" @click="submit">提交</el-button> -->
        <div class="button">
          <div class="cancel">取消</div>
          <div class="save"><Button name="保存" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TopBar from "@/components/topBar/TopBar";
import Button from "@/components/button/Button";
import CheckBox from "@/components/checkBox/CheckBox";
import SmallHeaderTitle from "@/components/smallHeaderTitle/SmallHeaderTitle";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: { draggable, TopBar, Button, SmallHeaderTitle, quillEditor,CheckBox },
  data() {
    return {
      content: "",
      editorOption: {},
      value: "",
      options: "",
      optionsDetailList: [
        {
          uploadImg: "上传图片",
          text: "",
          isCheck: false,
          delete: "删除",
          id: 0,
        },
        {
          uploadImg: "上传图片",
          text: "",
          isCheck: false,
          delete: "删除",
          id: 1,
        },
        {
          uploadImg: "上传图片",
          text: "",
          isCheck: false,
          delete: "删除",
          id: 2,
        },
        {
          uploadImg: "上传图片",
          text: "",
          isCheck: false,
          delete: "删除",
          id: 3,
        },
      ],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    submit() {
      console.log(this.$refs.text.value);
    },
    addOptionsDetail() {
      this.optionsDetailList.push({
        uploadImg: "上传图片",
        text: "",
        isCheck: false,
        delete: "删除",
        id: Math.floor(Math.random() * 10000000 + 1),
      });
      console.log("this.optionsDetailList===", this.optionsDetailList);
    },
    deleteItem(id) {
      this.optionsDetailList.forEach((item) => {
        if (item.id === id) {
          this.optionsDetailList.splice(0, 1);
        }
      });
    },
    handlePictureCardPreview() {},
    handleRemove() {},
  },
};
</script>
<style lang='scss' scoped>
.content {
  //   width: 1584px;
  //   height: 1500px;
  background: #ffffff;
  opacity: 1;
  margin-top: 20px;
  .top {
    // width: 100%;
    padding-left: 30px;
    height: 60px;
    background: #ffffff;
    opacity: 1;
    font-size: 16px;
    font-family: Source Han Sans CN;
    line-height: 60px;
    color: #999999;
    opacity: 1;
    border-bottom: 1px solid #e0e0e0;
  }
  .quill-editor {
    margin-top: 20px;
    height: 120px;
    ::v-deep.ql-toolbar.ql-snow {
      border: 1px solid #ccc;
      box-sizing: border-box;
      font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      padding: 8px;
      line-height: 0;
    }
  }
  .center {
    padding: 60px 60px 60px 60px;
    .SmallHeaderTitle {
      margin-top: 80px;
    }
    .upload-file {
      margin-top: 100px;
      font-size: 16px;
      color: #999999;
      opacity: 1;
    }
    .el-upload {
      margin-top: 20px;
      ::v-deep.el-upload--picture-card {
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        // box-sizing: border-box;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .select-class {
      margin-left: 20px;
      background: #ffffff;
      opacity: 1;
      display: flex;
      ::v-deep .el-select .el-input__inner {
        cursor: pointer;
        width: 1.68rem;
        height: 0.4rem;
        background: #ffffff;
        border: 0.01rem solid #e0e0e0;
        opacity: 1;
        border-radius: 0.04rem;
      }
      .el-select {
        height: 0.4rem;
        background: #ffffff;
        border: 0.01rem solid #e0e0e0;
        opacity: 1;
        border-radius: 0.04rem;
      }
    }
    .score {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #000000;
      margin-left: 20px;
      input {
        font-size: 18px;
        width: 100px;
        height: 0.44rem;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        opacity: 1;
        border-radius: 4px;
        margin-right: 10px;
        padding-left: 15px;
      }
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 80px;
      .cancel {
        width: 104px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #ffffff;
        font-size: 14px;
        font-weight: bold;
        line-height: 40px;
        color: #666666;
      }
    }
    .detail-content {
      margin-top: 20px;
      //   height: 350px;
      border: 1px solid #e0e0e0;
      opacity: 1;
      border-radius: 4px;
      .nav {
        font-size: 16px;
        line-height: 54px;
        color: #333333;
        opacity: 1;
        height: 54px;
        background: #f7f6fa;
        // border: 1px solid #707070;
        display: flex;
        .num {
          padding-left: 20px;
          width: 68px;
          height: 54px;
          white-space: nowrap;
          // background-color: red;
        }
        .text {
          width: 532px;
          height: 54px;
          // background-color: rgb(109, 94, 94);
        }
        .icon {
          width: 208px;
          height: 54px;
          // background-color: rgb(26, 82, 165);
        }
        .answer {
          width: 536px;
          height: 54px;
          // background-color: rgba(66, 33, 33, 0.096);
        }
        .move {
          width: 150px;
          height: 54px;
          // background-color: rgba(79, 34, 131, 0.541);
        }
      }
      .contents {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px 15px 15px 0px;
        .item {
          cursor: pointer;
          display: flex;
          align-items: center;
          line-height: 0;
          height: 58px;
          .index {
            // padding-left: 15px;
            // margin-right: 30px;
            // height: 30px;
            // background-color: red;
            text-align: center;
            // vertical-align: center;
            width: 68px;
            font-size: 16px;
            color: #333333;
          }
          .input-text {
            // margin-left: 60px;
            // height: 30px;
            // background-color: rgb(26, 82, 165);
            width: 532px;
            display: flex;
            align-items: center;
            img {
              margin-left: 20px;

              // display: flex;
              // align-items: center;
              width: 24px;
              height: 24px;
            }
            input {
              width: 328px;
              height: 44px;
              background: #ffffff;
              border: 1px solid #e0e0e0;
              opacity: 1;
              border-radius: 4px;
              padding-left: 15px;
              font-size: 16px;
              color: #000000;
            }
          }
          .upload-icon {
            // height: 30px;
            // background-color: rgb(104, 125, 156);
            white-space: nowrap;
            width: 236px;
            // width: 64px;
            height: 16px;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 27px;
            color: #3980ff;
            opacity: 1;
          }
          .check {
            // height: 30px;
            width: 385px;
          }
          .delete {
            white-space: nowrap;
            width: 232px;
            height: 16px;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 27px;
            color: #999999;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>