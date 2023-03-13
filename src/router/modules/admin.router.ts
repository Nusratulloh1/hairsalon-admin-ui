import AdminLayout from "@/layout/AdminLayout.vue";
export const adminRoutes = {
  path: "/admin",
  component: AdminLayout,
  children: [
    {
      path: "",
      name: "admin-dashboard",
      component: () => import("@/views/admin/AdminDashboardView.vue"),
      meta: { admin: true },
    },
    {
      path: "applicants",
      name: "applicants",
      component: () => import("@/views/admin/ApplicantsView.vue"),
      meta: { admin: true },
    },
    {
      path: "departments",
      name: "departments",
      component: () => import("@/views/admin/DepartmentsView.vue"),
      meta: { admin: true },
    },
    {
      path: "users",
      name: "users",
      component: () => import("@/views/admin/UsersView.vue"),
      meta: { admin: true },
    },
    {
      path: "exam-dates",
      name: "exam-dates",
      component: () => import("@/views/admin/ExamDatesView.vue"),
      meta: { admin: true },
    },
    {
      path: "notifications",
      name: "notifications",
      component: () => import("@/views/admin/NotificationsView.vue"),
      meta: { admin: true },
    },
    {
      path: "sms",
      name: "sms",
      component: () => import("@/views/admin/SmsMailing.vue"),
      meta: { admin: true },
    },
  ],
};
