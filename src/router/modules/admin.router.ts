import AdminLayout from "@/layout/AdminLayout.vue";
export const adminRoutes = {
  path: "/admin",
  component: AdminLayout,
  children: [
    {
      path: "/dashboard",
      name: "admin-dashboard",
      component: () => import("@/views/dashboard/DashboardView.vue"),
      meta: { admin: true },
    }
  ],
};
