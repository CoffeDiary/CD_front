import { createApp } from 'vue';
import { router } from '../router/index';
import App from './App.vue';
/* import store from "./store"; */

const app = createApp(App);

app.use(router);
app.mount('#app');
