<template>
  <div>
    <el-menu default-active="$router.path" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="padding-right: 30px">个人中心</span>
        </template>
        <el-menu-item index="/userInfo">个人信息</el-menu-item>
        <el-menu-item index="/resetPwd">修改密码</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-bicycle"></i>
          <span style="padding-right: 30px">活动广场</span>
        </template>
        <el-menu-item index="/activityShow">查看活动</el-menu-item>
        <el-menu-item index="/activityApplication">申请活动</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-bicycle"></i>
          <span style="padding-right: 30px">社团管理</span>
        </template>
        <el-menu-item index="/">社团列表</el-menu-item>
        <el-menu-item index="/">社团新闻</el-menu-item>
        <el-menu-item index="/">申请社团</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="padding-right: 30px">雁过留声</span>
        </template>
        <el-menu-item index="/">留言板</el-menu-item>
        <el-menu-item index="/">意见反馈</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Aside"
  }
</script>

<style scoped>
  .el-submenu .el-menu-item {
    min-width: 180px;
  }
</style>
