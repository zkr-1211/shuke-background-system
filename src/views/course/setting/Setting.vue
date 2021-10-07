<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
        <div class="left">
          <div
            class="tab"
            :class="tabIndex === index ? 'is-active' : ''"
            v-for="(item, index) in tabsTitle"
            :key="index"
            @click="selectActive(index)"
          >
            {{ item }}
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
        <div class="right" v-if="tabIndex === 0">
          <div class="right-top">
            <div class="top-bar">
              <HeaderTitle name="课程信息" />
            </div>
          </div>
          <div class="right-bottom">
            <SmallHeaderTitle name="封面设置" />
            <div class="cover">
              <img
                src="@/assets/image/course/icon_course_correction.svg"
                alt=""
              />
            </div>
            <SmallHeaderTitle name="课程名称" />
            <input type="text" class="input" placeholder="请输入内容" />
            <SmallHeaderTitle name="课程简介" />
            <textarea
              class="textarea"
              placeholder="请输入内容"
              placeholder-class="textarea-placeholder"
            />
            <div class="type">
              <SmallHeaderTitle name="课程类型" />
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
            </div>
            <div class="button">
              <button class="cancel">取消</button>
              <Button name="保存" />
            </div>
          </div>
        </div>
        <div class="right" v-else-if="tabIndex === 1">
          <div class="right-top">
            <div class="top-bar">
              <HeaderTitle name="付费设置" />
            </div>
          </div>
          <div class="right-bottom">
            <div class="is-pay">
              <SmallHeaderTitle name="是否开启付费" />
              <el-radio v-model="radio" label="开启" @change="isPay"
                >开启</el-radio
              >
              <el-radio v-model="radio" label="关闭" @change="isPay"
                >关闭</el-radio
              >
            </div>
            <div :class="radio === '关闭' ? 'isPay' : ''">
              <div class="type">
                <SmallHeaderTitle name="付费类型" />
                <div class="select-class">
                  <el-select
                    v-model="value"
                    placeholder="请选择"
                    :disabled="radio === '关闭'"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <SmallHeaderTitle name="显示课程金额" />
              <input
                :readonly="radio === '关闭'"
                type="text"
                class="course-money"
                placeholder="请输入内容"
              />
            </div>

            <div class="button">
              <button class="cancel">取消</button>
              <Button name="保存" />
            </div>
          </div>
        </div>
        <div class="right" v-else-if="tabIndex === 2">
          <div class="right-top">
            <div class="top-bar">
              <HeaderTitle name="详情页设置" />
            </div>
          </div>
          <div class="right-bottom">
            <div class="button1">
              <button class="cancel">删除</button>
              <Button name="上传图片" v-if="true" />
              <Button name="重新上传" v-else />
            </div>
            <div class="image" v-if="true">
              <div class="centet-img">
                <div class="img">
                  <img src="@/assets/image/course/ic_photo.svg" alt="" />
                </div>
                <div class="text">文件格式png*jpg,大小不超过10M</div>
              </div>
            </div>
            <div class="content-img" v-else>
              <img src="@/assets/image/course/ic_photo.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="right" v-else>
          <div class="right-top">
            <div class="top-bar">
              <HeaderTitle name="课程学习码" />
              <div class="buttons">
                <Button name="导出表格" />
                <Button name="添加新码" class="Button" />
              </div>
            </div>
          </div>
          <div class="right-bottom1">
            <Navigation :tabList="tabList" @tabsIndex="tabsIndex" />
            <ProblemSetDetail />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle.vue";
import Button from "@/components/button/Button.vue";
import SmallHeaderTitle from "@/components/smallHeaderTitle/SmallHeaderTitle.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import ProblemSetDetail from "@/components/problemSetDetail/ProblemSetDetail.vue";
export default {
  components: {
    HeaderTitle,
    SmallHeaderTitle,
    Button,
    ProblemSetDetail,
    Navigation,
  },
  data() {
    return {
      tabIndex: 0,
      tabsTitle: ["课程信息", "付费设置", "详情页设置", "课程学习码"],
      radio: "开启",
      value: "",
      options: [
        {
          value: "选项1",
          label: "全部班级",
        },
        {
          value: "选项2",
          label: "全部班级",
        },
        {
          value: "选项3",
          label: "全部班级",
        },
        {
          value: "选项4",
          label: "全部班级",
        },
        {
          value: "选项5",
          label: "全部班级",
        },
      ],
      tabList: [
        {
          title: "全部",
        },
        {
          title: "已使用",
        },
        {
          title: "未使用",
        },
      ],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    selectActive(index) {
      this.tabIndex = index;
    },
    isPay(e) {
      // console.log("e", e,this.radio)
    },
  },
};
</script>
<style lang='scss' scoped>
.breadcrumb {
     margin-bottom: 0.12rem;
}
 .left {
     // width: 2.14rem;
     height: 9.36rem;
     background: #ffffff;
     opacity: 1;
     border-radius: 0.04rem;
     padding-top: 0.7rem;
     margin-bottom: 0.12rem;
     .tab {
         height: 0.6rem;
         background: #ffffff;
         font-size: 0.14rem;
         font-weight: bold;
         color: #666666;
         display: flex;
         align-items: center;
         justify-content: center;
         &:hover {
             background-color: #fafafa;
             color: #2a77ff;
        }
    }
     .is-active {
         background-color: #fafafa;
         color: #2a77ff;
    }
     .tab1 {
         &:hover {
             // background-color: red;
        }
    }
}
 .right {
     // width: 13.38rem;
     height: 8.43rem;
     // background: #994545;
     opacity: 1;
     border-radius: 0.04rem;
     // position: relative;
     .right-top {
         // width: 13.38rem;
         height: 0.74rem;
         background: #ffffff;
         box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
         opacity: 1;
         margin-bottom: 0.19rem;
         .top-bar {
             // margin-top: 0.12rem;
             // width: 15.84rem;
             height: 0.8rem;
             background: #ffffff;
             box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
             position: relative;
             display: flex;
             align-items: center;
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
             .buttons {
                 display: flex;
                 margin-right: 0.3rem;
                 font-size: 0.14rem;
                 font-weight: bold;
                 color: #f4f4f4;
                 position: absolute;
                 right: 0.3rem;
                 .Button {
                     margin-left: 0.2rem;
                }
            }
        }
    }
     .right-bottom {
         // width: 13.38rem;
         padding: 0.6rem;
         height: 8.43rem;
         background: #ffffff;
         opacity: 1;
         border-radius: 0.04rem;
         position: relative;
         .cover {
             margin-top: 0.16rem;
             width: 2.4rem;
             height: 1.36rem;
             background: rgba(0, 0, 0, 1);
             opacity: 1;
             border-radius: 0.08rem;
             overflow: hidden;
             margin-bottom: 0.4rem;
             img {
                 object-fit: cover;
                 width: 2.4rem;
                 height: 1.36rem;
            }
        }
         .button {
             // margin-top: 0.57rem;
             display: flex;
             align-items: center;
             justify-content: center;
             position: absolute;
             left: 50%;
             transform: translate(-50%,-50%);
             bottom: 0.6rem;
             .cancel {
                 margin-right: 0.3rem;
                 min-width: 0.8rem;
                 height: 0.4rem;
                 background: #ffffff;
                 border: 0.01rem solid #e0e0e0;
                 box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.01);
                 border-radius: 0.04rem;
                 // width: 0.36rem;
                 font-size: 0.14rem;
                 font-weight: bold;
                 color: #666666;
                 &:hover {
                     // opacity: 0.9;
                     background-color: #eceaea;
                }
                 &:active {
                     // opacity: 0.6;
                     background-color: #e0e0e0;
                }
            }
        }
    }
     .right-bottom1 {
         // width: 13.38rem;
         // padding: 0.6rem;
         height: 8.43rem;
         // background: #ffffff;
         opacity: 1;
         border-radius: 0.04rem;
         .cover {
             margin-top: 0.16rem;
             width: 2.4rem;
             height: 1.36rem;
             background: rgba(0, 0, 0, 1);
             opacity: 1;
             border-radius: 0.08rem;
             overflow: hidden;
             margin-bottom: 0.4rem;
             img {
                 object-fit: cover;
                 width: 2.4rem;
                 height: 1.36rem;
            }
        }
    }
     .input {
         width: 100%;
         height: 0.42rem;
         background: #ffffff;
         border: 0.01rem solid #e0e0e0;
         opacity: 1;
         border-radius: 0.04rem;
         padding-left: 0.3rem;
         // line-height: 0;
         display: flex;
         margin-top: 0.16rem;
         margin-bottom: 0.4rem;
    }
     .textarea {
         margin-top: 0.16rem;
         width: 100%;
         height: 1.6rem;
         background: #ffffff;
         border: 0.01rem solid #e0e0e0;
         opacity: 1;
         border-radius: 0.04rem;
         resize: none;
         padding-left: 0.3rem;
         padding-top: 0.25rem;
    }
     .isPay {
         opacity: 0.5;
    }
     .type {
         display: flex;
         align-items: center;
         margin-bottom: 0.4rem;
         // justify-content: center;
         .select-class {
             margin-left: 0.2rem;
             // width: 2rem;
             // height: 0.8rem;
             background: #ffffff;
             opacity: 1;
             display: flex;
             // align-items: center;
             // justify-content: center;
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
    }
     .button1 {
         margin-left: 0.05rem;
         display: flex;
         align-items: center;
         // justify-content: center;
         // position: absolute;
         // left: 50%;
         // bottom: 0.6rem;
         .cancel {
             margin-right: 0.3rem;
             min-width: 0.8rem;
             width: 1rem;
             height: 0.4rem;
             background: #ffffff;
             border: 0.01rem solid #e0e0e0;
             box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.01);
             border-radius: 0.04rem;
             // width: 0.36rem;
             font-size: 0.14rem;
             font-weight: bold;
             color: #666666;
             &:hover {
                 // opacity: 0.9;
                 background-color: #eceaea;
            }
             &:active {
                 // opacity: 0.6;
                 background-color: #e0e0e0;
            }
        }
    }
     .image {
         margin-top: 0.3rem;
         width: 50%;
         height: 4.25rem;
         background: #f7f6fa;
         opacity: 1;
         display: flex;
         align-items: center;
         justify-content: center;
         .centet-img {
             display: flex;
             flex-direction: column;
             align-items: center;
             justify-content: center;
             .img {
                 display: flex;
                 align-items: center;
                 img {
                     width: 1rem;
                     height: 1rem;
                }
            }
             .text {
                 margin-top: 0.12rem;
                 font-size: 0.14rem;
                 color: #666666;
            }
        }
    }
     .content-img {
         margin-top: 0.1rem;
         // width: 100%;
         // height: 100%;
         img {
             // width: 6.4rem;
             // height: 7.4rem;
             opacity: 1;
        }
    }
     .is-pay {
         display: flex;
         align-items: center;
         font-size: 0.18rem;
         color: #333333;
         margin-bottom: 0.4rem;
         .el-radio {
             margin-left: 0.2rem;
             font-size: 0.18rem;
             color: #333333;
        }
    }
     .course-money {
         width: 2.8rem;
         // min-width: 2.4rem;
         height: 0.42rem;
         background: #ffffff;
         border: 0.01rem solid #e0e0e0;
         opacity: 1;
         border-radius: 0.04rem;
         padding-left: 0.3rem;
         // line-height: 0;
         display: flex;
         margin-top: 0.16rem;
         margin-bottom: 0.4rem;
    }
}
 ::v-deep .el-radio__inner {
     border-radius: 0%;
     width: 0.2rem;
     height: 0.2rem;
     background: #5592fe;
     border: 0.02rem solid #999999;
     border-radius: 0.02rem;
     background-color: #fff;
     cursor: pointer;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
}
 ::v-deep .el-radio__label {
     font-size: 0.18rem;
     color: #333333;
     padding-left: 0.1rem;
}
 // 选中后的图片添加 
 ::v-deep .el-radio__input.is-checked .el-radio__inner {
     border: 1.0.05rem solid #2a77ff;
     background: none;
     background-repeat: no-repeat;
     background-size: cover;
     background-image: url(../../../assets/image/course/icon_radio_s.svg);
}
 // 选中后的背景颜色 
 ::v-deep .el-radio__inner::after {
     background-color: rgba(0, 0, 0, 0);
}
 // 选中后的字体颜色 
 ::v-deep .el-radio__input.is-checked + .el-radio__label {
     color: #333333;
}
 
</style>