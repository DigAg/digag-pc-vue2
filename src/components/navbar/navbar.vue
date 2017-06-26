<template>
  <div id="navbar-main">
    <div class="container">
      <a href="/" class="logo">
        <img src="./logo.svg" class="logo-img">
      </a>

    </div>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style lang="less" scoped>
#navbar-main {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
  // background: #ccc;
  .container {
    position: relative;
    display: flex;
    width: 960px;
    height: 100%;
    margin: 0 auto;
    // 居中对齐
    align-items: center;
  }
}
</style>

