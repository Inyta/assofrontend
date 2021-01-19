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
        <!--  内容  -->
        <el-main style="width: 100%;padding: 0;margin: 0">
          <div class="tags">
            <el-header class="tag-header" style="padding: 0!important;">
              <div class="">
                <el-breadcrumb separator="/" class="localMenu">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item><span class="localMenuInfo">个人信息</span></el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/resetPwd' }">修改密码</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-header>
          </div>
          <div id="content" style="padding: 15px">
            <el-row :gutter="10">
              <el-col :span="24">
                <el-card shadow="always">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
                           label-width="100px" class="demo-ruleForm" style="width: 50%;text-align: left">
                    <el-form-item label="" prop="resource">
                      <el-upload action="http://localhost:8081/uploadAvatar"
                                 list-type="text"
                                 :on-success="getAvatarUrl"
                                 :headers="myHeaders">
                        <el-avatar shape="circle" :size="120" src=""></el-avatar>
                      </el-upload>

                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="ruleForm.userName" style="width: 200px;" :disabled="isDisabled"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                      <el-radio-group v-model="ruleForm.gender" :disabled="isDisabled">
                        <el-radio label="MALE">男性</el-radio>
                        <el-radio label="FEMALE">女性</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phone">
                      <el-input v-model="ruleForm.phone" style="width: 200px" :disabled="isDisabled"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" :btnChange="btnChange" @click="submitForm('ruleForm')">{{ btnText }}
                      </el-button>
                      <el-button v-show="isShow" @click="resetForm('ruleForm')">取消</el-button>
                    </el-form-item>
                  </el-form>
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
  name: "UserInfo",
  components: {
    Head,
    Aside
  },
  data() {
    return {
      // upLoadUrl: this.$axios.baseURL + 'uploadAvatar',
      isDisabled: true,
      isShow: false,
      btnChange: '0',
      btnText: '修改',
      ruleForm: {
        userName: '',
        gender: '',
        phone: '',
        avatarUrl: '',
      },
      original: {
        userName: '',
        gender: '',
        phone: '',
        avatarUrl: '',
      },
      myHeaders: {
        Authorization: this.$store.state.JwtToken
      },
      rules: {
        userName: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请选择性别', trigger: 'change'}
        ],
        phone: [
          {required: true, message: '请输入联系方式', trigger: 'blur'},
          {min: 11, max: 11, message: '手机号码格式错误', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    getAvatarUrl(response) {
      this.ruleForm.avatarUrl = response.result
    },
    submitForm(formName) {
      if (this.btnChange === '0') {
        this.isDisabled = false
        this.btnText = '保存'
        this.btnChange = '1'
        this.isShow = true
      } else {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let config = {
              headers: {
                'Authorization': this.$store.state.JwtToken
              }
            }
            this.$axios.post(this.$axios.baseURL + '/user/editPersonalInfo', this.ruleForm, config)
              .then(res => {
                if (res.data.code === 0) {
                  this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration: '1000'
                  });
                  this.$store.dispatch("setUserName", this.ruleForm.userName)
                } else {
                  this.$message({
                    message: '修改失败，发生错误',
                    type: 'error',
                    duration: '1000'
                  });
                }
              })
            this.btnText = '修改'
            this.btnChange = '0'
            this.isDisabled = true
            this.isShow = false
          } else {
            return false;
          }
        });
      }
    },
    resetForm(formName) {
      this.btnText = '修改'
      this.btnChange = '0'
      this.isShow = false
      this.isDisabled = true
      this.ruleForm.userName = this.original.userName;
      this.ruleForm.phone = this.original.phone;
      this.ruleForm.gender = this.original.gender;
    }
  },
  created() {
    this.$axios.get(this.$axios.baseURL + '/user/queryPersonalInfo')
      .then(res => {
        if (res.data.code === 0) {
          this.ruleForm.userName = res.data.result.userName;
          this.ruleForm.phone = res.data.result.phone;
          this.ruleForm.gender = res.data.result.gender;
          this.ruleForm.avatarUrl = res.data.result.avatarUrl;
          this.original.userName = res.data.result.userName;
          this.original.phone = res.data.result.phone;
          this.original.gender = res.data.result.gender;
        } else {
          this.$message({
            message: '查询个人信息失败',
            type: 'error',
            duration: '1000'
          });
        }
      })
  }
}
</script>

<style scoped>

</style>
