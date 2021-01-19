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
                  <el-breadcrumb-item :to="{ path: '/' }">社团管理
                  </el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/accociationShow' }"><span class="localMenuInfo">社团列表</span>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/activityApplication' }">社团新闻</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/activityApplication' }">申请社团</el-breadcrumb-item>
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
                      <el-form-item label="社团分类:">
                        <el-select filterable="filterable" v-model="associationId" clearable placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.associationName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="社团名称:">
                        <el-input suffix-icon="el-icon-search" v-model="eventName" placeholder="请输入"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary"
                                   @click="initEventTable({'associationId': associationId,'eventName':eventName,pageSize: 10, pageNum: 1})">
                          查询
                        </el-button>
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
                    <span><b>校园社团</b></span>
                  </div>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <el-card class="box-card">
                        <div slot="header" class="clearfix">
                          <span>社团1</span>
                          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="text item">
                          <div style="float: left;margin-bottom: 20px;width: 50%">
                            <img src="http://img.pocketuni.net/data/app_ico/group6.jpg" class="image">
                          </div>
                          <div style="float: left">
                            xx
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card class="box-card">
                        <div slot="header" class="clearfix">
                          <span>社团2</span>
                          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="text item">
                          <div style="float: left;margin-bottom: 20px;width: 50%">
                            <img src="http://img.pocketuni.net/data/app_ico/group6.jpg" class="image">
                          </div>
                          <div style="float: left">
                            xx
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card class="box-card">
                        <div slot="header" class="clearfix">
                          <span>社团3</span>
                          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="text item">
                          <div style="float: left;margin-bottom: 20px;width: 50%">
                            <img src="http://img.pocketuni.net/data/app_ico/group6.jpg" class="image">
                          </div>
                          <div style="float: left">
                            xx
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
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
  name: "AssociationShow",
  components: {
    Head,
    Aside
  },
  data() {
    return {
      options: [],
      associationId: '',
      eventName: '',
      tableData: [],
      dialogVisible: false,
      isJoin: '报名',
      EventInfo: {
        id: '',
        eventName: '',
        associationName: '',
        beginTime: '',
        endTime: '',
        memberCount: '',
        eventAddress: '',
        limit: '',
        isJoin: false
      }
    }
  },
  methods: {},
  created() {

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

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
