<!--  -->
<template>
  <div class="body">
    <div class="course-content">
      <div class="course-item" v-for="(item, index) in courseContentList" :key="index">
        <div class="img" @click="toDetail()">
          <img src="@/assets/image/home/course_img1.svg" alt="" />
        </div>

        <div class="checkbox">
          <el-tooltip
            class="item"
            effect="dark"
            content="UI设计1班:第一次作业第一次作业"
            placement="top"
          >
            <a href="/course/classdetail"
              ><div class="name">
                {{item.courseName}}
              </div></a
            >
          </el-tooltip>
          <div v-if="isCheckBox" class="el-checkbox">
            <CheckBox v-model="item.select" @IsCheck="IsCheck"/>
          </div>
        </div>

        <div class="create">创建者：{{item.createName}}</div>
        <div class="bottom-message">
          <div class="classnum">班级：{{item.classNum}}</div>
          <div class="num">学生数：{{item.studentNum}}</div>
          <div class="dot" v-if="isCheckBox"></div>
          <el-dropdown trigger="click" placement="bottom-end" v-else>
            <span class="el-dropdown-link">
              <Dot />
            </span>
            <el-dropdown-menu slot="dropdown">
              <div @click="editDV = true">
                <el-dropdown-item>重命名</el-dropdown-item>
              </div>
              <div @click="deleteDV = true">
                <el-dropdown-item>删除</el-dropdown-item>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- <div class="" style="height:120px"></div> -->
    <Dialog
      :editDV="editDV"
      :deleteDV="deleteDV"
      @Cancle="(editDV = false), (deleteDV = false)"
      @editHandleClose="editDV = false"
      @deleteHandleClose="deleteDV = false"
    />
  </div>
</template>

<script>
import Dot from "@/components/Dot/Dot.vue";
import Dialog from "@/components/Dialog/Dialog.vue";
import CheckBox from "@/components/CheckBox/CheckBox.vue";
export default {
  components: {
    Dot,
    Dialog,
    CheckBox,
  },
  props: {
    courseContentList: {
      type: Array,
      default:[
        {
          id: 0,
          courseName: "UI设计课程",
          createName: "张老师",
          classNum: 100,
          studentNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
        {
          id: 1,
          courseName: "Python程序设计",
          createName: "张老师",
          classNum: 100,
          studentNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
        {
          id: 2,
          courseName: "Java面向对象",
          createName: "张老师",
          classNum: 100,
          studentNum: 100,
          time: "2021/09/21 19:45",
          select: false,
        },
      ],
    },
    isCheckBox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editDV: false,
      deleteDV: false,
      checked: false,
    };
  },
  computed: {},

  mounted() {},

  methods: {
    toDetail() {
      this.$router.push("course/coursedetail");
    },
    IsCheck() {
      let selectIdList = [];
      this.courseContentList.forEach((item) => {
        if (item.select === true) {
          selectIdList.push(item.id);
        }
      });
      this.$emit("courseContentEven", selectIdList);
    },
  },
};
</script>
<style lang='scss' scoped>
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