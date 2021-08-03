<!--  -->
<template>
  <div class="body">
    <div class="person-message">
      <a href="/homePage/studentInfo">
        <div class="header"></div>
      </a>

      <div class="name">张克榕</div>
      <div class="number">工号：182718144</div>
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
.person-message {
  width: 100%;
  min-width: 240px;
  height: 240px;
  background: linear-gradient(153deg, #5592fe 0%, #2a77ff 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  .header {
    width: 110px;
    height: 110px;
    background: rgba(118, 213, 236, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 50%;
  }
  .name {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
  .number {
    font-size: 14px;
    font-weight: bold;
    color: #f4f4f4;
  }
}
</style>