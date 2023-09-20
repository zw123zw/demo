import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/baiduMao"),
  },
  {
    path: "/popper",
    name: "Poppe",
    component: () => import("@/views/popper"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
