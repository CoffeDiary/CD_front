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

export default {
  name: "app",
  components: {
  },
  data() {
    return {
      diarylist: [
        {pk: 1, title: 'coffee1', content: '보통', secret: true},
        {pk: 2, title: 'coffee2', content: '맛있음', secret: true},
        {pk: 3, title: 'coffee3', content: '내가 먹은 것 중에 제일 베스트', secret: false},
        {pk: 4, title: 'coffee4', content: '욱휘커피 is 뭔들', secret: true},
        {pk: 5, title: 'coffee5', content: '수준 이상', secret: true},
      ],
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
