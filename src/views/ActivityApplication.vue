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
                  <el-breadcrumb-item :to="{ path: '/activityShow' }">查看活动</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/activityApplication' }"><span class="localMenuInfo">申请活动</span>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-header>
          </div>
          <div id="content" style="padding: 15px">
            <el-row>
              <el-col :span="24">
                <el-card shadow="always">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
                           label-width="100px" class="demo-ruleForm" style="width: 50%;text-align: left">
                    <el-form-item label="活动海报" prop="resource">

                      <el-upload action="" accept="image/jpeg,image/png"
                                 ref="upload"
                                 :auto-upload="false"
                                 :on-change="onUploadChange"
                                 list-type="picture"
                                 http-request="">
                        <el-button size="small" type="primary">点击上传</el-button>
                      </el-upload>

                    </el-form-item>
                    <el-form-item label="活动名称" prop="name">
                      <el-input v-model="ruleForm.name" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="活动地址" prop="gender">
                      <el-input v-model="ruleForm.address" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间" required>
                      <el-col :span="11">
                        <el-form-item prop="date1">
                          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                          style="width: 100%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col class="line" :span="2" style="text-align: center">-</el-col>
                      <el-col :span="11">
                        <el-form-item prop="date2">
                          <el-time-select placeholder="选择时间" v-model="ruleForm.date2"
                                          style="width: 100%;" :picker-options="{
                            start:'08:00',step:'00:15',end:'22:00'
                                          }">
                          </el-time-select>
                        </el-form-item>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="结束时间" required>
                      <el-col :span="11">
                        <el-form-item prop="date1">
                          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date3"
                                          style="width: 100%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col class="line" :span="2" style="text-align: center">-</el-col>
                      <el-col :span="11">
                        <el-form-item prop="date2">
                          <el-time-select placeholder="选择时间" v-model="ruleForm.date4"
                                          style="width: 100%;" :picker-options="{
                            start:'08:00',step:'00:15',end:'22:00'
                                          }">
                          </el-time-select>
                        </el-form-item>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="承办社团" prop="host">
                      <el-input v-model="ruleForm.host" style="width: 200px"></el-input>
                    </el-form-item>
                    <el-form-item label="人数上限" prop="limit">
                      <el-input v-model="ruleForm.limit" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">立即申请</el-button>
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
    name: "ActivityApplication",
    components: {
      Head,
      Aside
    },
    data() {
      return {
        ruleForm: {
          name: '',
          date1: '',
          date2: '',
          date3: '',
          date4: '',
          address: '',
          limit:'',
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          host: [
            {required: true, message: '请选择社团', trigger: 'blur'},
          ],
          address: [
            {required: true, message: '请输入活动地点', trigger: 'blur'},
          ],
          date1: [
            {required: true, message: '请输入开始时间', trigger: 'blur'},
          ],
          date2: [
            {required: true, message: '请输入开始时间', trigger: 'blur'},
          ],
          date3: [
            {required: true, message: '请输入结束时间', trigger: 'blur'},
          ],
          date4: [
            {required: true, message: '请输入结束时间', trigger: 'blur'},
          ],
          limit: [
            {required: true, message: '请输入人数上限', trigger: 'blur'},
          ],
        }
      };
    },
    methods: {
      onUploadChange(file) {
        const isIMAGE = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png');
        const isLt3M = file.size / 1024 / 1024 < 3;

        if (!isIMAGE) {
          this.$message.error('上传文件只能是图片格式!');
          return false;
        }
        if (!isLt3M) {
          this.$message.error('上传文件大小不能超过 1MB!');
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file.raw);
        reader.onload = function (e) {
          console.log(this.result)//图片的base64数据
        }
      },
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
