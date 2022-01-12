<template>
  <nav class="nav" v-if="isLogged === true">
    <router-link to="/diary/post" class="nav-link">today's Diary</router-link>
    <router-link to="/diary/get" class="nav-link">My Diary</router-link>
    <router-link to="/user/get" class="nav-link">My Page</router-link>
    <router-link to="/logout" class="nav-link">Logout</router-link>
  </nav>
  <nav class="nav" v-else>
    <router-link to="/signin" class="nav-link">signin</router-link>
    <router-link to="/signup" class="nav-link">signup</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLogged: this.checkIfIsLogged()
    };
  },
  created () {
    this.emitter.on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {
    checkIfIsLogged () {
      if (this.$cookies.isKey("access_token") == true) {
        return true;
      }
      else {
        return false;
      }
    }
  },
};
</script>

<style scoped>
nav {
    flex: 1;
}
</style>
