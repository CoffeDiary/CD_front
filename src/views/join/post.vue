<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="username">username</label>
        <input type="text" id="username" class="form-control" v-model="username" />
        <div id="usernamelHelp" class="form-text">This is your ID.</div>
      </div>
      <div class="mb-3">
        <label for="password">password</label>
        <input type="password" id="password" class="form-control" v-model="password" />
      </div>
      <div class="mb-3">
        <label for="passwordConfirm">password confirm</label>
        <input type="password" id="passwordConfirm" class="form-control" v-model="passwordConfirm" />
      </div>
      <div class="mb-3">
        <label for="email">email</label>
        <input type="text" id="email" class="form-control" v-model="email" />
      </div>
      <div class="mb-3">
        <label for="nickname">nickname</label>
        <input type="text" id="nickname" class="form-control" v-model="nickname" />
      </div>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form>
  </div>
</template>

<script>
import { registerUser } from "../../../api";

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
