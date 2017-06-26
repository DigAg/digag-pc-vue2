<template>
  <div id="home">
    <ag-navbar></ag-navbar>
    <div>==</div>
    <router-view></router-view>
  </div>
</template>
<script>
import AgNavbar from '@/components/navbar/navbar.vue'
export default {
  name: 'Home',
  components: { AgNavbar }
}
</script>
