<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <Calendar is-expanded /> -->
    <!-- <DatePicker v-model="date" /> -->
  </div>
  <div class="text-center section">
    <h2 class="h2">Coffee Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Your Coffee date.
    </p>
    <v-calendar
      class="custom-calendar max-w-full"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-column h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              <a href="#" v-on:click="getDiary(attr.customData.diaryId);">{{ attr.customData.title }}</a>
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
import { getDiaryMyList } from '../../api';
const _ = require("lodash");
export default {
  name: "Home",
  data() {
    return {
      title: "Coffee Diary",
      diarylist: {
        key: Number,
        title: String,
        customData: {
          title: String,
          diaryId: Number,
          class: '',
        },
        dates: Date,
      },
      attributes: [],
    }
  },
  methods: {
    getDiary: function(diaryId) {
      this.$router.push({
        name: 'DiaryGet',
        params: {
          diaryId: diaryId
        }
      });
    },
  },
  async mounted() {
    const userData = '';
    try {
      const response = await getDiaryMyList(userData);
      // this.diarylist = response.data;
      for (var i = 0; i < response.data.length; i++) {
        this.diarylist.key = i;
        this.diarylist.customData = {
          title: response.data[i].title,
          diaryId: response.data[i].diaryId,
          };
        console.log(response.data[i].title.slice(0));
        var d = response.data[i].modifiedDate;
        this.diarylist.dates = new Date(d[0], d[1]-1, d[2], d[3], d[4], d[5]);
        this.attributes[i] = _.clone(this.diarylist);
      }
      console.log(this.attributes);
    }
    catch (error) {
      console.log(error.response.data);
      this.logMessage = error.response.data;
    }
  }
};
</script>

<style>
.scrollbar {
  width: 0px;
}
.scrollbar-track {
  display: none;
}
.custom-calendar.vc-container {
  border-radius: 0;
  width: 100%;
}
.custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}
.custom-calendar.vc-container .vc-weeks {
  padding: 0;
}
.custom-calendar.vc-container .vc-weekday {
  background-color: #f8fafc;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  padding: 5px 0;
}
.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  min-height: 90px;
  min-width: 90px;
  overflow: auto;
  background-color: white;
}
.custom-calendar.vc-container .vc-day.weekday-1,
.custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}
.custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day:not(.on-bottom).weekday-1 {
  border-bottom: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: 1px solid #b8c2cc;
}
.custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}
</style>
