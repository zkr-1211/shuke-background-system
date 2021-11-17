<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>UI设计教育课程</el-breadcrumb-item>
        <el-breadcrumb-item>班级</el-breadcrumb-item>
        <el-breadcrumb-item>班级详情</el-breadcrumb-item>
        <el-breadcrumb-item>上传资源</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="32" class="el-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
        <div class="left">
          <div class="bottom-left">
            <TopBar name="课程大纲">
              <template slot="A">
                <Button name="添加章节">
                  <img src="@/assets/image/course/ic_button_see.svg" alt="" />
                </Button>
              </template>
            </TopBar>

            <CourseOutline :isUploadResource="true" />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
        <div class="right">
          <div class="bottom-right">
            <TopBar name="小节资源">
              <div slot="A" class="delete-select">删除选中</div>
              <el-dropdown trigger="click" placement="bottom-end" slot="B">
                <span class="el-dropdown-link">
                  <Button name="添加资源">
                    <img src="@/assets/image/course/ic_button_see.svg" alt="" />
                  </Button>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>从网盘中</el-dropdown-item>
                  <el-dropdown-item>从本地中</el-dropdown-item>
                  <el-dropdown-item>从题集中</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </TopBar>

            <!-- <CourseOutline ChapterIssue='true' /> -->
          </div>
          <div class="right-content">
            <div class="course-title"><span>01：</span> 什么是web程序应用</div>
            <div class="topNav">
              <div
                class="title"
                @click="isUpload = false"
                :style="{ backgroundColor: isUpload ? '#EDEFF3' : '' }"
              >
                全部
              </div>
              <div
                class="title"
                @click="isUpload = true"
                :style="{ backgroundColor: isUpload ? '' : '#EDEFF3' }"
              >
                正在上传
              </div>
              <div class="totalFile">共0个文件</div>
            </div>
            <div class="contentNav">
              <div class="select-all">
                <!-- <el-checkbox :isIndeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox> -->
                <el-checkbox
                  :Indeterminate="isIndeterminate"
                  v-model="checkAll"
                  @change="handleCheckAllChange"
                ></el-checkbox>
              </div>
              <div class="file-name">文件名</div>
              <div class="file-size" v-if="!isUpload">大小</div>
              <div class="file-size" v-else>进度</div>
              <div class="operate">操作</div>
            </div>
            <div class="tableContent">
              <div v-if="!isUpload">
                <SectionOutline
                  :isUploadResource="true"
                  :checkAll="checkAll"
                  @isCheck="checkAll = false"
                  @lockClick="lockClick"
                />
              </div>

              <!-- isUpload -->
              <div v-else class="upload-content">
                <div class="item" v-for="(item, index) in 10" :key="index">
                  <div class="el-checkbox">
                    <el-checkbox
                      :Indeterminate="isIndeterminate"
                      v-model="checkAll"
                      @change="handleCheckAllChange"
                    ></el-checkbox>
                  </div>

                  <div class="icon">
                    <img
                      src="@/assets/image/course/ic_locking_off.svg"
                      alt=""
                    />
                  </div>
                  <div class="title">图标设计技巧.mp4</div>
                  <div class="size">
                    <el-progress
                      class="el-progress"
                      :show-text="false"
                      :stroke-width="12"
                      :percentage="70"
                    ></el-progress>
                    <div style="text-align: left">100/200</div>
                  </div>
                  <div class="lock1" @click.stop="lockClick(index)">
                    <img
                      src="@/assets/image/course/ic_locking_off.svg"
                      alt=""
                    />
                  </div>
                  <div class="look2">
                    <img src="@/assets/image/course/ic_visual_on.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="upload-dialgo" v-if="!Open">
                <div class="upload-num">正在上传（10/12）</div>
                <div class="img">
                  <img
                    @click="Open = true"
                    src="@/assets/image/course/ic_button_see.svg"
                    alt=""
                  />
                  <img src="@/assets/image/course/ic_button_see.svg" alt="" />
                </div>
              </div>
              <div class="upload-dialgo-open" v-else>
                <div class="top">
                  <div class="upload-num">正在上传</div>
                  <div class="img">
                    <img
                      @click="Open = false"
                      src="@/assets/image/course/ic_button_see.svg"
                      alt=""
                    />
                    <img src="@/assets/image/course/ic_button_see.svg" alt="" />
                  </div>
                </div>
                <div class="notic">
                  <div>
                    违反利用树课网盘上传，传播暴力恐怖，色情违法和侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理的规定。
                  </div>
                  <div>
                    <img src="@/assets/image/course/ic_button_see.svg" alt="" />
                  </div>
                </div>
                <div class="content">
                  <div
                    class="item"
                    v-for="(item, index) in options"
                    :key="index"
                  >
                    <div class="file-icon">
                      <img
                        src="@/assets/image/course/ic_button_see.svg"
                        alt=""
                      />
                    </div>
                    <div class="file-name">{{ item.fileName }}</div>
                    <div class="file-size">1000Mb</div>
                    <div class="class-name">大数据技术与科学…</div>
                    <div class="dagit-rate">30.83%（100KB/s）</div>
                    <div class="image">
                      <img
                        src="@/assets/image/course/ic_button_see.svg"
                        alt=""
                      />
                      <img
                        src="@/assets/image/course/ic_button_see.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
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
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import CourseOutline from "@/components/CourseOutline/CourseOutline.vue";
import SectionOutline from "@/components/SectionOutline/SectionOutline.vue";
import Button from "@/components/Button/Button.vue";
const cityOptions = ["上海"];
export default {
  components: {
    TopBar,
    CourseOutline,
    SectionOutline,
    Button,
  },

  data() {
    return {
      Open: false,
      // 是否为上传tabs
      isUpload: false,
      lockDV: false,
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
          fileName: "高等数学复习资料等数学复习等数学复习等数学复习等数学复习",
        },
        {
          value: "选项2",
          label: "双皮奶",
          fileName:
            "高等数学复习资料2高等数学复习资料等数学复习等数学复习等数学复习等数学复习",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
          fileName:
            "高等数学复习资料2高等数学复习资料等数学复习等数学复习等数学复习等数学复习",
        },
        {
          value: "选项4",
          label: "龙须面",
          fileName:
            "高等数学复习资料2高等数学复习资料等数学复习等数学复习等数学复习等数学复习",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
          fileName: "高等数学复习资料2",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
          fileName: "高等数学复习资料2",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
          fileName: "高等数学复习资料2",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
          fileName: "高等数学复习资料2",
        },
      ],
      value: "",
    };
  },
  computed: {},

  mounted() {},

  methods: {
    handleCheckAllChange(val) {
      // this.checkAll = !this.checkAll;
      // this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    lockClick(e) {
      this.lockDV = true;
      console.log("e", e);
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
    .delete-select {
      cursor: pointer;
      margin-right: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.14rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #666666;
      width: 1.04rem;
      height: 0.4rem;
      background: #ffffff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.16);
      opacity: 1;
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
      cursor: pointer;
      margin-top: 0.12rem;
      display: flex;
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
        margin-left: 0.3rem;
        width: 0.7rem;
        margin-top: 0.02rem;
      }
      .file-name {
        white-space: nowrap;
        width: 3.35rem;
      }
      .file-size {
        white-space: nowrap;
      }
      .operate {
        white-space: nowrap;
        text-align: center;
        width: 3.5rem;
        padding-left: 0.95rem;
      }
    }
    .tableContent {
      height: 7rem;
      overflow: overlay;
      position: relative;
      .upload-dialgo-open {
        z-index: 999999;
        width: 100%;
        position: absolute;
        bottom: 0.1rem;
        height: 4rem;
        background: #ffffff;
        box-shadow: 0rem 0.03rem 0.2rem rgba(0, 0, 0, 0.1);
        .upload-num {
          margin-left: 0.18rem;
          font-size: 0.16rem;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 0.48rem;
          color: #7c878e;
          opacity: 1;
        }
        .img {
          display: flex;
          align-items: center;
          background-color: #2a77ff;
          img {
            cursor: pointer;
            margin-right: 0.14rem;
          }
        }
        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .notic {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 0.5rem;
          background: #2980ff;
          opacity: 0.49;
          font-size: 0.16rem;
          font-weight: 600;
          color: #ffffff;
          padding: 0.2rem;
          img {
            display: flex;
          }
        }
        .content {
          height: 3rem;
          overflow: overlay;
          .item {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 0.5rem;
            .file-icon {
              background-color: #2a77ff;
              img {
                display: flex;
              }
            }
            .file-name {
              width: 1.53rem;
              height: 0.22rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 0.16rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 0.19rem;
              color: #020202;
              opacity: 1;
            }
            .file-size {
              width: 0.6rem;
              font-size: 0.16rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .class-name {
              width: 1.44rem;
              font-size: 0.16rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .dagit-rate {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 1.8rem;
              height: 0.22rem;
              font-size: 0.16rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 0.19rem;
              color: #7c878e;
              opacity: 1;
            }
            .image {
              background-color: #2a77ff;
              display: flex;
              img {
                display: flex;
                margin-left: 0.15rem;
              }
            }
          }
        }
      }
      .upload-dialgo {
        position: absolute;
        bottom: 0.1rem;
        width: 100%;
        height: 0.48rem;
        z-index: 9;
        background-color: #ffffff;
        box-shadow: 0rem 0.03rem 0.2rem rgba(0, 0, 0, 0.16);
        border-left: 0.06rem solid #2a77ff;
        display: flex;
        justify-content: space-between;
        .upload-num {
          margin-left: 0.18rem;
          font-size: 0.16rem;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 0.48rem;
          color: #7c878e;
          // letter-spacing: 0.02rem;
          opacity: 1;
        }
        .img {
          display: flex;
          align-items: center;
          background-color: #2a77ff;
          img {
            cursor: pointer;
            margin-right: 0.14rem;
          }
        }
      }
      .upload-content {
        .item {
          display: flex;
          align-items: center;
          height: 0.5rem;
          padding: 0.3rem 0.3rem 0.3rem 0.28rem;
          border-bottom: 0.01rem solid #e0e0e0;
          .el-checkbox {
            // margin-left: 15;
          }
          .icon {
            margin-left: 0.15rem;
            display: flex;
            img {
              width: 0.3rem;
              height: 0.3rem;
            }
          }
          .title {
            width: 3.2rem;
            font-size: 0.16rem;
            color: #333333;
            opacity: 1;
            white-space: nowrap;
          }
          .size {
            width: 0.8rem;
            // display: none;
            font-size: 0.16rem;
            .el-progress {
              display: flex;
              align-items: center;
              // width: 1.2rem;
              margin-bottom: 0.05rem;
              ::v-deep .el-progress-bar__inner {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background-color: #409eff;
                text-align: right;
                border-radius: 0rem !important;
                line-height: 1;
                white-space: nowrap;
                transition: width 0.6s ease;
              }
            }
          }
          .lock1 {
            // position: absolute;
            // width: ;
            display: flex;
            margin-left: 1.5rem;
            img {
              width: 0.34rem;
              height: 0.34rem;
            }
          }
          .look2 {
            margin-left: 0.2rem;
            display: flex;
            img {
              width: 0.34rem;
              height: 0.34rem;
            }
          }
        }
      }
    }
  }
}
</style>