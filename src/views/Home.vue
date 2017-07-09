<template>
  <div class="home">
    <ag-header>
      <ag-navbar @auth="onAuth"></ag-navbar>
    </ag-header>
    <div class="container">
      <router-view></router-view>
    </div>
  
    <ag-register v-if="registerDialog" @close="()=>{registerDialog=false}"></ag-register>
    <ag-login v-if="loginDialog" @close="()=>{loginDialog=false}"></ag-login>
  
  </div>
</template>
<script>
import AgHeader from '@/components/header'
import AgNavbar from '@/components/navbar'
import AgRegister from '@/components/register'
import AgLogin from '@/components/login'
export default {
  name: 'Home',
  components: { AgHeader, AgNavbar, AgRegister, AgLogin },
  data() {
    return {
      registerDialog: false,
      loginDialog: false
    }
  },
  methods: {
    onAuth(type) {
      switch (type) {
        case 'login':
          this.loginDialog = true
          break
        case 'register':
          this.registerDialog = true
          break
      }
    }
  },
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

