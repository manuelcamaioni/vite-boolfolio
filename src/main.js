import { createApp } from "vue";
import "./styles/general.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.vue";
import { router } from "./router";

createApp(App).use(router).mount("#app");
