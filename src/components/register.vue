<template>
  <div class="register">
    <div class="register__wrap">
      <div class="register__container">
        <div class="clearfix">
          <div class="register__title">注册</div>
          <div class="register__close" @click="handleClose">&Chi;</div>
        </div>
        <div class="register__input_group">
          <input type="text" placeholder="请输入用户名" class="register__input">
          <input type="text" placeholder="请填写手机号或邮箱" class="register__input">
          <input type="password" placeholder="请输入密码" class="register__input">
        </div>
        <div class="register__submit">注册</div>
        <div class="register__login">
          <span>已有账号登陆</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
.register {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  background: rgba(0, 0, 0, .3);
  .register__wrap {
    height: 320px;
    width: 300px;
    background: #fff;
  }
  .register__container {
    position: relative;
    padding: 20px;
  }
  .register__title {
    float: left;
    font-size: 20px;
    font-weight: bold;
  }
  .register__close {
    float: right;
    color: #ccc;
    cursor: pointer;
  }
  .register__input_group {
    margin-top: 24px;
    .register__input {
      margin-top: 8px;
      padding: 12px;
      width: 100%;
      border: 1px solid #e9e9e9;
      border-radius: 2px;
      outline: none;
      box-sizing: border-box;
      font-size: .7em;
    }
    .register__input:focus {
      border: 1px solid #007fff;
    }
  }
  .register__submit {
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
  .register__login {
    margin-top: 12px;
    width: 100%;
    text-align: center;
    color: #007fff;
    font-size: .8em;
    cursor: pointer;
  }
}
</style>

