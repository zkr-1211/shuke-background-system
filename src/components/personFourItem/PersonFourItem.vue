<!--  -->
<template>
  <div class="body">
    <div class="my-message">
      <!-- <div> -->
      <div class="item">
        <div class="tiaozi"></div>
        <div class="img">
          <img src="@/assets/image/home/icon_home_mycourse.svg" alt="" />
        </div>
        <div class="name">我的课程</div>
        <div class="number">10</div>
      </div>
      <a href="/homePage/MyClass">
        <div class="item">
          <div class="tiaozi"></div>
          <div class="img">
            <img src="@/assets/image/home/icon_home_myclass.svg" alt="" />
          </div>
          <div class="name">我的班级</div>
          <div class="number">10</div>
        </div></a
      >

      <div class="item">
        <div class="tiaozi"></div>
        <div class="img">
          <img src="@/assets/image/home/icon_home_myteam.svg" alt="" />
        </div>
        <div class="name">我的团队</div>
        <div class="number">10</div>
      </div>
      <div class="item">
        <div class="tiaozi"></div>
        <div class="img">
          <img src="@/assets/image/home/icon_home_mytask.svg" alt="" />
        </div>
        <div class="name">作业待改</div>
        <div class="number">10</div>
      </div>
      <!-- </div> -->
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
.my-message {
  width: 100%;
  height: 240px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  margin-left: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  .item {
    position: relative;
    width: 154px;
    height: 240px;
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
      border-top: 9px solid #2a77ff;
      color: #2a77ff;
    }
    &:hover .number {
      color: #2a77ff;
    }
    .tiaozi {
      position: absolute;
      top: 0;
      width: 154px;
    }
    .img {
      width: 60px;
      height: 60px;
      // background: #5592fe;
      border-radius: 50%;
      img {
         width: 60px;
      height: 60px;
        transition: all 0.25s;
      }
    }
    .name {
      margin-top: 14px;
      font-size: 14px;
      color: #666666;
    }
    .number {
      margin-top: 20px;
      font-size: 30px;
      font-weight: bold;
      color: #666666;
    }
  }
}
</style>