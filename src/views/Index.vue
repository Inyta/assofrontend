<template>
    <div class="box">
        <el-container style="height: 100%">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="1-1">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item index="1-1">111</el-menu-item>
                            <el-menu-item index="1-2">222</el-menu-item>
                            <el-menu-item index="1-3">333</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-bicycle"></i>
                                <span>导航二</span>
                            </template>
                            <el-menu-item index="2-1">111</el-menu-item>
                            <el-menu-item index="2-2">222</el-menu-item>
                            <el-menu-item index="2-3">333</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Index",

    }
</script>

<style scoped>
    .el-header {
        background-color: #3e3e3e;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #ffffff;
        text-align: center;
        line-height: 148px;
    }

    .el-main {
        background-color: #E9EEF3;
        text-align: center;
        line-height: 160px;
    }
</style>
