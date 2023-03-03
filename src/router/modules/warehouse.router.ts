import MainNavigationLayout from "@/layout/MainNavigationLayout.vue";

export const warehouseRoutes = {
  path: "/warehouse",
  component: MainNavigationLayout,
  children: [
    {
      path: "",
      name: "warehouse",
      component: () => import("@/views/warehouse/WarehouseView.vue"),
    },
    {
      path: "new-warehouse",
      name: "new-warehouse",
      component: () => import("@/views/warehouse/NewWarehouseView.vue"),
    },
    {
      path: "edit-warehouse/:id",
      name: "edit-warehouse",
      component: () => import("@/views/warehouse/EditWarehouseView.vue"),
    },
  ],
};
