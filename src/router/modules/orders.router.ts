import MainNavigationLayout from "@/layout/MainNavigationLayout.vue";

export const orderssRoutes = {
  path: "/orders",
  component: MainNavigationLayout,
  children: [
    {
      path: "",
      name: "orders",
      component: () => import("@/views/orders/ActiveOrdersView.vue"),
    },
    {
      path: "applications",
      name: "applications",
      component: () => import("@/views/orders/ApplicationsView.vue"),
    },
    {
      path: "new-order",
      name: "new-order",
      component: () => import("@/views/orders/NewOrderView.vue"),
    },
  ],
};
