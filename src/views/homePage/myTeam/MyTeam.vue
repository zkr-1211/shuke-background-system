<!--  -->
<template>
  <div class="body">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的团队</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18"> -->
    <div class="top-bar">
      <HeaderTitle name="我的团队" />

      <div class="button" @click="dialogVisible2 = true">
        <el-dropdown trigger="click" placement="bottom-end" v-if="false">
          <span class="el-dropdown-link">
            <img src="@/assets/image/home/ic_team_invitation.svg" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <div @click="editDV = true">
              <el-dropdown-item>退出团队</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" placement="bottom-end" v-else>
          <span class="el-dropdown-link">
            <img src="@/assets/image/home/ic_team_setting.svg" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <div @click="editTeamName">
              <el-dropdown-item>重命名</el-dropdown-item>
            </div>
            <div @click="deleteDV = true">
              <el-dropdown-item>解散团队</el-dropdown-item>
            </div>
            <div @click="turnOverDv = true">
              <el-dropdown-item>移交团队</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
        <img src="@/assets/image/home/ic_team_addman.svg" alt="" @click=";(addDv = true), (isCopy = false)" />
        <!-- <el-button class="create-button" type="primary"><i class="el-icon-plus"></i>创建</el-button> -->
      </div>
    </div>
    <!-- </el-col> -->
    <div class="main">
      <!-- 左侧 -->
      <!-- <el-row :gutter="40" class="el-row">
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18"> -->
      <!-- 右侧 -->
      <div class="right">
        <!-- <HeaderTitle name="管理团队成员" /> -->
        <div class="add-img">
          <!-- <img src="@/assets/image/home/ic_team_invitation.svg" alt="" /> -->
        </div>
        <div class="team-search">
          <div class="team-name" v-if="teamObj.team_name">
            {{ teamObj.team_name }}
            <img @click="editTeamName" src="@/assets/image/home/ic_edit.svg" alt="" />
          </div>
          <div class="search">
            <input type="text" placeholder="搜索你想要的班级" v-model.trim="keyWord" @keyup.enter="search" />
            <i class="el-icon-search" @click="search"></i>
          </div>
        </div>
        <div class="nav-title">
          <div class="check1">
            <CheckBox v-model="isCheckedAll" @IsCheck="IsCheckAll" />
          </div>
          <div class="people">所有成员</div>
          <div class="number">工号</div>
          <div class="id">身份</div>
          <div class="quanxian">
            权限
            <img src="@/assets/image/home/ic_help.svg" alt="" />
          </div>
        </div>
        <div class="content">
          <div class="item" v-for="(item, index) in teamObj.members" :key="item.uid">
            <div class="check" :class="isChecked ? 'isChecked' : ''">
              <CheckBox v-model="item.select" @IsCheck="IsCheck($event, item.uid)" />
            </div>
            <div class="person">
              <div class="header">
                <img src="@/assets/image/home/ic_help.svg" alt="" />
              </div>
              <div class="person-message">
                <div class="name">{{ item.realname }}</div>
                <div class="phone">{{ item.phone }}</div>
              </div>

              <div class="me" v-if="index == 0">我</div>
            </div>
            <div class="num">{{ item.external_id }}</div>
            <div class="guanliyuan" @click="quanXianDV = true">{{ item.display_identity }}</div>
            <div class="function" @click="quanXianDV = true">所有功能</div>
            <div class="set" :class="isChecked ? 'isChecked' : ''">
              <img @click="setPermissions(item.uid)" src="@/assets/image/home/ic_setup_n.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- </el-col>
      </el-row> -->
    </div>
    <!-- 添加成员 -->
    <el-dialog title="" :visible.sync="addDv" width="30%" :show-close="false" top="40vh">
      <h2>链接邀请</h2>
      <div class="add">
        <div class="link">
          <div class="copy-text">
            <input v-model="shareUrl" id="copyObj" />
          </div>
        </div>
        <div class="select">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <!-- <div class="copy"> -->
        <div class="copy" @click="copyUrl()" :class="isCopy ? 'copyFinish' : ''">
          <span v-if="!isCopy">复制链接</span>
          <span v-else>已复制</span>
        </div>
        <!-- </div> -->
      </div>
      <div class="time">链接有效期14天</div>
      <!-- <span class="delete-text">您当前权限无法使用该功能呢，可联系超级管理员修改权限哦</span> -->
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>
    <!-- 移交团队 -->
    <el-dialog title="物理教研团队" :visible.sync="turnOverDv" width="30%" :show-close="false" top="40vh">
      <h2>移交</h2>
      <span class="delete-text">每个团队只有1位超级管理员，移交后你将变为管理员哦</span>
      <div class="people-team">
        <template v-for="(item, index) in teamObj.members">
          <div
            :key="item.uid"
            v-if="item.identity !== 'SUPER_ADMIN'"
            :class="['item', item.select ? 'is-select' : '']"
            @click="selectPeople(item.uid)"
          >
            <div class="info">
              <div class="header">
                <img :src="item.avatar" alt="" v-if="!item.select" />
                <img v-else src="@/assets/image/home/ic_help.svg" alt="" />
              </div>
              <div class="name">{{ item.realname }}</div>
            </div>
          </div>
        </template>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="turnOverDv = false">取 消</el-button>
        <el-button type="primary" @click="confirmTurnOver">确认移交</el-button>
      </span>
    </el-dialog>
    <!-- 修改团队名称 -->
    <el-dialog title="" :visible.sync="editDV" width="30%" :show-close="false" top="40vh">
      <h2>修改团队名称</h2>
      <input class="course-input" type="text" v-model.trim="teamName" />
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="editDV = false">取 消</el-button>
        <el-button type="primary" @click="teamNameConfirm">确 认</el-button>
      </span>
    </el-dialog>
    <!-- 删除课程 -->
    <el-dialog :title="teamObj.team_name" :visible.sync="deleteDV" width="30%" :show-close="false" top="40vh">
      <h2>解散</h2>
      <span class="delete-text">解散团队将无法找回，您确认要解散么？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="deleteDV = false">取 消</el-button>
        <el-button type="primary" @click="dissolveTeam">确认解散</el-button>
      </span>
    </el-dialog>
    <!-- 没有权限 -->
    <el-dialog title="" :visible.sync="noQuanXianDV" width="30%" :show-close="false" top="40vh">
      <h2>很抱歉，没有权限呢</h2>
      <span class="delete-text">您当前权限无法使用该功能呢，可联系超级管理员修改权限哦</span>
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>
    <!--权限设置  -->
    <el-dialog title="" :visible.sync="quanXianDV" width="30%" :show-close="false" top="3vh">
      <h2>权限设置</h2>
      <span class="select-num">已选中10人</span>
      <div class="top-set">
        <div class="set">
          <span>设置身份</span>
          <div class="select">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div class="function">功能权限</div>
      </div>

      <div class="quan-xian">
        <div class="quanxian-item" v-for="(item, index) in permissions" :key="item.permission_id">
          <div class="chick">
            <CheckBox @IsCheck="perSelectClick($event, item.permission_id)" v-model="item.selected" />
          </div>
          <div class="title">{{ item.display_name }}</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <span class="delete-man" @click="deletePeople">删除成员</span>
        <el-button class="cancel-button" @click="quanXianDV = false">取 消</el-button>
        <el-button type="primary" @click="confirmPermissions">确 认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import HeaderTitle from '@/components/HeaderTitle/HeaderTitle'
  import Dot from '@/components/Dot/Dot'
  import CheckBox from '@/components/CheckBox/CheckBox'
  import {
    getCourseTeam,
    editCourseTeam,
    searchTeamMembers,
    transferSuperAdministrator,
    editTeamMembersPermissions,
    deleteTeamMembers
  } from '@/api/team'

  export default {
    components: {
      HeaderTitle,
      Dot,
      CheckBox
    },
    data() {
      return {
        editDV: false,
        deleteDV: false,
        addDv: false,
        turnOverDv: false,
        noQuanXianDV: false,
        quanXianDV: false,
        //判断显示item
        isChecked: false,
        isCheckedAll: false,
        checked: false,
        options: [
          {
            value: 'ADMIN',
            label: '管理员'
          },
          {
            value: 'MEMBER',
            label: '成员'
          }
        ],
        value: 'MEMBER',
        shareUrl: 'https://blog.csdn.net/Tomhs3000/article/details/80334165',
        selectIdList: [],
        isCopy: false,
        teamName: '',
        keyWord: '',
        teamObj: {},
        course_id: 87,
        selectUid: '',
        permissions: []
      }
    },
    computed: {},

    mounted() {
      this.__getCourseTeam()
    },

    methods: {
      async __getCourseTeam() {
        const res = await getCourseTeam(this.course_id)
        console.log('getCourseTeam==', res)
        res.members.forEach(item => {
          item.select = false
        })
        this.teamObj = res
      },

      selectPeople(uid) {
        this.teamObj.members = this.teamObj.members.map(item => {
          // item.select = item.uid === uid
          if (item.uid === uid) {
            item.select = true
            this.selectUid = item.uid
          } else {
            item.select = false
          }
          return item
        })
      },

      copyUrl() {
        let url = document.querySelector('#copyObj')
        url.select() // 选择对象
        document.execCommand('Copy')
        this.isCopy = true
      },
      //点击全选
      IsCheckAll() {
        let flag = this.isCheckedAll
        if (flag) {
          this.isChecked = true
        } else {
          this.isChecked = false
        }
        this.teamObj.members.forEach(item => {
          item.select = flag
        })
      },
      //点击下方item check
      IsCheck(e, id) {
        console.log(e, id)
        //全部选中就显示全选按钮
        let state = this.teamObj.members.every(item => {
          return item.select
        })
        //有一个被选中就显示item
        let state1 = this.teamObj.members.some(item => {
          return item.select
        })
        if (state) {
          this.isCheckedAll = true
        } else {
          this.isCheckedAll = false
        }
        if (state1) {
          this.isChecked = true
        } else {
          this.isChecked = false
        }
      },
      async deletePeople() {
        let data = {
          uid: this.selectUid
        }
        try {
        await deleteTeamMembers(this.teamObj.team_id, data)
          
        } catch (error) {
            this.$message.error(`删除失败${error}`)
          
        }
        // this.teamObj.member.map(item => {
        //   item.select && this.selectIdList.push(item.id)
        // })
        // console.log(this.selectIdList)
      },
      // 权限设置确认
      async confirmPermissions() {
        // this.teamObj.member.forEach(item => {
        //   if (item.select === true) {
        //     this.selectIdList.push(item.id)
        //   }
        // })
        let permissionsList = []
        this.permissions.forEach(item => {
          permissionsList.push({
            permission_id: item.permission_id,
            selected: item.selected
          })
        })
        let data = {
          uid: this.selectUid,
          identity: this.value,
          permissions: permissionsList
        }
        try {
          await editTeamMembersPermissions(this.teamObj.team_id, data)
        } catch (error) {
            this.$message.error(`${error}`)

        }
      },
      editTeamName() {
        this.editDV = true
        this.teamName = this.teamObj.team_name
      },
      // 修改团队名称确认点击
      async teamNameConfirm() {
        let data = {
          name: this.teamName
        }
        try {
          await editCourseTeam(this.teamObj.team_id, data)
          this.__getCourseTeam()
        } catch (error) {
        } finally {
          this.editDV = false
        }
      },
      async search() {
        let data = {
          keyword: this.keyWord
          // pageSize,
          // pageNum
        }
        try {
          const res = await searchTeamMembers(this.teamObj.team_id, data)
          console.log('searchTeamMembers==', res)
          this.teamObj.members = res.list
          // this.$set(this.teamObj,'member',res.list)
          console.log(' this.teamObj.member==', this.teamObj)
        } catch (error) {
        } finally {
        }
      },
      // 解散团队确认点击
      dissolveTeam() {
        alert('解散成功')
        this.deleteDV = false
      },
      // 权限选择点击
      perSelectClick(e, id) {
        this.permissions.forEach(item => {
          if (item.permission_id === id) {
            item.selected = e
          }
        })
      },
      async confirmTurnOver() {
        let data = {
          uid: this.selectUid
        }
        try {
          await transferSuperAdministrator(this.teamObj.team_id, data)
        } catch (error) {}
      },
      setPermissions(uid) {
        this.selectUid = uid
        this.quanXianDV = true
        this.teamObj.members.forEach(item => {
          if (item.uid === uid) {
            this.permissions = item.permissions
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  ::v-deep .el-select .el-input__inner {
    cursor: pointer;
    // width: fit-content;
    text-align: right;
    height: 0.4rem;
    background: #ffffff;
    border: 0rem solid #e0e0e0;
    opacity: 1;
    border-radius: 0.04rem;
    font-weight: bold;
    font-size: 0.16rem;
  }
  .top-bar {
    width: 70%;
    margin: 0.12rem auto 0;
    // margin-bottom: 0.12rem;
    // width: 15.84rem;
    height: 0.8rem;
    background: #ffffff;
    box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    // position: relative;
    justify-content: space-between;
    .title {
      // background-color: #2a77ff;
      width: 100%;
      // height: 2rem;
      margin: 0.2rem;
      font-size: 0.2rem;
      font-weight: bold;
      line-height: 0.34rem;
      color: #666666;
      border-left: 0.08rem solid #5592fe;
      .name {
        margin-left: 0.12rem;
      }
    }
    .button {
      margin-right: 0.3rem;
      font-size: 0.14rem;
      font-weight: bold;
      color: #f4f4f4;
      // width: 1.2rem;
      display: flex;
      img:nth-of-type(1) {
        // position: absolute;
        margin-right: 0.1rem;
        width: 0.5rem;
        height: 0.5rem;
        cursor: pointer;
      }
      img:nth-of-type(2) {
        // position: absolute;
        // right: 0.3rem;
        width: 0.5rem;
        height: 0.5rem;
        cursor: pointer;
      }
      .el-icon-plus {
        margin-right: 0.07rem;
        font-size: 0.14rem;
      }
      .create-button {
        margin-bottom: 0.4rem;
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
  .quan-xian {
    // width: 5.3rem;
    height: 4.9rem;
    overflow-y: auto;
    position: relative;
    margin-top: 0.12rem;
    .quanxian-item {
      display: flex;
      align-items: center;
      height: 0.5rem;
    }
  }
  .select-num {
    font-size: 0.16rem;
    color: #2a77ff;
    position: absolute;
    right: 0.3rem;
    top: 0.5rem;
  }
  .top-set {
    // display: flex;
    line-height: 0.48rem;
    height: 1rem;
    border-bottom: 0.01rem solid #e0e0e0;
    color: #999999;
    font-size: 0.16rem;
    .set {
      // background-color: #666666;
      position: relative;
      .select {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
  //添加成员
  .add {
    display: flex;
    align-items: center;
    // background-color: red;
    // justify-content: space-between;
    flex-wrap: wrap;
    overflow: overlay;
    ::v-deep .el-select .el-input__inner {
      cursor: pointer;
      width: 1.4rem;
      text-align: right;
      height: 0.4rem;
      background: #f9f9fa;
      border: 0rem solid #e0e0e0;
      opacity: 1;
      border-radius: 0.04rem;
      font-weight: bold;
      font-size: 0.16rem;
    }
    .link {
      // min-width:2rem;
      width: 2.58rem;
      height: 0.4rem;
      background: #f9f9fa;
      // border: 0.01rem solid #eef0f1;
      opacity: 1;
      // border-radius: 0.04rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .copy-text {
        input {
          border: 0;
          line-height: 0.4rem;
          padding-left: 0.15rem;
          width: 2.5rem;
          height: 0.4rem;
          // background-color: red;
          background-color: #f9f9fa;
          overflow: hidden;
          /*超出部分隐藏*/
          white-space: nowrap;
          /*不换行*/
          text-overflow: ellipsis;
          /*超出部分文字以...显示*/
          // background-color: red;
        }
      }
    }
    .copyFinish {
      background: #5592fe !important;
      box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.16);
      opacity: 1;
    }
    .copy {
      display: flex;
      align-items: center;
      justify-content: center;
      // min-width: 0.8rem;
      min-width: 1rem;
      height: 0.4rem;
      background: #2a77ff;
      box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.16);
      opacity: 1;
      font-size: 0.14rem;
      font-weight: bold;
      color: #f4f4f4;
      opacity: 1;
      margin-left: 0.12rem;
      border-radius: 0.06rem;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
      &:active {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
  .time {
    margin-top: 0.35rem;
    font-size: 0.14rem;
    font-family: Source Han Sans CN;
    color: #666666;
    opacity: 1;
  }
  //移交团队
  .people-team {
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 1.5rem;
    overflow: overlay;
    .is-select {
      background: #edeff3;
    }
    .item {
      width: 1.68rem;
      height: 0.56rem;
      // background: #edeff3;
      opacity: 1;
      border-radius: 0.04rem;
      display: flex;
      // align-items: center;
      margin-bottom: 0.3rem;
      padding-left: 0.1rem;
      &:hover {
        background: #edeff3;
      }
      .info {
        display: flex;
        align-items: center;
        .header {
          img {
            width: 0.4rem;
            height: 0.4rem;
            background: #2a77ff;
            border-radius: 50%;
          }
        }
        .name {
          margin-left: 0.1rem;
        }
      }
    }
  }
  .title {
    font-size: 0.2rem;
    color: #666666;
    margin-left: 0.2rem;
    line-height: 0.2rem;
  }
  .delete-man {
    position: absolute;
    left: 0.35rem;
    bottom: 0.45rem;
    font-size: 0.14rem;
    font-weight: bold;
    color: #f96164;
    // margin-right: 3.8rem;
    cursor: pointer;
  }
  ::v-deep .el-dialog {
    line-height: 0rem;
  }
  ::v-deep .el-dialog__title {
    font-size: 0.2rem;
    font-weight: bold;
    line-height: 0.4rem;
    color: #2a77ff;
    margin-left: 0.43rem;
  }
  h2 {
    position: absolute;
    top: 0.48rem;
    color: #000000;
    font-size: 0.2rem;
  }
  .course-input {
    font-size: 0.2rem;
    color: #666666;
    padding: 0.1rem 0rem 0.1rem 0rem;
    width: 100%;
    border-bottom: 0.01rem solid #e0e0e0 !important;
    border: none;
  }
  .cancel-button {
    border: none;
    background: #fff !important;
    box-shadow: 0 !important;
    font-size: 0.14rem;
    font-weight: bold;
    color: #666666;
    margin-right: 0.15rem;
  }
  .el-button {
    margin-top: 0.4rem;
    background: #2a77ff;
    // box-shadow: 0rem 0.03rem 0.06rem rgba(42, 119, 255, 0.2);
    &:hover {
      background: #5592fe;
    }
    &:active {
      background: #2065e0;
    }
  }
  .delete-text {
    font-size: 0.14rem;
    line-height: 0.02rem;
    color: #666666;
  }
  .body {
    .breadcrumb {
    }
    .main {
      width: 70%;
      margin: 0.12rem auto 0;
      .right {
        height: 9.36rem;
        position: relative;
        .add-img {
          position: absolute;
          top: 0.2rem;
          right: 0.4rem;
          img {
            width: 0.8rem;
            height: 0.8rem;
            cursor: pointer;
          }
        }
        .team-search {
          margin-top: 0.26rem;
          position: relative;
          // width: 11.24rem;
          height: 1rem;
          display: flex;
          align-items: center;
          // padding-left: 1.1rem;
          justify-content: space-between;
          .team-name {
            font-size: 0.3rem;
            font-weight: bold;
            color: #666666;
            display: flex;
            align-items: center;
            img {
              margin-left: 0.24rem;
              width: 0.25rem;
              height: 0.25rem;
              cursor: pointer;
            }
          }
          .search {
            font-size: 0.16rem;
            font-weight: bold;
            color: #c3c3c3;
            // margin-right: 0.48rem;
            input {
              width: 3.66rem;
              height: 0.38rem;
              background: #ffffff;
              box-shadow: 0rem 0.03rem 0.06rem rgba(0, 0, 0, 0.03);
              border-radius: 0.35rem;
              border: none;
              padding-left: 0.2rem;
              font-size: 0.14rem;
              color: #999999;
              line-height: 1.38rem;
            }
            .el-icon-search {
              font-size: 0.2rem;
              position: absolute;
              right: 0.2rem;
              top: 0.4rem;
              font-weight: 900;
            }
            ::-webkit-input-placeholder {
              font-size: 0.14rem;
              line-height: 0.24rem;
              color: #999999;
            }
            /* 使用webkit内核的浏览器 */
            :-moz-placeholder {
              font-size: 0.14rem;
              line-height: 0.24rem;
              color: #999999;
            }
            /* Firefox版本4-18 */
            ::-moz-placeholder {
              font-size: 0.14rem;
              line-height: 0.24rem;
              color: #999999;
            }
            /* Firefox版本19+ */
            :-ms-input-placeholder {
              font-size: 0.14rem;
              line-height: 0.24rem;
              color: #999999;
              /* IE浏览器 */
            }
          }
        }
        .nav-title {
          background: #ffffff;
          height: 0.8rem;
          font-size: 0.2rem;
          font-weight: bold;
          color: #666666;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 0rem 0.2rem 0rem 0.2rem;
          justify-content: space-between;
          .check1 {
            position: absolute;
            left: 0.1rem;
          }
          .people {
            margin-left: 0.6rem;
          }
          .number {
            margin-left: 0.3rem;
          }
          .id {
            // margin-left: 0.1rem;
          }
          .quanxian {
            margin-right: 1.9rem;
            display: flex;
            align-items: center;
            img {
              margin-left: 0.07rem;
              width: 0.2rem;
              height: 0.2rem;
              cursor: pointer;
            }
          }
        }
        .content {
          height: 6rem;
          overflow-y: auto;
          overflow-x: hidden;
          .item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 0.64rem;
            background: #ffffff;
            font-size: 0.16rem;
            line-height: 0.34rem;
            color: #666666;
            &:hover {
              background-color: #f6f7f9;
            }
            &:hover .check {
              display: block;
            }
            &:hover .set {
              display: block;
            }
            &:active {
              background-color: #edeff3;
            }
            .check {
              display: none;
              position: absolute;
              left: 0.1rem;
            }
            .isChecked {
              display: block !important;
            }
            .person {
              display: flex;
              align-items: center;
              margin-left: 0.82rem;
              width: 1.9rem;
              .header {
                display: flex;
                align-items: center;
                img {
                  width: 0.32rem;
                  height: 0.32rem;
                  cursor: pointer;
                }
              }
              .person-message {
                // text-align: left;
                margin-left: 0.32rem;
                line-height: 0.25rem;
                .name {
                  // margin-left: 0.32rem;
                  width: 100%;
                }
              }
              .me {
                margin-left: 0.15rem;
                width: 1.48rem;
                height: 0.28rem;
                background: #5592fe;
                border-radius: 0.04rem;
                font-size: 0.16rem;
                font-weight: bold;
                line-height: 0.28rem;
                text-align: center;
                color: #ffffff;
              }
            }
            .num {
              margin-right: 0.5rem;
            }
            .guanliyuan {
              white-space: nowrap;
              margin-right: 0.5rem;
            }
            .function {
              white-space: nowrap;
              margin-right: 2.1rem;
            }
            .set {
              position: absolute;
              right: 0.3rem;
              display: none;
              img {
                display: flex;
                align-items: center;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>
