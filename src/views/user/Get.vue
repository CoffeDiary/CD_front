<template>
  <div>
    <h2>{{ title }} - {{ username }}</h2>
  </div>
  <div>
    <ul class="list-group">
      <li class="list-group-item">username : {{ username }}</li>
      <li class="list-group-item">userId : {{ userinfo.userId }}</li>
      <li class="list-group-item">
        <button class="btn d-inline-flex align-items rounded collapsed" data-bs-target="#recipe-collapse" aria-expanded="false" data-bs-toggle="collapse">[recipe]
        <p class="collapse" id="recipe-collapse" v-for="rec in userinfo.recipes" v-bind:key='rec.id'>
            <br>
            recipeId: {{ rec.recipeId }}<br>
            coffeeAmount: {{ rec.coffeeAmount }}<br>
            coffeeBean: {{ rec.coffeeBean }}<br>
            grindingPoint: {{ rec.grindingPoint }}<br>
            waterAmount: {{ rec.waterAmount }}<br>
            waterDegree: {{rec.waterDegree }}<br>
            createdDate: {{ rec.createdDate }}<br>
            modifiedDate: {{ rec.modifiedDate }}<br>
          </p>
        </button>
      </li>
      <li class="list-group-item">
        <button class="btn d-inline-flex align-items rounded collapsed" data-bs-target="#diary-collapse" aria-expanded="false" data-bs-toggle="collapse">[diary]
          <p class="collapse" id="diary-collapse" v-for="dia in userinfo.diaries" v-bind:key='dia.id'>
            <br>
            diaryId: {{ dia.diaryId }}<br>
            title: {{ dia.title }}<br>
            content: {{ dia.content }}<br>
            secret: {{ dia.secret }}<br>
            recipeId: {{ dia.recipe.recipeId }}<br>
            createdDate: {{ dia.createdDate }}<br>
            modifiedDate: {{ dia.modifiedDate }}<br>
          </p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUser } from '../../../api';
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      title: 'My Page',
      userinfo: {},
      username: '',
    };
  },
  async mounted() {
    try {
      if (this.$cookies.isKey("access_token") == true){
        var decoded = jwt_decode(this.$cookies.get("access_token"));
        this.username = decoded['username'];
      }
      const response = await getUser();
      this.userinfo = response.data;
      console.log(this.userinfo);
    }
    catch (error) {
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
