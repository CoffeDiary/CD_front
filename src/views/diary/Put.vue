<template>
  <div>
    <h2>Diary fix</h2>
  </div>
  <div class="container">
    <form @submit.prevent="diaryPutForm">
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
import { putDiary } from "../../../api";
export default {
  name: "diaryPutForm",
  components: {
  },
  data() {
    return {
      diaryId: this.$route.params.diaryId,
      title: this.$route.params.title,
      content: this.$route.params.content,
      secret: this.$route.params.secret,
    };
  },
  methods: {
    async diaryPutForm() {
      try {
        const diaryData = {
          title: this.title,
          content: this.content,
          secret: this.secret,
        };
        const response = await putDiary(diaryData, this.diaryId);
        if (response.status == 200) {
          alert('success!');
          this.$router.push('/diary/list/get');
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
