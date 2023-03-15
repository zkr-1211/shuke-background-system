<!--  -->
<template>
  <div class="body">
    <div class="person-message" @click="$router.push('/homePage/studentinfo')">
        <div class="header"></div>
      <div class="name">张老板</div>
      <div class="number">工号：110110110</div>
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

  mounted() { },

  methods: {
    goPage(url) {
      this.$router.push(url);
    }
  },
};
</script>
<style lang='scss' scoped>
.person-message {
  //  width: 100%;
  //  min-width: 2.4rem;
  height: 2.4rem;
  background: linear-gradient(153deg, #5592fe 0%, #2a77ff 100%);
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  .header {
    width: 1.1rem;
    height: 1.1rem;
    background: rgba(118, 213, 236, 1);
    box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.16);
    border-radius: 50%;
  }

  .name {
    font-size: 0.2rem;
    font-weight: bold;
    color: #ffffff;
  }

  .number {
    font-size: 0.14rem;
    font-weight: bold;
    color: #f4f4f4;
  }
}</style>