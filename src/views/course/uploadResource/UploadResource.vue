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
                  <img src="@/assets/image/course/ic_button_add.svg" alt="" />
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
                    <img src="@/assets/image/course/ic_button_add.svg" alt="" />
                  </Button>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="diskDv = true">从网盘中</el-dropdown-item>
                  <el-dropdown-item @click.native="localDv = true">从本地中</el-dropdown-item>
                  <el-dropdown-item @click.native="problemSetDv = true">从题集中</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </TopBar>

            <!-- <CourseOutline ChapterIssue='true' /> -->
          </div>
          <div class="right-content">
            <div class="course-title"><span>01：</span> 什么是web程序应用</div>
            <div class="topNav">
              <div class="title" @click="isUpload = false" :style="{ backgroundColor: isUpload ? '#EDEFF3' : '' }">
                全部
              </div>
              <div class="title" @click="isUpload = true" :style="{ backgroundColor: isUpload ? '' : '#EDEFF3' }">
                正在上传
              </div>
              <div class="totalFile">共0个文件</div>
            </div>
            <div class="contentNav">
              <div class="select-all">
                <!-- <el-checkbox :isIndeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox> -->
                <CheckBox v-model="isCheckedAll" @IsCheck='IsCheckAll' />
              </div>
              <div class="file-name">文件名</div>
              <div class="file-size" v-if="!isUpload">大小</div>
              <div class="file-size" v-else>进度</div>
              <div class="operate">操作</div>
            </div>
            <div class="tableContent">
              <div v-if="!isUpload">
                <SectionOutline :isUploadResource="true" @isCheck="isCheckedAllTf" @lockClick="lockClick" :sectionOutlineList='sectionOutlineList'/>
              </div>

              <!-- isUpload -->
              <div v-else class="upload-content">
                <div class="item" v-for="(item, index) in options" :key="index">
                  <div class="el-checkbox">
                    <CheckBox v-model="item.isCheck" @IsCheck='IsCheck' />
                  </div>

                  <div class="icon">
                    <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
                  </div>
                  <div class="title">图标设计技巧.mp4</div>
                  <div class="size">
                    <el-progress class="el-progress" :show-text="false" :stroke-width="12" :percentage="70"></el-progress>
                    <div style="text-align: left">100/200</div>
                  </div>
                  <div class="lock1" @click.stop="lockClick(index)">
                    <img src="@/assets/image/course/ic_chapter_dowload.svg" alt="" />
                  </div>
                  <div class="look2">
                    <img src="@/assets/image/course/ic_chapter_delete.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="upload-dialgo" v-if="!Open">
                <div class="upload-num">正在上传（10/12）</div>
                <div class="img">
                  <img @click="Open = true" src="@/assets/image/course/icon_radio_n.svg" alt="" />
                  <img src="@/assets/image/course/ic_delete.svg" alt="" />
                </div>
              </div>
              <div class="upload-dialgo-open" v-else>
                <div class="top">
                  <div class="upload-num">正在上传</div>
                  <div class="img">
                    <img @click="Open = false" src="@/assets/image/course/ic_shrink.svg" alt="" />
                    <img src="@/assets/image/course/ic_delete.svg" alt="" />
                  </div>
                </div>
                <div class="notic">
                  <div>
                    违反利用树课网盘上传，传播暴力恐怖，色情违法和侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理的规定。
                  </div>
                  <div>
                    <img src="@/assets/image/course/ic_delete.svg" alt="" />
                  </div>
                </div>
                <div class="content">
                  <div class="item" v-for="(item, index) in options" :key="index">
                    <div class="file-icon">
                      <img src="@/assets/image/course/ic_wold.svg" alt="" />
                    </div>
                    <div class="file-name">{{ item.fileName }}</div>
                    <div class="file-size">1000Mb</div>
                    <div class="class-name">大数据技术与科学…</div>
                    <div class="dagit-rate">30.83%（100KB/s）</div>
                    <div class="image">
                      <img src="@/assets/image/course/ic_pause.svg" alt="" />
                      <img src="@/assets/image/course/ic_delete.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--从题集中选择上传  -->
    <el-dialog title="" :visible.sync="problemSetDv" width="30%" :show-close="false" top="10vh">
      <!-- <div class="what"><img src="@/assets/image/course/ic_button_unsee.svg" alt=""></div> -->
      <div class="d">
        <div>
          <h2>从题集中选择上传</h2>
        </div>
      </div>

      <!-- <span class="select-num">已选中10人</span> -->

      <div class="quan-xian">
        <h2>全部题集</h2>
        <div class="quanxian-item" v-for="(item, index) in 10" :key="index">
          <div class="">
            <img src="@/assets/image/course/icon_complete.svg" alt="" />
          </div>
          <div class="name">2019数字媒体技术1班</div>

          <div class="checkbox">
            <CheckBox />
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <span class="delete-man">删除成员</span> -->
        <el-button class="cancel-button" @click="problemSetDv = false">取 消</el-button>
        <el-button type="primary" @click="problemSetDv = false">添加</el-button>
      </span>
    </el-dialog>
    <!--从网盘中选择添加 -->
    <el-dialog title="" :visible.sync="diskDv" width="30%" :show-close="false" top="10vh">
      <!-- <div class="what"><img src="@/assets/image/course/ic_button_unsee.svg" alt=""></div> -->
      <div class="d">
        <div>
          <h2>从网盘中选择添加</h2>
        </div>
      </div>

      <!-- <span class="select-num">已选中10人</span> -->

      <div class="quan-xian">
        <h2>全部</h2>

        <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps" :highlight-current="true" ref="trees">
          <span class="custom-tree-node" slot-scope="{ data }">
            <div class="icon">
              <img v-if="data.icon === 'wps'" src="@/assets/image/course/ic_wold.svg" alt="" />
              <img v-else-if="data.icon === 'pdf'" src="@/assets/image/course/ic_ppt.svg" alt="" />
              <img v-else-if="data.icon === 'mp4'" src="@/assets/image/course/ic_class_invitation.svg" alt="" />
              <img v-else-if="data.icon === 'png'" src="@/assets/image/home/icon_shuke.svg" alt="" />
              <img v-else-if="data.icon === 'jpg'" src="@/assets/image/course/ic_class_invitation.svg" alt="" />
              <img v-else src="@/assets/image/course/ic_folder.svg" alt="" />
              <span>{{ data.label }}</span>
            </div>
          </span>
        </el-tree>
        <!-- <img src="@/assets/image/course/ic_button_see.svg" alt=""> -->
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <span class="delete-man">删除成员</span> -->
        <el-button class="cancel-button" @click="diskDv = false">取 消</el-button>
        <el-button type="primary" @click="add()">添加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TopBar from "@/components/topBar/TopBar.vue";
import CourseOutline from "@/components/courseOutline/CourseOutline.vue";
import SectionOutline from "@/components/sectionOutline/SectionOutline.vue";
import Button from "@/components/button/Button.vue";
import CheckBox from "@/components/checkBox/CheckBox.vue";
const cityOptions = ["上海"];
export default {
  components: {
    TopBar,
    CourseOutline,
    SectionOutline,
    Button,
    CheckBox,
  },

  data() {
    return {
      Open: false,
      // 是否为上传tabs
      isUpload: false,
      problemSetDv: false,
      diskDv: false,
      diskDv: false,
      checkAll: false,
      isCheckedAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
          fileName: "高等数学复习资料等数学复习等数学复习等数学复习等数学复习",
          isCheck: false,
        },
        {
          value: "选项2",
          label: "双皮奶",
          fileName:
            "高等数学复习资料2高等数学复习资料等数学复习等数学复习等数学复习等数学复习",
          isCheck: false,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
          fileName:
            "高等数学复习资料2高等数学复习资料等数学复习等数学复习等数学复习等数学复习",
          isCheck: false,
        },
      ],
      value: "",
      data: [
        {
          id: 1,
          label: "设计课程文件",
          icon: "",
          children: [
            {
              id: 4,
              label: "设计课程文件 1-1",
              icon: "wps",
              children: [
                {
                  id: 9,
                  label: "设计课程文件 1-1-1",
                  icon: "pdf",
                },
                {
                  id: 10,
                  label: "设计课程文件 1-1-2",
                  icon: "wps",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "设计课程文件 2",
          icon: "",
          children: [
            {
              id: 5,
              label: "设计课程文件 2-1",
              icon: "pdf",
            },
            {
              id: 6,
              label: "设计课程文件 2-2",
              icon: "wps",
            },
          ],
        },
        {
          id: 3,
          label: "设计课程文件 3",
          icon: "",
          children: [
            {
              id: 7,
              label: "设计课程文件 3-1",
              icon: "wps",
            },
            {
              id: 8,
              label: "设计课程文件 3-2",
              icon: "wps",
            },
          ],
        },
      ],
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
      defaultProps: {
        children: "children",
        label: "label",
      },
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
      this.problemSetDv = true;
      console.log("e", e);
    },
    IsCheckAll() {
      let flag = this.isCheckedAll;
      this.options.forEach((item) => {
        item.isCheck = flag;
      });
      this.sectionOutlineList.forEach((item) => {
        item.isCheck = flag;
      });
    },
    IsCheck() {
      let state = this.options.every((item) => {
        return item.isCheck;
      });
      if (state) {
        this.isCheckedAll = true;
      } else {
        this.isCheckedAll = false;
      }
    },
    change() {
      // let flag = !this.isCheckedAll;
      // this.options.forEach((item) => {
      //   item.isCheck = flag;
      // });
    },
    isCheckedAllTf(e) {
      if (e) {
        this.isCheckedAll = true;
      } else {
        this.isCheckedAll = false;
      }
    },
    add() {
      this.diskDv = false;
      // 返回一个数组里边包含着子节点和父节点
      console.log(
        "object",
        this.$refs.trees
          .getCheckedKeys()
          .concat(this.$refs.trees.getHalfCheckedKeys())
      );
    },
  },
};
</script>
<style lang='scss' scoped>
//选择框.el-checkbox__inner
::v-deep .el-checkbox__inner {
  margin-left: 0.2rem;
  display: inline-block;
  position: relative;
  border: 0.02rem solid #999999;
  border-radius: 0.02rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0.2rem;
  height: 0.2rem;
  background-color: #fff;
  z-index: 1;

  -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
::v-deep .el-checkbox__inner::after {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  content: "";
  border-left: 0;
  border-top: 0;
  height: 0.07rem;
  left: 0.06rem;
  position: absolute;
  top: 0.025rem;
  -webkit-transform: rotate(45deg) scaleY(0);
  transform: rotate(45deg) scaleY(0);
  width: 0.04rem;
  -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
  transition: -webkit-transform 0.15s ease-in 0.05s;
  transition: transform 0.15s ease-in 0.05s;
  transition: transform 0.15s ease-in 0.05s,
    -webkit-transform 0.15s ease-in 0.05s;
  -webkit-transform-origin: center;
  transform-origin: center;
}
::v-deep .el-tree-node__content {
  display: flex;
  align-items: center;
  height: 0.5rem;
  cursor: pointer;
  .el-tree-node__label {
    font-size: 0.16rem;
    margin-left: 0.3rem;
  }
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
.el-checkbox {
  display: flex;
  align-items: center;
}
.d {
  display: flex;
}
.lock-what {
  // background-color: firebrick;
  // line-height: 35px;
  img {
    margin-left: 0.12rem;
    padding-top: 5px;
    // margin-right: 0.12rem;
    // width: 20px;
    // height: 20px;
  }
}
.what {
  display: flex;
  align-items: center;
  // background-color: firebrick;

  img {
    margin-right: 0.12rem;
    display: flex;
    // width: 20px;
    // height: 20px;
  }
}
.quan-xian {
  // width: 5.3rem;
  height: 4.9rem;
  overflow-y: auto;
  position: relative;
  margin-top: 0.12rem;
  padding: 0.3rem;
  h2 {
    margin-bottom: 0.2rem;
    font-size: 0.15rem;
  }

  .icon {
    display: flex;
    align-items: center;
    img {
      margin-right: 14px;
      margin-left: 6px;
      width: 30px;
      height: 30px;
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
    position: relative;
    img {
      display: flex;
    }
    .name {
      font-size: 0.16rem;
      color: #212121;
      margin-left: 0.16rem;
    }
    .checkbox {
      position: absolute;
      right: 50px;
    }
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
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #666666;
      width: 104px;
      height: 40px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.16);
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
        margin-left: 0.28rem;
        width: 90px;
        margin-top: 0.02rem;
      }
      .file-name {
        white-space: nowrap;
        width: 340px;
      }
      .file-size {
        white-space: nowrap;
      }

      .operate {
        white-space: nowrap;
        text-align: center;
        width: 350px;
        padding-left: 95px;
      }
    }
    .tableContent {
      height: 7rem;
      overflow: auto;
      position: relative;
      .upload-dialgo-open {
        z-index: 999999;
        width: 100%;
        position: absolute;
        bottom: 0.1rem;
        height: 400px;
        background: #ffffff;
        box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
        .upload-num {
          margin-left: 18px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 48px;
          color: #7c878e;
          opacity: 1;
        }
        .img {
          display: flex;
          align-items: center;
          // background-color: #2a77ff;
          img {
            cursor: pointer;
            margin-right: 14px;
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
          height: 50px;
          background: #2980ff;
          opacity: 0.49;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          padding: 20px;
          img {
            display: flex;
          }
        }
        .content {
          height: 300px;
          overflow: auto;
          .item {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 50px;
            .file-icon {
              // background-color: #2a77ff;
              img {
                display: flex;
              }
            }
            .file-name {
              width: 153px;
              height: 22px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 19px;
              color: #020202;
              opacity: 1;
            }
            .file-size {
              width: 60px;
              font-size: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .class-name {
              width: 144px;
              font-size: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .dagit-rate {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 180px;
              height: 22px;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 19px;
              color: #7c878e;
              opacity: 1;
            }
            .image {
              // background-color: #2a77ff;
              display: flex;
              img {
                display: flex;
                margin-left: 15px;
              }
            }
          }
        }
      }
      .upload-dialgo {
        position: absolute;
        bottom: 0.1rem;
        width: 100%;
        height: 48px;
        z-index: 9;
        background-color: #ffffff;
        box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
        border-left: 6px solid #2a77ff;
        display: flex;
        justify-content: space-between;
        .upload-num {
          margin-left: 18px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 48px;
          color: #7c878e;
          //   letter-spacing: 2px;
          opacity: 1;
        }
        .img {
          display: flex;
          align-items: center;
          // background-color: #2a77ff;
          img {
            cursor: pointer;
            margin-right: 14px;
          }
        }
      }
      .upload-content {
        .item {
          display: flex;
          align-items: center;
          height: 50px;
          padding: 30px 30px 30px 28px;
          border-bottom: 1px solid #e0e0e0;
          .el-checkbox {
            //   margin-left: 15;
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
            width: 315px;
            font-size: 16px;
            color: #333333;
            opacity: 1;
            white-space: nowrap;
          }
          .size {
            width: 70px;
            //   display: none;
            font-size: 16px;
            .el-progress {
              display: flex;
              align-items: center;
              //   width: 120px;
              margin-bottom: 5px;
              ::v-deep .el-progress-bar__inner {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background-color: #409eff;
                text-align: right;
                border-radius: 0px !important;
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