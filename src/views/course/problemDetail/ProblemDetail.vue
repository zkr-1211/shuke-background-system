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
      </el-breadcrumb>
    </div>
    <TopBar name="题目详情">
      <Button name="修改编辑" slot="A" />
    </TopBar>
    <div class="content">
      <div class="top">选择题目详情</div>
      <div class="center">
        <SmallHeaderTitle name="题干"></SmallHeaderTitle>
        <div class="detail">
          阅读下面的材料，根据要求写作。
          古人常以比喻说明对理想的追求，涉及基础、方法、路径、目标及其关系等。如汉代扬雄就曾以射箭为喻，他说：“修身以为弓，矫思以为矢，立义以为的，奠而后发，发必中矣。”大意是，只要不
          断加强修养，端正思想，并将“义”作为确定的目标，再付诸行动，就能实现理想。
          上述材料能给追求理想的当代青年以启示，请结合你对自身发展的思考写一篇文章。
          A:123 B:432 C:4534 D:6546
          <div class="detail-img">
            <div class="detail-item" v-for="(item, index) in 5" :key="index">
              <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="upload-file">所有附件：</div>
        <div class="all-accessory">
          <div class="accessory" v-for="(item, index) in 2" :key="index">
            <div class="delete-accessory">
              <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
            </div>
            <div class="img">
              <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
            </div>
            <div class="text">视频3121.MP4</div>
          </div>
        </div>
        <!-- <el-button type="primary" @click="submit">提交</el-button> -->
        <SmallHeaderTitle name="选项类型" class="SmallHeaderTitle">
          <div class="select-class">单项选择题</div>
        </SmallHeaderTitle>
        <SmallHeaderTitle name="选项详情" class="SmallHeaderTitle" />
        <div class="detail-content">
          <div class="nav">
            <div class="num">序号</div>
            <div class="text">选项文字</div>
            <div class="icon">选项图片</div>
            <div class="answer">正确答案</div>
          </div>
          <div class="contents">
            <div
              class="item"
              v-for="(item, index) in optionsDetailList"
              :key="item.id"
            >
              <div class="index">{{ index + 1 }}</div>
              <div class="input-text">
                <input type="text" v-model="item.text" />
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
          </div>
        </div>
        <SmallHeaderTitle name="选项设置" class="SmallHeaderTitle">
          <div class="select-class">选项不随机</div>
        </SmallHeaderTitle>
        <SmallHeaderTitle name="设置得分" class="SmallHeaderTitle">
          <div class="score">5分</div>
        </SmallHeaderTitle>
        <SmallHeaderTitle
          name="答案解析"
          class="SmallHeaderTitle"
        ></SmallHeaderTitle>
        <div class="detail">无</div>

        <!-- <el-upload
          class="el-upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload> -->
        <!-- <el-button type="primary" @click="submit">提交</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/topBar/TopBar";
import Button from "@/components/button/Button";
import SmallHeaderTitle from "@/components/smallHeaderTitle/SmallHeaderTitle";
import CheckBox from "@/components/checkBox/CheckBox";
export default {
  components: { TopBar, Button, SmallHeaderTitle, CheckBox },
  data() {
    return {
      content: "",
      editorOption: {},
      value: "",
      options: "",
      optionsDetailList: [
        {
          uploadImg: "图片45554144.png",
          text: "",
          isCheck: false,
          id: 0,
        },
        {
          uploadImg: "无",
          text: "",
          isCheck: false,
          id: 1,
        },
        {
          uploadImg: "无",
          text: "",
          isCheck: false,
          id: 2,
        },
        {
          uploadImg: "无",
          text: "",
          isCheck: false,
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

  .center {
    padding: 60px 60px 60px 60px;
    .detail {
      margin-top: 12px;
      padding: 25px;
      width: 100%;
      min-height: 120px;
      background: #f6f6f8;
      opacity: 1;
      border-radius: 4px;
      //   height: 206px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 27px;
      color: #333333;
      opacity: 1;
      .detail-img {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .detail-item {
          margin-right: 20px;
          img {
            width: 320px;
            height: 180px;
          }
        }
      }
    }
    .SmallHeaderTitle {
      margin-top: 80px;
    }
    .upload-file {
      margin-top: 100px;
      font-size: 16px;
      color: #999999;
      opacity: 1;
    }
    .all-accessory {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      // background-color: red;
      .accessory {
        margin-top: 15px;
        margin-right: 20px;
        width: 120px;
        height: 120px;
        background: #f6f6f8;
        opacity: 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        position: relative;
        .delete-accessory {
          position: absolute;
          right: 5px;
          top: 5px;
          img {
            width: 30px;
            height: 30px;
          }
        }
        img {
          width: 50px;
          height: 50px;
        }
      }
    }

    .select-class {
      margin-left: 20px;
      background: #ffffff;
      opacity: 1;
      display: flex;
      font-size: 16px;
      color: #000000;
      margin-bottom: 3px;
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
        }
      }
    }
  }
}
</style>