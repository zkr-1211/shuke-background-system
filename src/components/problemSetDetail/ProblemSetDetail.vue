<!--  -->
<template>
  <div class="body">
    <el-table
      @selection-change="handleSelectionChange"
      tooltip-effect="dark"
      ref="multipleTable"
      :data="tableData"
      stripe
      style="width: 85vw"
    >
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
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
            class="look"
            >查看</el-button
          >
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
  margin-top: 15px;
}
.check {
  text-align: center;
  // background-color: red;
  margin-left: 15px !important;
}
.specialColor {
  font-size: 16px;
  color: #333333;
  // width: 1000px !important;
}
.CreateColor {
  font-size: 16px;
  color: #999999;
}
.look {
  font-size: 16px;
  color: #5592fe;
}
.delete {
  margin-left: 35px !important;
  font-size: 16px;
  color: #999999;
}
::v-deep .el-table th > .cell {
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
  padding-left: 10px;
  padding-right: 10px;
  // width: 100%;
  //   width: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
}
::v-deep .el-table thead {
  width: 1584px;
  height: 72px;
  background: #edeff3;
  border-radius: 8px 8px 0px 0px;
}
::v-deep .el-table th,
.el-table tr {
  background: #edeff3;
}
::v-deep .el-checkbox__inner {
  margin-left: 20px;
  width: 20px;
  height: 20px;
  text-align: center;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner::after {
  margin-left: 3px;
  margin-top: 3px;
}
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
  content: "";
  position: absolute;
  display: block;
  background-color: #fff;
  height: 2px;
  transform: scale(0.5);
  left: 0;
  right: 0;
  top: 8px;
}
</style>