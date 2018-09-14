<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 200px;
    background: url("../assets/index_bg.png") no-repeat;
    background-size: cover;
  }
  .h1-title {
    color: #000;
  }
  .page__bd {
    margin-top: 40px;
  }
  .login-main {
    width: 400px;
    margin: 0 auto;
  }
  .el-input {
    margin-bottom: 20px;
  }
  .el-btn {
    width: 100%;
  }
</style>
<template>
  <el-container class="page">
    <el-header class="page__hd">
      <h1 class="h1-title">后台管理系统</h1>
    </el-header>
    <el-main class="page__bd">
      <div class="login-wrap">
        <div class="login-main">
          <el-input class="el-input" type="text" v-model="username" clearable placeholder="请输入用户名"></el-input>
          <el-input class="el-input" type="password" v-model="password" clearable placeholder="请输入密码"></el-input>
          <el-button class="el-btn" type="primary" @click="login">登录</el-button>
        </div>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login() {
        if (this.username === '' || this.password === '') {
          this.$message.error('账号或密码不能为空哦');
          return
        }
        if (this.username !== 'linkeddb' || this.password !== '123456') {
          this.$message.error('账号或密码不正确哦');
          return
        }
          window.localStorage.setItem('userAuth','admin')
        this.$router.push({name: 'searchPage'})
      }
    }
  }
</script>
