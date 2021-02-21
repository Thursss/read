import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/assets/style/icon.css'
import '@/assets/style/reset.scss'

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
