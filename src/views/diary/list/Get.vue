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
          <th scope="row">{{ diary.diaryId }}</th>
          <td>{{ diary.title }}</td>
          <td>{{ diary.content }}</td>
          <td>{{ diary.secret }}</td>
          <button type="button" class="btn btn-outline-primary" v-on:click="modifyDiary(diary);">Modify</button>
          <button type="button" class="btn btn-outline-primary" v-on:click="deleteDiary(diary.diaryId);">Delete</button>
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
  methods: {
    modifyDiary: function(diary) {
      this.$router.push({
        name: 'DiaryPut',
        params: {
          diaryId: diary.diaryId,
          title: diary.title,
          content: diary.content,
          secret: diary.secret,
        }
      });
    },
    deleteDiary: function(diaryId) {
      this.$router.push({
        name: 'DiaryDelete',
        params: {
          diaryId: diaryId
        }
      });
    },
  },
  async mounted() {
    const userData = '';
    try {
      const response = await getDiaryList(userData);
      this.diarylist = response.data;
      console.log(this.diarylist);
    }
    catch (error) {
      console.log(error.response.data);
      this.logMessage = error.response.data;
    }
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
