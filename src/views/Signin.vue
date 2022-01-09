<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Signin</button>
    </form>
  </div>
</template>

<script>
import { loginUser } from "../../api";

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
      const response = await loginUser(userData);

      if (response.status == 200) {
        console.log(response);
        alert('Welcome to Coffee Diary!');
        this.$cookies.set("access_token", response.data);
        this.$router.push('/home');
      }
      else {
        alert('Fail');
        alert(response.data);
      }
    },
  },
};
</script>

<style scoped></style>
