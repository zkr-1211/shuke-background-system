<!--  -->
<template>
  <div class="body">
    <div class="my-message">
      <div class="my-message-item">
        <el-row :gutter="32" class="el-row">
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <div class="item">
              <div class="tiaozi"></div>
              <div class="img">
                <img src="@/assets/image/home/icon_home_mycourse.svg" alt="" />
              </div>
              <div class="name">{{personal.name1}}</div>
              <div class="number">{{personal.num1}}</div>
            </div>
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <router-link to="/homePage/myclass">
              <div class="item">
                <div class="tiaozi"></div>
                <div class="img">
                  <img src="@/assets/image/home/icon_home_myclass.svg" alt="" />
                </div>
                <div class="name">{{personal.name2}}</div>
                <div class="number">{{personal.num2}}</div>
              </div>
            </router-link>
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <router-link to="/homePage/myteam">
              <div class="item">
                <div class="tiaozi"></div>
                <div class="img">
                  <img src="@/assets/image/home/icon_home_myteam.svg" alt="" />
                </div>
                <div class="name">{{personal.name3}}</div>
                <div class="number">{{personal.num3}}</div>
              </div>
            </router-link>
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <div class="item">
              <div class="tiaozi"></div>
              <div class="img">
                <img src="@/assets/image/home/icon_home_mytask.svg" alt="" />
              </div>
              <div class="name">{{personal.name4}}</div>
              <div class="number">{{personal.num4}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <div> -->

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
    personal:{
      type:Object,
      default:{}
    }
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
.my-message {
  height: 2.4rem;
  background: #ffffff;
  box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
  border-radius: 0.08rem;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  overflow: hidden;
  .my-message-item {
    padding: 0 0.3rem;
    height: 2.4rem;
    background: #ffffff;
    // box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
    // border-radius: 0.08rem;
    align-items: center;
    justify-content: center;
    transition: all 1s;
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 0 auto;
    ::v-deep .el-col {
      padding: 0 8px !important;
    }
    .item {
      // padding: 0 20px 20px !important;
      position: relative;
      // min-width: 1.6rem;
      // padding-left: 0.4rem;
      height: 2.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background-color: #fafafa;
      }
      &:hover img {
        transform: scale(1.2);
      }
      &:hover .tiaozi {
        border-top: 0.09rem solid #2a77ff;
        color: #2a77ff;
      }
      &:hover .number {
        color: #2a77ff;
      }
      .tiaozi {
        position: absolute;
        top: 0;
        width: 100%;
      }
      .img {
        width: 0.6rem;
        height: 0.6rem;
        display: flex;
        align-items: center;
        // background: #5592fe;
        border-radius: 50%;
        img {
          width: 0.6rem;
          height: 0.6rem;
          transition: all 0.25s;
        }
      }
      .name {
        margin-top: 0.14rem;
        font-size: 0.14rem;
        color: #666666;
      }
      .number {
        margin-top: 0.2rem;
        font-size: 0.3rem;
        font-weight: bold;
        color: #666666;
      }
    }
  }
}
</style>