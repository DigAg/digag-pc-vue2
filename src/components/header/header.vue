<template>
  <div class="header">
    <div class="header__container">
      <a href="/" class="header__logo_wrap">
        <img src="./logo.svg" class="header__logo_img">
      </a>
      <div class="header__nav">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  border-bottom: 1px solid #f1f1f1; // background: #ccc;
  .header__container {
    position: relative;
    display: flex;
    width: 1024px;
    height: 100%;
    margin: 0 auto; // 居中对齐
    align-items: center;
    .header__nav {
      margin-left: 32px;
    }
  }
}
</style>

