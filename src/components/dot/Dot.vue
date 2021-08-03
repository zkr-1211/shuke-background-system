<!--  -->
<template>
  <div class="body">
    <div class="dot">
      <div class="dynamic_right2">
        <div class="dynamic_right2_dot"></div>
        <div class="dynamic_right2_dot"></div>
        <div class="dynamic_right2_dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.dot {
  cursor: pointer;
  width: 27px;
  height: 27px;
  .dynamic_right2 {
    width: 27px;
    height: 27px;
    // background-color: red;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    .dynamic_right2_dot {
      margin-bottom: 3px;
      margin-right: 10px;
      width: 4px;
      height: 4px;
      background: #999999;
      border-radius: 50%;
    }
  }
}
</style>