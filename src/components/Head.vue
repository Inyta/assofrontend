<template>
  <div>
    <div class="userLogo">
      <img src="../assets/logo1.png" class="logo">
    </div>
    <div class="userInfo">
      <div class="name" style="float:right;font-size: 22px;margin-right: 30px">
        <el-dropdown>
              <span class="el-dropdown-link" style="color: #f2f2f2">
                {{userName}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="avatar" style="float: right">
        <el-avatar icon="el-icon-user-solid" fit=scale-down  style="margin-top: 10px;margin-right: 20px">

        </el-avatar>
      </div>
      <div class="bell"
           style="font-size: 24px;font-weight: bold;color: #f2f2f2;float: right;margin-right: 20px;margin-top: 2px">
        <i class="el-icon-bell"></i>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters,mapActions } from 'vuex';
  export default {
    name: "Head",
    data() {
      return {
        userName: '',
      }
    },
    created() {
      this.userName = this.$store.getters.getUserName
    }
  }
</script>

<style scoped>

  .userLogo {
    float: left;
  }

  .userInfo {
    float: right;
  }

  .logo {
    height: 50px;
    width: 300px;
    margin-top: 6px;
    margin-left: 20px;
    float: left;
  }
</style>
