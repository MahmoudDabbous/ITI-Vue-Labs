import { createApp } from "vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import store from "./stores/todos.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");
