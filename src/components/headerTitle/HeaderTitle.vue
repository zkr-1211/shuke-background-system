<!--  -->
<template>
  <div class="body">
    <div class="nav">
      <div class="title">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      default: "默认标题",
    },
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: #ffffff;
  padding: 20px;
  .title {
    // width: 80px;
    padding-left: 12px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #666666;
    border-left: 8px solid #2a77ff;
  }
}
</style>