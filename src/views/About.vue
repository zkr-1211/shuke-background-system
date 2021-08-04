<!--  -->
<template>
  <div class="body">

    <div class="right">
        <div class="right-top-text">
          <span>当前作业：</span>
          <span>子任务01:完成10个线性图标的设计</span>
        </div>
        <div class="right-left">
          <div class="score">
            <div class="score-left">
              <span>得分</span>
              <div></div>
              <span>此作业为补交作业</span>
              <span>逾期：12天3小时64分</span>
            </div>

            <div class="score-right">
              <span>89.65</span>
              <span>分</span>
            </div>
          </div>
          <div class="icon-content"></div>
          <div class="comment"></div>
        </div>
        <div class="right-right"></div>
      </div>
  </div>
</template>

<script>
import HeaderTitle from "@/components/headerTitle/HeaderTitle";
export default {
  components: {
    HeaderTitle,
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
.body {
    .right {
        .right-top-text {
            span {
            }
        }
        .right-left {
            .score {
                .score-left {
                    span {
                    }
                    div {
                    }
                }
                .score-right {
                    span {
                    }
                }
            }
            .icon-content {
            }
            .comment {
            }
        }
        .right-right {
        }
    }
}
</style>