<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title">
    <div>
      <Box color="blue"/>
    </div>
    <h2>Coffee list</h2>
    <div>
      <input type="checkbox" id="아라비카" value="아라비카" v-model="checkedCoffee">
      <label for="coffee1">아라비카</label>
      <input type="checkbox" id="로부스타" value="로부스타" v-model="checkedCoffee">
      <label for="coffee2">로부스타</label>
      <input type="checkbox" id="리베리카" value="리베리카" v-model="checkedCoffee">
      <label for="coffee3">리베리카</label>
      <input type="checkbox" id="샤리에" value="샤리에" v-model="checkedCoffee">
      <label for="coffee3">샤리에</label>
      <br>
      <span>찜한 커피: {{ checkedCoffee }}</span>

    </div>
    <div>
      <Coffee :items="Coffee"/>
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box";
import Coffee from "@/components/Coffee";

export default {
  name: "app",
  components: {
    Box,
    Coffee
  },
  data() {
    return {
      title: "Coffee Diary",
      checkedCoffee:[],
      Coffee: [
        {
          name: "아라비카",
          link: "https://en.wikipedia.org/wiki/Coffea_arabica",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Starr_070308-5472_Coffea_arabica.jpg/2560px-Starr_070308-5472_Coffea_arabica.jpg",
          isUpdate: true
        },
        {
          name: "로부스타",
          link: "https://en.wikipedia.org/wiki/Coffea_canephora",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Coffea_canephora_at_Aanakkulam.jpg/440px-Coffea_canephora_at_Aanakkulam.jpg",
          isUpdate: true
        },
        {
          name: "리베리카",
          link: "https://en.wikipedia.org/wiki/Coffea_liberica",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Liberica_coffee_beans%2C_roasted.jpg",
          isUpdate: false
        },
        {
          name: "샤리에",
          link: "https://en.wikipedia.org/wiki/Coffea_charrieriana",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/440px-A_small_cup_of_coffee.JPG",
          isUpdate: false
        }
      ]
    }
  }
};
</script>

<style scoped>
h1 {
  color: #634300
}
.wrap {
  display: flex;
}
</style>
