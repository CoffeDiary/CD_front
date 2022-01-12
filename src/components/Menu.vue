<template>
  <nav class="nav">
    <router-link to="/diary/post" class="nav-link">today's Diary</router-link>
    <router-link to="/diary/get" class="nav-link">My Diary</router-link>
    <router-link to="/user/get" class="nav-link">My Page</router-link>
    <router-link to="/logout" class="nav-link">Logout</router-link>
  </nav>
</template>

<script>
export default {
  // data() {
  //   return {
  //     isKey: false,
  //   };
  // },
  // mounted() {
  //   if (this.$cookies.isKey("access_token") == true){
  //     this.isKey = true
  //   }
  // },
}
</script>

<style scoped>
nav {
    flex: 1;
}
</style>
