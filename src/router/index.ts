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
  {
    path: "/tweenjs",
    name: "Tweenjs",
    component: () => import("@/views/tweenjs"),
  },
  {
    path: "/svg",
    name: "Svg",
    component: () => import("@/views/svg"),
  },
  {
    path: "/svgAnimation",
    name: "SvgAnimation",
    component: () => import("@/views/svgAnimation"),
  },
  {
    path: "/easelJS",
    name: "easelJS",
    component: () => import("@/views/easelJS"),
  },
  {
    path: "/soundJS",
    name: "soundJS",
    component: () => import("@/views/soundJS"),
  },
  {
    path: "/preloadJS",
    name: "preloadJS",
    component: () => import("@/views/preloadJS"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
