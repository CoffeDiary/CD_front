<template>
  <div>
    <h2>Today's Diary</h2>
  </div>
  <div class="container">
    <form @submit.prevent="diaryPostForm">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" id="title" class="form-control"  v-model="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea type="text" id="content" class="form-control" rows="3" v-model="content" />
      </div>
      <div class="form-check">
        <label for="secret" class="form-check-label">secret</label>
        <input type="checkbox" id="secret" class="form-check-input" v-model="secret" />
      </div>
      <button type="submit" class="btn btn-primary">submit</button>
    </form>
  </div>
</template>

<script>
import { postDiary } from "../../../api";
export default {
  name: "diaryPostForm",
  data() {
    return {
      title: '',
      content: '',
      secret: '',
    };
  },
  methods: {
    async diaryPostForm() {
      try {
        const diaryData = {
          title: this.title,
          content: this.content,
          secret: this.secret,
        };
        const response = await postDiary(diaryData);
        if (response.status == 200) {
          alert('success!');
          this.$router.push('/diary/mylist/get');
        }
        else {
          alert('Fail');
          alert(response.data);
        }
      }
      catch (error) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
      }
    },
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
