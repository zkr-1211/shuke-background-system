<!--  -->
<template>
  <div class="body">

     <el-row :gutter="32" class="el-row">
        <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4">
         
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="10" :xl="10">
        
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
         
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="5" :xl="5">
         
         
        </el-col>
      </el-row>
      .el-row .el-col {
  margin-top: 0.12rem;
}
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