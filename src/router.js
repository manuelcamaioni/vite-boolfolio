import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./components/views/Homepage.vue";
import AboutUs from "./components/views/AboutUs.vue";
import AppMain from "./components/AppMain.vue";
import ProjectShow from "./components/views/ProjectShow.vue";

const routes = [
    { path: "/", name: "homepage", component: Homepage },
    { path: "/about", name: "about", component: AboutUs },
    { path: "/projects", name: "projects-list", component: AppMain },
    { path: "/projects/:id", name: "show-project", component: ProjectShow },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export { router };
