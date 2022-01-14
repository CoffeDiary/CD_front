<template>
<div>Delete</div>
</template>

<script>
import { deleteDiary } from '../../../api';
export default {
data () {
  return {
    diaryId: this.$route.params.diaryId,
  };
},
  async mounted() {
    try {
      const response = await deleteDiary(this.diaryId);
      console.log(response);
    }
    catch (error) {
      console.log(error.response.data);
      this.logMessage = error.response.data;
    }
    this.$router.push('/diary/list/get');
  },
};
</script>

<style scoped></style>
