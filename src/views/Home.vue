<template>
  <div>
    <h1>{{ title }}</h1>
    <Calendar is-expanded />
    <!-- <DatePicker v-model="date" /> -->
  </div>
</template>

<script>
import { Calendar, /* DatePicker */ } from 'v-calendar';
export default {
  name: "Home",
  components: {
    Calendar,
    // DatePicker,
  },
  data() {
  return {
    title: "Coffee Diary",
    }
  },
}
</script>

<style scoped>
h1 {
  color: #634300
}
.wrap {
  display: flex;
}
</style>
