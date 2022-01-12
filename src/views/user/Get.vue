<template>
  <div>
    <h2>My Page</h2>
  </div>
  <div>
    <ul class="list-group">
      <li class="list-group-item">username : {{ username }}</li>
    </ul>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  name: "app",
  components: {
  },
  data() {
    return {
      username: '',
    };
  },
  mounted() {
    if (this.$cookies.isKey("access_token") == true){
      var decoded = jwt_decode(this.$cookies.get("access_token"));
      console.log(decoded);
      this.username = decoded['username']
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
