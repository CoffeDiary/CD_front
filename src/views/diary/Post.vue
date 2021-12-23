<template>
  <div>
    <h2>Today's Diary</h2>
    <form @submit.prevent="submitForm">
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  methods: {
    submitForm() {
      this.$router.push('/diary/get');
    }
  }
};
</script>

<style scoped>
h2 {
  color: #0051ca
}
.wrap {
  display: flex;
}
</style>
