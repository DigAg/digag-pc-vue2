<template>
  <div class="home">
    <ag-header>
      <ag-navbar></ag-navbar>
    </ag-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AgHeader from '@/components/header'
import AgNavbar from '@/components/navbar'
export default {
  name: 'Home',
  components: { AgHeader, AgNavbar },
  created() {
    this.$router.push('/')
  }
}
</script>
<style>
.container {
  padding-top: 80px;
  text-align: center;
}
</style>

