import { createRouter, createWebHistory, RouterView } from "vue-router";
import LoginLayout from "@/layout/LoginLayout.vue";
import { adminRoutes } from "./modules";
import routeMiddleware from "@/i18n"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: "/login",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "login",
          component: () => import("@/views/auth/LoginView.vue"),
        },
      ],
    },
    {
      path: "/signin",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "signin",
          component: () => import("@/views/auth/SigninView.vue"),
        },
      ],
    },
    adminRoutes,
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/404/404.vue"),
    },
  ],
});

export default router;
