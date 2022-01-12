<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="mb-3">
      <router-link to="/signin" class="btn btn-outline-primary">sign in</router-link>
    </div>
    <div class="mb-3">
      <router-link to="/signup" class="btn btn-primary">sign up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data() {
    return {
      title: "Coffee Diary",
      }
  },
};
</script>

<style scoped>

</style>
