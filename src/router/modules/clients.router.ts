import MainNavigationLayout from "@/layout/MainNavigationLayout.vue";

export const clientsRoutes = {
  path: "/clients",
  component: MainNavigationLayout,
  children: [
    {
      path: "",
      name: "clients",
      component: () => import("@/views/clients/ClientsView.vue"),
    },
    {
      path: "new-client",
      name: "new-client",
      component: () => import("@/views/clients/NewClientView.vue"),
    },
    {
      path: "edit-client/:id",
      name: "edit-client",
      component: () => import("@/views/clients/EditClientView.vue"),
    },
    {
      path: "order-history/:id",
      name: "order-history",
      component: () => import("@/views/clients/OrderHistoryView.vue"),
    },
  ],
};
