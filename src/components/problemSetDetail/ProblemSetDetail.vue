<!--  -->
<template>
  <div class="body">
    <el-table @selection-change="handleSelectionChange" tooltip-effect="dark" ref="multipleTable" :data="tableData" stripe style="width: 82vw">
      <el-table-column class="check" type="selection" width="100">
      </el-table-column>
      <el-table-column prop="date" label="序号" min-width="100">
        <template slot-scope="scope">
          <div class="specialColor">
            {{ scope.row.date }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="名称" min-width="532">
        <template slot-scope="scope">
          <div class="specialColor">
            {{ scope.row.address }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="类型" min-width="130">
        <template slot-scope="scope">
          <div class="specialColor">
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="创建者" min-width="500">
        <template slot-scope="scope">
          <div class="CreateColor">
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="280">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small" class="look">查看</el-button>
          <!-- <span class="edit"> -->
          <el-button type="text" size="small" class="delete">删除</el-button>
          <!-- </span> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "000001",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style lang='scss' scoped>
.body {
     margin-top: 0.25rem;
}
 .check {
     text-align: center;
     // background-color: red;
     margin-left: 0.15rem !important;
}
 .specialColor {
     font-size: 0.16rem;
     color: #333333;
     // width: 10rem !important;
}
 .CreateColor {
     font-size: 0.16rem;
     color: #999999;
}
 .look {
     font-size: 0.16rem;
     color: #5592fe;
}
 .delete {
     margin-left: 0.35rem !important;
     font-size: 0.16rem;
     color: #999999;
}
 ::v-deep .el-table th > .cell {
     display: inline-block;
     box-sizing: border-box;
     position: relative;
     vertical-align: middle;
     padding-left: 0.1rem;
     padding-right: 0.1rem;
     // width: 100%;
     // width: 0.4rem;
     font-size: 0.2rem;
     font-weight: bold;
     color: #333333;
}
 ::v-deep .el-table thead {
     width: 15.84rem;
     height: 0.72rem;
     background: #edeff3;
     border-radius: 0.08rem 0.08rem 0rem 0rem;
}
 ::v-deep .el-table th, .el-table tr {
     background: #edeff3;
}
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
     -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
     transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
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
     top: 0.03rem;
     -webkit-transform: rotate(45deg) scaleY(0);
     transform: rotate(45deg) scaleY(0);
     width: 0.15rem;
     -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
     transition: -webkit-transform 0.15s ease-in 0.05s;
     transition: transform 0.15s ease-in 0.05s;
     transition: transform 0.15s ease-in 0.05s, -webkit-transform 0.15s ease-in 0.05s;
     -webkit-transform-origin: center;
     transform-origin: center;
}
 
</style>