<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="username" class="form-label">username</label>
        <input type="text" id="username" class="form-control" v-model="username" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">password</label>
        <input type="password" id="password" class="form-control" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Signin</button>
    </form>
  </div>
</template>

<script>
import { loginUser } from "../../../api";
export default {
  name: 'SigninForm',
  data() {
    return {
      password: '',
      username: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        password: this.password,
        userName: this.username,
      };
      try {
        const response = await loginUser(userData);
        if (response.status == 200) {
          alert('Welcome to Coffee Diary!');
          this.$cookies.set("access_token", response.data);
          this.emitter.emit('logged');
          this.$router.push('/home');
        }
      }
      catch (error) {
        alert(error.response.message);
        console.log(error.response.data);
        this.logMessage = error.response.data;
      }
    },
  },
};
</script>

<style scoped></style>
