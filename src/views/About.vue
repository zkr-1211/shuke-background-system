<!--  -->
<template>
  <div class='body'>
          <div class="top-right">
        <div class="nav">
          学员评价
          <a href="">共有100条评价>></a>
        </div>
        <div class="center-content">
          <el-pagination layout="prev, slot,next" :total="50">
            <div class="content">
              本专业旨在培养社会急需的具备大数据处理及分析能力的高级复合型人才。具体包括：掌握计算机科学、大数据科学与信息技术的基本理论、方法和技能，受到系统的科学研究训练，具备一定的大数据科学研究
            </div>
          </el-pagination>
        </div>
        <div class="bottom">
          <div class="bottom-msg">
            <div class="header"><img src="" alt="" /></div>
            <div class="name">张克榕</div>
            <div class="time">2019/10/15 12:20:23</div>
          </div>
          <div class="delete-img"><img src="" alt="" /></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    };
  },
  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.body {
    .top-right {
        .nav {
            a {
            }
        }
        .center-content {
            .content {
            }
        }
        .bottom {
            .bottom-msg {
                .header {
                    img {
                    }
                }
                .name {
                }
                .time {
                }
            }
            .delete-img {
                img {
                }
            }
        }
    }
}
</style>