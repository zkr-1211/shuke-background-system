<!--  -->
<template>
  <div class="body">
             <div class="left-bottom">
        <div class="recent">
          <HeaderTitle name="近期提交" />
          <div class="content">
            <div class="item">
              <div class="title">UI设计图标作业</div>
              <div class="time">2021.01.10 10:20:35</div>
            </div>
          </div>
        </div>
        <div class="tianti">
          <HeaderTitle name="天梯对战情况" />
          <div class="content">
            <div class="item">
              <div class="person-message">
                <div class="header"><img src="" alt="" /></div>
                <div class="message">
                  <div class="name">张克榕</div>
                  <div class="num">182718144</div>
                </div>
              </div>
              <div class="VS">VS</div>
              <div class="person-message">
                <div class="message">
                  <div class="name">张克榕</div>
                  <div class="num">182718144</div>
                </div>
                <div class="header"><img src="" alt="" /></div>
              </div>
            </div>
          </div>
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
.body {
    .left-bottom {
        .recent {
            .content {
                .item {
                    .title {
                    }
                    .time {
                    }
                }
            }
        }
        .tianti {
            .content {
                .item {
                    .person-message {
                        .header {
                            img {
                            }
                        }
                        .message {
                            .name {
                            }
                            .num {
                            }
                        }
                    }
                    .VS {
                    }
                    .person-message {
                        .message {
                            .name {
                            }
                            .num {
                            }
                        }
                        .header {
                            img {
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>