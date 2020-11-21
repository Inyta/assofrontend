<template>
  <div>
    <el-container>
      <el-header>
        <img src="../assets/logo1.png" class="logo">
      </el-header>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="userId">
            <el-input v-model="ruleForm.userId"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input show-password v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserLogin",
  data() {
    return {
      ruleForm: {
        userId: '',
        password: '',
      },
      rules: {
        userId: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post(this.$axios.baseURL + '/login', this.ruleForm)
            .then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: '1000'
                });
                //设置Token
                _this.$store.dispatch("setToken", res.data.result.token)
                _this.$store.dispatch("setUserName", res.data.result.userName)
                setTimeout(function () {
                  _this.$router.push('/userInfo')
                }, 500)

              } else {
                this.$message.error('账号密码错误');
              }
            })
        } else {
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
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: #e9eef3;*/
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.logo {
  height: 90%;
  margin-top: 0.2rem;
}

.demo-ruleForm {
  max-width: 30rem;
  margin: 0 auto;
}
</style>
