<!--  -->
<template>
  <div class="body">
    <div class="button">
      <el-button type="primary" @click="clickButton()" :style="styleVar">
        <div class="content">
          <slot></slot>
          {{ name }}
        </div>

      </el-button>
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
    background: {
      type: String,
      default: "#2a77ff",
    },
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {
  },
  computed: {
    styleVar() {
      return {
        "--background": this.background,
      };
    },
  },
  methods: {
    clickButton() {
      this.$emit("ClickButton");
    },
  },
};
</script>
<style lang='scss' scoped>
.button {
  font-size: 0.14rem;
  font-weight: bold;
  color: #f4f4f4;
  .el-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0.8rem;
    height: 0.4rem;
    background: var(--background);
    border: none;
    box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
    &:hover {
      background: #5592fe;
    }
    &:active {
      background: #2065e0;
    }
  }
  .content {
    display: flex;
    align-items: center;
  }
}
</style>