import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pages",
      component: () => import("../views/Pages/indexView.vue"),
      redirect: () => {
        return { path: "/home" };
      },
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/Home/indexView.vue"),
        },
        {
          path: "/apply",
          name: "apply",
          component: () => import("../views/Apply/indexView.vue"),
        },
        {
          path: "/payment",
          name: "payment",
          component: () => import("../views/Payment/indexView.vue"),
        },
        {
          path: "/store",
          name: "store",
          component: () => import("../views/Store/indexView.vue"),
        },
        {
          path: "/intro",
          name: "intro",
          component: () => import("../views/Intro/indexView.vue"),
        },
        {
          path: "/inquire",
          name: "inquire",
          component: () => import("../views/Inquire/indexView.vue"),
        },
        {
          path: "/inquire-detail",
          name: "inquire-detail",
          component: () => import("../views/InquireDetail/indexView.vue"),
        },
        {
          path: "/report",
          name: "report",
          component: () => import("../views/Report/indexView.vue"),
        },
        {
          path: "/welcome",
          name: "welcome",
          component: () => import("../views/Welcome/indexView.vue"),
        },
        {
          path: "/manage",
          name: "manage",
          component: () => import("../views/Manage/indexView.vue"),
        },
        {
          path: "/point",
          name: "point",
          component: () => import("../views/Point/indexView.vue"),
        },
        {
          path: "/counter",
          name: "counter",
          component: () => import("../views/Counter/indexView.vue"),
        },
        {
          path: "/counter-settings",
          name: "counter-settings",
          component: () => import("../views/Counter/counter-settings.vue"),
        },
        {
          path: "/device-binding",
          name: "device-binding",
          component: () => import("../views/Counter/device-binding.vue"),
        },
      ],
    },
  ],
});

export default router;
