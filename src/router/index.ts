import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  } as RouteRecordRaw,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
} as RouterOptions);

export default router;
