<template>
  <div>
    <div class="wrap">
      <h2>{{ diarylist.title }}</h2>
      <table>
        <colgroup>
          <col width="15%" />
          <col width="*" />
        </colgroup>
        <tr>
          <th>id</th>
          <td colspan="2">#{{ diarylist.diaryId }}</td>
        </tr>
        <tr>
          <th>content</th>
          <td colspan="2" class="text_content">{{ diarylist.content }}</td>
        </tr>
        <tr>
          <th >secret</th>
          <td colspan="2">{{ diarylist.secret }}</td>
        </tr>
        <tr>
          <th>recipe</th>
          <td>
            #{{diarylist.recipe.recipeId }}<br>
            coffeeBean<br>
            coffeeAmount<br>
            waterAmount<br>
            grindingPoint<br>
            waterDegree<br>
          </td>
          <td>
            <br>
            {{ diarylist.recipe.coffeeBean }}<br>
            {{ diarylist.recipe.coffeeAmount }} (mL)<br>
            {{ diarylist.recipe.waterAmount }} (mL)<br>
            {{ diarylist.recipe.grindingPoint }} (mm)<br>
            {{ diarylist.recipe.grindingPoint }} (°C)<br>
          </td>
          
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { getDiary } from '../../../api';
export default {
  data() {
    return {
      title: 'my diary',
      diaryId: this.$route.params.diaryId,
      diarylist: {
        diaryId: '',
        title: '',
        content: '',
        recipe: {
          createDate: '',
          modifiedDate: '',
          recipeId: '',
          coffeeAmount: '',
          grindingPoint: '',
          waterDegree: '',
          waterAmount: '',
          coffeeBean: '',
        },
        secret: '',
      },
    };
  },
  async mounted() {
    try {
      const response = await getDiary(this.diaryId);
      console.log(response);
      this.diarylist = response.data;
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
table {
  border-top: 1px solid #888;
  /* width: 75%; */
}
th {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
  }
td {
  border-bottom: 1px solid #eee;
  padding: 10px 10px;
  box-sizing: border-box;
  text-align: left;
}
.text_content {
  height: 200px;
  vertical-align: top;;
}
.wrap {
  text-align: start;
  margin: 20px 10px 10px 20px;
}
</style>
