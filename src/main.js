import { createApp } from 'vue';
import { router } from '../router/index';
import App from './App.vue';
import VueCookies from 'vue3-cookies';
import store from "./store";
import mitt from 'mitt';
import VCalendar from 'v-calendar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);

const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(VueCookies, {
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

app.use(VCalendar, {
  componentPrefix: 'vc',
});

app.use(router);
app.use(store);
app.mount('#app');
