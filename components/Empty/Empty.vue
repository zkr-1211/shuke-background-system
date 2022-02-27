<!--  -->
<template>
  <div class="body">
    <div class="empty">
      <div class="img">
        <img src="@/assets/image/home/img_shanghuan.svg" alt="" />
      </div>
      <div class="text">{{ title }}</div>
      <div class="button" @click="toCreate" v-if="buttonisShow">
        <Button :name="buttonName">
          <slot></slot>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
export default {
  components: { Button },
  props: {
    title: {
      type: String,
      default: "还未创建任何课程",
    },
    buttonName: {
      type: String,
      default: "前往创建",
    },
    buttonisShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},

  methods: {
    toCreate() {
      this.$emit("createCourse");
    },
  },
};
</script>
<style lang='scss' scoped>
.empty {
  margin-top: 1rem;
  height: 3.1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
  .img {
    width: 3rem;
    height: 1.91rem;
    img {
      width: 3rem;
      height: 1.91rem;
    }
  }
  .text {
    margin-top: 0.2rem;
    font-size: 0.2rem;
    font-weight: bold;
    color: #999999;
  }
  .button {
    margin-top: 0.2rem;
    font-size: 0.14rem;
    font-weight: bold;
    color: #f4f4f4;
    .el-button {
      background: #2a77ff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
      &:hover {
        background: #5592fe;
      }
      &:active {
        background: #2065e0;
      }
    }
  }
}
</style>