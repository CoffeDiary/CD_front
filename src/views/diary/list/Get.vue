<template>
  <div>
    <h2>My Diary</h2>
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
import { getDiaryList } from '../../../../api';
export default {
  name: "app",
  components: {
  },
  data() {
    return {
      diarylist: Array,
    }
  },
  async mounted() {
    const userData = '';
    const response = await getDiaryList(userData);
    this.diarylist = response.data;
    console.log(this.diarylist);
  }
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
