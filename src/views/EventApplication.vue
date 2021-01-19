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
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                           label-width="100px" class="demo-ruleForm" style="width: 50%;text-align: left">
                    <el-form-item label="活动海报" prop="photo">

                      <el-upload action="" accept="image/jpeg,image/png"
                                 ref="upload"
                                 :limit=1
                                 :auto-upload=false
                                 :on-change="onUploadChange"
                                 :before-upload="onUploadChange"
                                 list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>

                      </el-upload>

                    </el-form-item>
                    <el-form-item label="活动名称" prop="name">
                      <el-input v-model="ruleForm.name" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="活动地址" prop="address">
                      <el-input v-model="ruleForm.address" style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间" required>
                      <el-col :span="11">
                        <el-form-item prop="startDay">
                          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.startDay"
                                          style="width: 100%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col class="line" :span="2" style="text-align: center">-</el-col>
                      <el-col :span="11">
                        <el-form-item prop="startHour">
                          <el-time-select placeholder="选择时间" v-model="ruleForm.startHour"
                                          style="width: 100%;" :picker-options="{
                            start:'08:00',step:'00:15',end:'22:00'
                                          }">
                          </el-time-select>
                        </el-form-item>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="结束时间" required>
                      <el-col :span="11">
                        <el-form-item prop="endDay">
                          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.endDay"
                                          style="width: 100%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col class="line" :span="2" style="text-align: center">-</el-col>
                      <el-col :span="11">
                        <el-form-item prop="endHour">
                          <el-time-select placeholder="选择时间" v-model="ruleForm.endHour"
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
    let checkNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        let pattern = /^[0-9]*$/;
        if (!pattern.test(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 10 || value > 500) {
            callback(new Error('人数必须10人以上,500人以内'));
          } else {
            callback();
          }
        }
      }, 500);
    };
    return {
      uploadFileData: {},
      ruleForm: {
        name: '',
        startDay: '',
        startHour: '',
        endDay: '',
        endHour: '',
        address: '',
        limit: '',
      },
      rules: {
        photo: [
          {required: false, message: '请上传图片', trigger: 'blur'},
        ],
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
        ],
        host: [
          {required: true, message: '请选择社团', trigger: 'blur'},
        ],
        address: [
          {required: true, message: '请输入活动地点', trigger: 'blur'},
        ],
        startDay: [
          {required: true, message: '请选择开始时间', trigger: 'blur'},
        ],
        startHour: [
          {required: true, message: '请选择开始时间', trigger: 'blur'},
        ],
        endDay: [
          {required: true, message: '请选择结束时间', trigger: 'blur'},
        ],
        endHour: [
          {required: true, message: '请选择结束时间', trigger: 'blur'},
        ],
        limit: [
          {required: true, message: '请输入人数上限', trigger: 'blur'},
          {validator: checkNum, trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    clearUploadedImage() {
      this.$refs.upload.clearFiles();
    },
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
      let reader = new FormData();
      reader.append('file', file.raw);
      this.uploadFileData = reader;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.uploadFileData.append('eventName', "xxx");
          this.$axios.post(this.$axios.baseURL + '/event/applyEvent', this.uploadFileData)
            .then(res => {
              this.$message({
                message: '申请成功',
                type: 'success',
                duration: '1000'
              });
              this.uploadFileData = {};
              this.clearUploadedImage();
              this.$refs[formName].resetFields();
            })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.uploadFileData = {};
      this.clearUploadedImage();
      this.$refs[formName].resetFields();
    }
  }

}
</script>

<style scoped>
</style>
