import { createApp } from "vue";
import App from "./App.vue";
import $fetch from "./utils/axios";
import "view-ui-plus/dist/styles/viewuiplus.css";
const app = createApp(App);
app.config.globalProperties.$fetch = $fetch;
import routes from "@/routes";
app.use(routes);
app.mount("#auth-app");

export { $fetch, app };
