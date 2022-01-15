<template>
  <div>
    <h2>{{ title }} - {{ diaryId }}</h2>
  </div>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Secret</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="diary in diarylist" v-bind:key='diary.id'>
          <th scope="row">{{ diary.pk }}</th>
          <td>{{ diary.title }}</td>
          <td>{{ diary.content }}</td>
          <td>{{ diary.secret }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getDiary } from '../../../api';
export default {
  data() {
    return {
      title: 'my diary',
      diaryId: this.$route.params.diaryId,
      // diarylist: {},
    };
  },
  async mounted() {
    try {
      const response = await getDiary(this.diaryId);
      console.log(response);
    }
    catch (error) {
      alert(error.response.message);
      console.log(error.response.data);
      this.logMessage = error.response.data;
    }
  },
};
</script>

<style scoped>
h2 {
  color: #000000
}
.wrap {
  display: flex;
}
</style>
