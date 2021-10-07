<!--  -->
<template>
  <div class="body">
    <TopBar :name="name" />
    <div class="right-top-content">
      <div class="time-start">
        <div class="text">开始时间:</div>
        <!-- <div class="block"> -->
        <el-date-picker v-model="startTime" type="date" placeholder="选择日期">
        </el-date-picker>
        <!-- </div> -->
      </div>
      <div class="time-end">
        <div class="text">结束时间:</div>
        <!-- <div class="block"> -->
        <el-date-picker v-model="endTime" type="date" placeholder="选择日期">
        </el-date-picker>
        <!-- </div> -->
      </div>
      <div class="Button" v-if="false">
        <Button name="暂停进程" background="#FFC62A"
          ><img src="@/assets/image/course/ic_pause.svg" alt=""
        /></Button>
      </div>
      <div class="Button" v-else>
        <Button name="发布开始"
          ><img src="@/assets/image/course/ic_release.svg" alt=""
        /></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button/Button";
import TopBar from "@/components/topBar/TopBar";
export default {
  components: { Button, TopBar },
  props: {
    name: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      startTime: null,
      endTime: null,
    };
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.right-top-content {
     position: relative;
     // width: 4.2rem;
     height: 2.34rem;
     padding: 0.1rem 0.42rem 0.42rem 0.42rem;
     background: #ffffff;
     box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
     opacity: 1;
     margin-bottom: 0.3rem;
     .time-start {
         display: flex;
         align-items: center;
         .text {
             white-space: nowrap;
             height: 0.16rem;
             font-size: 0.16rem;
             font-weight: bold;
             line-height: 0.27rem;
             color: #999999;
             margin-bottom: 0.1rem;
             margin-right: 0.3rem;
        }
    }
     .time-end {
         display: flex;
         align-items: center;
         margin-top: 0.3rem;
         .text {
             white-space: nowrap;
             height: 0.16rem;
             font-size: 0.16rem;
             font-weight: bold;
             line-height: 0.27rem;
             color: #999999;
             margin-bottom: 0.1rem;
             margin-right: 0.3rem;
        }
    }
     .Button {
         position: absolute;
         left: 50%;
         top: 50%;
         // bottom: 0;
         transform: translate(-50%, 100%);
    }
}
 
</style>