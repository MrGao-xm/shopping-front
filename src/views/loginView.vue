<template>
  <div class="div_color">
    <img :src="login_center_bg" class="login-center-layout">
    <div class="div_box">
      <img src="../icons/svg/login-mall.svg" class="img_p">
      <h2 class="login-title color">mall-admin-web</h2>
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" 
                class="login_form" 
                :rules="loginRules" 
                ref="loginFormRef">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username">
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input show-password prefix-icon="el-icon-lock" v-model="loginForm.password">
          </el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%; margin-right: 20px" type="primary" :loading="loading" @click="login">登录</el-button>
          <el-button style="width: 45%" type="primary" :loading="loading" @click="resetloginform">清空</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>

<script>
import { Result } from 'element-ui';

export default {
  data() {
    return {
      // 登录表单的数据绑定
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则
      loginRules: {
        username: [{ required: true, message: "请输入正确用户名", trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', message: "请输入正确密码" }]
      },
    }
  },
  methods:{
    resetloginform(){
      this.$refs.loginFormRef.resetFields();
    },
    login(){
      this.$refs.loginFormRef.validate((valid)=>{
        if(!valid) return;
        // this.$http.post("login",this.loginForm);
        // console.log(Result)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.div_box {
  position: absolute;
  width: 360px;
  height: 55%;
  background-color: aliceblue;
  border-top: 10px solid #409EFF;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px 1px #999
}

.div_color {
  background-color: azure;
  height: 100%;
}

.img_p {
  display: block;
  margin: 10px auto;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login-title {
  text-align: center;
}

.color {
  color: #409EFF;
}

.login-center-layout {
  background: #409EFF;
  width: 100%;
  height: 35%;
  position: relative;
  object-fit: contain;
  top: 30%;
}
</style>
