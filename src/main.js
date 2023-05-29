import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";
import store from "./store";
import "./config/rem";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
