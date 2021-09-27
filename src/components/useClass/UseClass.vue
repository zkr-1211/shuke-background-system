<!--  -->
<template>
  <div class="body">
    <TopBar :name="name" />
    <div class="right-bottom-content">
      <div v-if="classList.length === 0" class="null-class">暂无班级</div>
      <div class="item" v-for="(item, index) in classList" :key="index">
        <div class="class">{{ item.className }}</div>
        <div class="remove" @click="deleteClass(item.id)">移除</div>
        <el-dropdown trigger="click" placement="bottom-end" class="dot">
          <span class="el-dropdown-link">
            <Dot />
          </span>
          <el-dropdown-menu slot="dropdown">
            <div>
              <el-dropdown-item>编辑</el-dropdown-item>
            </div>
            <div>
              <el-dropdown-item>删除</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="add">
      <div class="icon">
        <img src="@/assets/image/course/icon_add_n.svg" alt="" />
      </div>
      <div class="text">添加班级</div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/topBar/TopBar";
import Dot from "@/components/dot/Dot";
export default {
  components: {
    TopBar,
    Dot,
  },
  props: {
    name: {
      type: String,
      default: "默认标题",
    },
  },
  data() {
    return {
      classList: [
        {
          id: 0,
          className: "19数字媒体技术",
        },
        {
          id: 1,
          className: "19数字媒体技术",
        },
        {
          id: 2,
          className: "19数字媒体技术",
        },
        {
          id: 3,
          className: "19数字媒体技术",
        },
      ],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    deleteClass(id) {
      this.classList.forEach((item) => {
        if (item.id === id) {
          this.$confirm("此操作将移除该班级, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then(() => {
              this.classList.splice(0, 1);
              this.$message({
                type: "success",
                message: "移除成功!",
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消移除",
              });
            });
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.right-bottom-content {
  padding: 0px 20px 20px 20px;
  // width: 380px;
  height: 400px;
  background: #ffffff;
  opacity: 1;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  .null-class{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 0.3rem;
    // font-weight: 500;
  }
  .item {
    cursor: pointer;
    padding: 20px;
    display: flex;
    align-items: center;
    // background-color: red;
    position: relative;
    // width: 380px;
    height: 60px;
    // background: #edeff3;
    opacity: 1;
    justify-content: space-between;
    &:hover {
      background: #edeff3;
    }
    &:active {
      background: #e1e3e7;
    }
    .class {
      font-size: 16px;
      color: #666666;
      white-space: nowrap;
    }
    .remove {
      font-size: 16px;
      color: #999999;
      // margin-left: 70px;
      position: absolute;
      right: 60px;
    }
    .dot {
      // margin-left: 15px;
      margin-top: 5px;
    }
  }
}
.add {
  cursor: pointer;
  padding-top: 15px;
  // width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  background: #ffffff;
  .icon {
    display: flex;
  }
  .text {
    margin-left: 8px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
    color: #666666;
    opacity: 1;
  }
}
</style>