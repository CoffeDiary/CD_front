<template>
<div>Logout</div>
</template>

<script>

export default {
  name: 'SigninForm',
  mounted() {
    this.$cookies.remove("access_token");
    this.$router.push('/');
  },
};
</script>

<style scoped></style>
