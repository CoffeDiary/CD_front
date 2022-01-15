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
      is-dark
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
            >
              <q v-on:click="getDiary(attr.customData.diaryId);">{{ attr.customData.title }}</q>
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
import { getDiaryList } from '../../api';
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
      const response = await getDiaryList(userData);
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

<style scoped>
h1 {
  color: #634300
}
.wrap {
  display: flex;
}
</style>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
