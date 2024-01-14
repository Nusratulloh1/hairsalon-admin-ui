import AdminLayout from "@/layout/AdminLayout.vue";
export const adminRoutes = {
  path: "/",
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
    },
    {
      path: "users",
      name: "admin-users",
      component: () => import("@/views/users/UsersView.vue"),
      meta: { admin: true },
    },
    {
      path: "barbers",
      name: "admin-barber",
      component: () => import("@/views/barbers/BarbersView.vue"),
      meta: { admin: true },
    }
  ],
};
