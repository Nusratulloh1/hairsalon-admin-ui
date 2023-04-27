import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout.vue";
import LoginLayout from "@/layout/LoginLayout.vue";
import LandingLayout from "@/layout/LandingLayout.vue";
import { adminRoutes } from "./modules";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LandingLayout,
      children: [
        {
          path: "",
          name: "landing",
          component: () => import("@/views/landing/LandingView.vue"),
          meta: { breadcrumb: "landing" },
        },
      ]
    },
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
      path: "/check-mail",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "check-mail",
          component: () => import("@/views/auth/CheckMailView.vue"),
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
    {
      path: "/forgot-password",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "forgot-password",
          component: () => import("@/views/auth/ForgotPasswordView.vue"),
        },
      ],
    },
    {
      path: "/verification",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "verification",
          component: () => import("@/views/auth/InviteView.vue"),
        },
      ],
    },
    {
      path: "/reset-password",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "reset-password",
          component: () => import("@/views/auth/ResetPasswordView.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/views/dashboard/DashboardView.vue"),
          meta: { breadcrumb: "dashboard" },
        },
      ],
    },
    {
      path: "/resend",
      component: DashboardLayout,
      children: [
        {
          path: ":id",
          name: "resend",
          component: () => import("@/views/dashboard/ResendForm.vue"),
          meta: { breadcrumb: "resend" },
        },
      ],
    },
    {
      path: "/tuition",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "tuition",
          component: () => import("@/views/tuition/TuitionView.vue"),
          meta: { breadcrumb: "tuition" },
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
