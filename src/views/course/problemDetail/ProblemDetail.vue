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
     // width: 15.84rem;
     // height: 15rem;
     background: #ffffff;
     opacity: 1;
     margin-top: 0.2rem;
     .top {
         // width: 100%;
         padding-left: 0.3rem;
         height: 0.6rem;
         background: #ffffff;
         opacity: 1;
         font-size: 0.16rem;
         font-family: Source Han Sans CN;
         line-height: 0.6rem;
         color: #999999;
         opacity: 1;
         border-bottom: 0.01rem solid #e0e0e0;
    }
     .center {
         padding: 0.6rem 0.6rem 0.6rem 0.6rem;
         .detail {
             margin-top: 0.12rem;
             padding: 0.25rem;
             width: 100%;
             min-height: 1.2rem;
             background: #f6f6f8;
             opacity: 1;
             border-radius: 0.04rem;
             // height: 2.06rem;
             font-size: 0.16rem;
             font-family: Source Han Sans CN;
             font-weight: 400;
             line-height: 0.27rem;
             color: #333333;
             opacity: 1;
             .detail-img {
                 display: flex;
                 flex-wrap: wrap;
                 width: 100%;
                 .detail-item {
                     margin-right: 0.2rem;
                     img {
                         width: 3.2rem;
                         height: 1.8rem;
                    }
                }
            }
        }
         .SmallHeaderTitle {
             margin-top: 0.8rem;
        }
         .upload-file {
             margin-top: 1rem;
             font-size: 0.16rem;
             color: #999999;
             opacity: 1;
        }
         .all-accessory {
             display: flex;
             width: 100%;
             flex-wrap: wrap;
             // background-color: red;
             .accessory {
                 margin-top: 0.15rem;
                 margin-right: 0.2rem;
                 width: 1.2rem;
                 height: 1.2rem;
                 background: #f6f6f8;
                 opacity: 1;
                 display: flex;
                 align-items: center;
                 flex-direction: column;
                 justify-content: center;
                 font-size: 0.14rem;
                 position: relative;
                 .delete-accessory {
                     position: absolute;
                     right: 0.05rem;
                     top: 0.05rem;
                     img {
                         width: 0.3rem;
                         height: 0.3rem;
                    }
                }
                 img {
                     width: 0.5rem;
                     height: 0.5rem;
                }
            }
        }
         .select-class {
             margin-left: 0.2rem;
             background: #ffffff;
             opacity: 1;
             display: flex;
             font-size: 0.16rem;
             color: #000000;
             margin-bottom: 0.03rem;
        }
         .score {
             display: flex;
             align-items: center;
             font-size: 0.18rem;
             color: #000000;
             margin-left: 0.2rem;
             input {
                 font-size: 0.18rem;
                 width: 1rem;
                 height: 0.44rem;
                 background: #ffffff;
                 border: 0.01rem solid #e0e0e0;
                 opacity: 1;
                 border-radius: 0.04rem;
                 margin-right: 0.1rem;
                 padding-left: 0.15rem;
            }
        }
         .detail-content {
             margin-top: 0.2rem;
             // height: 3.5rem;
             border: 0.01rem solid #e0e0e0;
             opacity: 1;
             border-radius: 0.04rem;
             .nav {
                 font-size: 0.16rem;
                 line-height: 0.54rem;
                 color: #333333;
                 opacity: 1;
                 height: 0.54rem;
                 background: #f7f6fa;
                 // border: 0.01rem solid #707070;
                 display: flex;
                 .num {
                     padding-left: 0.2rem;
                     width: 0.68rem;
                     height: 0.54rem;
                     white-space: nowrap;
                     // background-color: red;
                }
                 .text {
                     width: 5.32rem;
                     height: 0.54rem;
                     // background-color: rgb(109, 94, 94);
                }
                 .icon {
                     width: 2.08rem;
                     height: 0.54rem;
                     // background-color: rgb(26, 82, 165);
                }
                 .answer {
                     width: 5.36rem;
                     height: 0.54rem;
                     // background-color: rgba(66, 33, 33, 0.096);
                }
            }
             .contents {
                 display: flex;
                 flex-direction: column;
                 justify-content: space-between;
                 padding: 0.15rem 0.15rem 0.15rem 0rem;
                 .item {
                     cursor: pointer;
                     display: flex;
                     align-items: center;
                     line-height: 0;
                     height: 0.58rem;
                     .index {
                         // padding-left: 0.15rem;
                         // margin-right: 0.3rem;
                         // height: 0.3rem;
                         // background-color: red;
                         text-align: center;
                         // vertical-align: center;
                         width: 0.68rem;
                         font-size: 0.16rem;
                         color: #333333;
                    }
                     .input-text {
                         // margin-left: 0.6rem;
                         // height: 0.3rem;
                         // background-color: rgb(26, 82, 165);
                         width: 5.32rem;
                         display: flex;
                         align-items: center;
                         img {
                             margin-left: 0.2rem;
                             // display: flex;
                             // align-items: center;
                             width: 0.24rem;
                             height: 0.24rem;
                        }
                         input {
                             width: 3.28rem;
                             height: 0.44rem;
                             background: #ffffff;
                             border: 0.01rem solid #e0e0e0;
                             opacity: 1;
                             border-radius: 0.04rem;
                             padding-left: 0.15rem;
                             font-size: 0.16rem;
                             color: #000000;
                        }
                    }
                     .upload-icon {
                         // height: 0.3rem;
                         // background-color: rgb(104, 125, 156);
                         white-space: nowrap;
                         width: 2.36rem;
                         // width: 0.64rem;
                         height: 0.16rem;
                         font-size: 0.16rem;
                         font-family: Source Han Sans CN;
                         font-weight: 400;
                         line-height: 0.27rem;
                         color: #3980ff;
                         opacity: 1;
                    }
                     .check {
                         // height: 0.3rem;
                         width: 3.85rem;
                    }
                }
            }
        }
    }
}
 
</style>