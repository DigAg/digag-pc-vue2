<template>
  <div class="login">
    <div class="login__wrap">
      <div class="login__container">
        <div class="clearfix">
          <div class="login__title">登陆</div>
          <div class="login__close" @click="handleClose">&Chi;</div>
        </div>
        <div class="login__input_group">
          <input type="text" placeholder="请填写手机号或邮箱" class="login__input">
          <input type="password" placeholder="请输入密码" class="login__input">
        </div>
        <div class="login__submit">登陆</div>
        <div class="login__tips">
          没有账号？
          <span class="login__tips__register">注册</span>
          <span class="login__tips__not-password">忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    methods: {
      handleClose() {
        this.$emit('close')
      }
    }
  }
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  background: rgba(0, 0, 0, .3);
  .login__wrap {
    height: 280px;
    width: 300px;
    background: #fff;
  }
  .login__container {
    position: relative;
    padding: 20px;
  }
  .login__title {
    float: left;
    font-size: 20px;
    font-weight: bold;
  }
  .login__close {
    float: right;
    color: #ccc;
    cursor: pointer;
  }
  .login__input_group {
    margin-top: 24px;
    .login__input {
      margin-top: 8px;
      padding: 12px;
      width: 100%;
      border: 1px solid #e9e9e9;
      border-radius: 2px;
      outline: none;
      box-sizing: border-box;
      font-size: .7em;
    }
    .login__input:focus {
      border: 1px solid #007fff;
    }
  }
  .login__submit {
    margin-top: 16px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #007fff;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  .login__tips {
    margin-top: 12px;
    width: 100%;
    color: #8b9196;
    font-size: .8em;
    .login__tips__register {
      color: #007fff;
      cursor: pointer;
    }
    .login__tips__not-password {
      color: #007fff;
      float: right;
      cursor: pointer;
    }
  }
}
</style>

