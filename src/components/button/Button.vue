<!--  -->
<template>
  <div class="body">
    <div class="button">
      <el-button type="primary" @click="clickButton()">{{ name }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      default: "默认按钮",
    },
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {
    clickButton() {
      this.$emit("ClickButton");
    },
  },
};
</script>
<style lang='scss' scoped>
.button {
  font-size: 14px;
  font-weight: bold;
  color: #f4f4f4;
  .el-button {
    min-width: 80px;
    height: 40px;
    background: #2a77ff;
    box-shadow: 0px 3px 6px rgba(42, 119, 255, 0.2);
    &:hover {
      background: #5592fe;
    }
    &:active {
      background: #2065e0;
    }
  }
}
</style>