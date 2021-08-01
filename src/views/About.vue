<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的团队</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 左侧 -->
    <div class="left">
      <HeaderTitle name="所有团队" />
      <div class="content">
        <div class="item">
          <div class="team-name">UI设计教育团队</div>
          <div class="num">20人</div>
          <div class="dot">
            <Dot />
          </div>
        </div>
      </div>
      <div class="add">
        <div class="img"><img src="" alt="" /></div>
        <div class="text">创建团队</div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <HeaderTitle name="管理团队成员" />
      <div class="add-img">
        <img src="@/assets/image/home/ic_team_invitation.svg" alt="" />
      </div>
      <div class="team-search">
        <div class="team-name">UI设计教育团队</div>
        <div class="search"></div>
      </div>
      <div class="nav-title">
        <div class="people">成员</div>
        <div class="number">工号</div>
        <div class="quanxian">
          权限<img src="@/assets/image/home/ic_help.svg" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="item">
          <div class="check"></div>
          <div class="person">
            <div class="header">
              <img src="@/assets/image/home/ic_help.svg" alt="" />
            </div>
            <div class="name">张克榕</div>
          </div>
          <div class="num">154455211</div>
          <div class="guanliyuan">超级管理员</div>
          <div class="set">
            <img src="@/assets/image/home/ic_help.svg" alt="" />
          </div>
        </div>
      </div>
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

</style>