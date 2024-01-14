import AdminLayout from "@/layout/AdminLayout.vue";
export const adminRoutes = {
  path: "",
  component: AdminLayout,
  children: [
    {
      path: "dashboard",
      name: "admin-dashboard",
      component: () => import("@/views/dashboard/DashboardView.vue"),
      meta: { admin: true },
    },
    {
      path: "contact",
      name: "admin-contact",
      component: () => import("@/views/contact/ContactView.vue"),
      meta: { admin: true },
    }
  ],
};
