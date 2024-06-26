import "./styles/main.less";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App as any);

app.use(createPinia());
app.use(router);

app.mount("#app");
