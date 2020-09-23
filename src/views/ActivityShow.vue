<template>
  <div class="box">
    <el-container style="height: 100%">
      <!--  头部  -->
      <el-header class="all-header">
        <Head></Head>
      </el-header>
      <el-container>
        <!--  侧边栏  -->
        <el-aside width="180px">
          <Aside></Aside>
        </el-aside>
        <el-main style="width: 100%;padding: 0;margin: 0">
          <div class="tags">
            <el-header class="tag-header" style="padding: 0!important;">
              <div class="">
                <el-breadcrumb separator="/" class="localMenu">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/activityShow' }"><span class="localMenuInfo">查看活动</span>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/activityApplication' }">申请活动</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-header>
          </div>
          <div id="content" style="padding: 15px">
            <el-row>
              <el-col :span="24">
                <el-card shadow="always">
                  <div class="searchbox">
                    <el-form :inline="true">
                      <el-form-item label="承办社团:">
                        <el-input suffix-icon="el-icon-search" placeholder="请选择社团"></el-input>
                      </el-form-item>
                      <el-form-item label="活动名称:">
                        <el-input suffix-icon="el-icon-search" placeholder="请输入活动名称"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary">查询</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-row style="padding-top: 15px">
              <el-col>
                <el-card>
                  <div slot="header" class="card-header">
                    <span><b>活动列表</b></span>
                  </div>
                  <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="activityName"
                      label="活动名称">
                    </el-table-column>
                    <el-table-column
                      prop="hostCollege"
                      label="承办社团">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="活动地址">
                    </el-table-column>
                    <el-table-column
                      prop="startTime"
                      label="开始时间">
                    </el-table-column>
                    <el-table-column
                      prop="endTime"
                      label="结束时间">
                    </el-table-column>
                    <el-table-column
                      prop="numLimit"
                      label="人数限制">
                    </el-table-column>
                  </el-table>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Head from "../components/Head";
  import Aside from "../components/Aside";

  export default {
    name: "ActivityShow",
    components: {
      Head,
      Aside
    },
    data() {
      return {
        tableData: [
          {
            activityName: '羽毛球大赛',
            startTime: '2021-09-03 14:00:00',
            endTime: '2021-09-03 18:00:00',
            address: '体育馆羽毛球室01',
            numLimit: '40',
            hostCollege: '羽毛球社'
          },
          {
            activityName: '脱口秀大会',
            startTime: '2021-09-03 9:00:00',
            endTime: '2021-09-03 11:00:00',
            address: '多功能厅',
            numLimit: '200',
            hostCollege: '脱口秀社'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .searchbox {
    display: inline-block;
    float: left;
  }

  .card-header {
    text-align: left;
  }
</style>
