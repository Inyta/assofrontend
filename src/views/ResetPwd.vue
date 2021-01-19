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
                  <el-breadcrumb-item :to="{ path: '/userInfo' }">个人信息</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/' }"><span class="localMenuInfo">修改密码</span></el-breadcrumb-item>
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
                    <el-form-item label="原密码" prop="exPwd">
                      <el-input show-password v-model="ruleForm.exPwd" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPwd">
                      <el-input show-password v-model="ruleForm.newPwd" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="密码确认" prop="pwdCheck">
                      <el-input show-password v-model="ruleForm.pwdCheck" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                      <el-button @click="resetForm('ruleForm')">重置</el-button>
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
    name: "ResetPwd",
    components: {
      Head,
      Aside
    },
    data() {
      return {
        ruleForm: {
          exPwd: '',
          newPwd: '',
          pwdCheck: ''
        },
        rules: {
          exPwd: [
            {required: true, message: '请输入原密码', trigger: 'blur'},
            {min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur'}
          ],
          newPwd: [
            {required: true, message: '请输入新密码', trigger: 'blur'},
            {min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur'}
          ],
          pwdCheck: [
            {required: true, message: '请输入新密码', trigger: 'blur'},
            {min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
</style>
