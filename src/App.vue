<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100% !important;
  }

  html, body, #app, .box {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-y: auto !important;
  }
  .all-header {
    background-color: #0c9068;
    text-align: center;
    line-height: 60px;
    padding: 0 !important;
  }

  .el-aside {
    background-color: #ffffff;
    text-align: center;
    line-height: 148px;
  }

  .el-main {
    background-color: #f2f2f2;
    text-align: center;
  }

  .el-submenu .el-menu-item {
    min-width: 180px;
  }

  .el-card {
    border-radius: 10px
  }

  .tags {
    height: 50px;
  }

  .tag-header {
    height: 50px !important;
    line-height: 50px;
    background-color: #ffffff;
  }

  .localMenu {
    margin-left: 20px;
    line-height: 50px;
    font-size: 14px;
  }

  .localMenuInfo {
    color: #3cbcff !important;
    font-weight: 700;
  }
</style>
