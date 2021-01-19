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
                        <el-select filterable="filterable" v-model="associationId" clearable placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.associationName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="活动名称:">
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
                    <span><b>活动</b></span>
                  </div>
                  <el-row>
                    <el-col :span="4" v-for="(item) in tableData" :key="item.associationId" :offset="2" :pull="1"
                            style="padding-top: 15px">
                      <el-card :body-style="{ padding: '0px' }">
                        <el-image
                          :src="item.eventPic" fit="fill"></el-image>
                        <div style="padding: 14px;">
                          <span>{{ item.eventName }}</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ item.beginTime }}</time>
                            <el-button type="text" class="button" @click="clickEventInfo(item.associationId)">详情
                            </el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
            <el-dialog
              title="活动详情 "
              :visible.sync="dialogVisible"
              width="30%" center>
              <div>
                <h3>活动名称:&nbsp;&nbsp;{{ EventInfo.eventName }}</h3>
              </div>
              <div>
                <h3>承办社团:&nbsp;&nbsp;{{ EventInfo.associationName }}</h3>
              </div>
              <div>
                <h3>活动地点:&nbsp;&nbsp;{{ EventInfo.eventAddress }}</h3>
              </div>
              <div>
                <h3>开始时间:&nbsp;&nbsp;{{ EventInfo.beginTime }}</h3>
              </div>
              <div>
                <h3>结束时间:&nbsp;&nbsp;{{ EventInfo.endTime }}</h3>
              </div>
              <div>
                <h3>参与人数:&nbsp;&nbsp;{{ EventInfo.memberCount }}/{{ EventInfo.limit }}</h3>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="joinEvent">{{ isJoin }}</el-button>
                <el-button @click="dialogVisible = false">取消</el-button>
              </div>
            </el-dialog>
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
  methods: {
    joinEvent() {
      console.log(this.EventInfo.join)
      if (this.EventInfo.join) {
        this.$axios.get(this.$axios.baseURL + '/event/cancelJoinEvent', {
          params: {
            'eventId': this.EventInfo.id,
          }
        }).then(res => {
          this.dialogVisible = false
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
        })
      } else {
        this.$axios.get(this.$axios.baseURL + '/event/joinEvent', {
          params: {
            'eventId': this.EventInfo.id,
            'limit': this.EventInfo.limit
          }
        }).then(res => {
          this.dialogVisible = false
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
        })
      }
    },
    clickEventInfo(id) {
      this.dialogVisible = true
      this.$axios.get(this.$axios.baseURL + '/event/queryEventInfo', {
        params: {
          'eventId': id
        }
      }).then(res => {
        this.EventInfo = JSON.parse(JSON.stringify(res.data.result))
        console.log(this.EventInfo)
        if (this.EventInfo.join) {
          this.isJoin = '取消报名'
        }
      })
    },
    initAssociationList() {
      this.$axios.get(this.$axios.baseURL + '/association/select')
        .then(res => {
            this.options = JSON.parse(JSON.stringify(res.data.result))
          }
        );
    },
    initEventTable(params) {
      this.$axios.post(this.$axios.baseURL + '/event/queryEventByCond', params)
        .then(res => {
            this.tableData = JSON.parse(JSON.stringify(res.data.result.data))
          }
        );
    },
  },
  created() {
    this.initAssociationList()
    this.initEventTable({pageSize: 10, pageNum: 1})
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
