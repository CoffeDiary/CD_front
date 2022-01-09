<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="nickname">nickname</label>
        <input type="text" id="nickname" v-model="nickname" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="passwordConfirm">password confirm</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
      </div>
      <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import { registerUser } from "../../api";

export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      nickname: '',
      password: '',
    passwordConfirm: '',
      username: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        email: this.email,
        nickName: this.nickname,
        password: this.password,
        role: "ROLE_USER",
        userName: this.username,
      };
      const response = await registerUser(userData);
      if (response.status == 200) {
        console.log(response);
        alert('회원가입 완료! 로그인 후 사용 가능합니다!');
        this.$router.push('/');
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
