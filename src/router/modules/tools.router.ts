import MainNavigationLayout from "@/layout/MainNavigationLayout.vue";

export const toolsRoutes = {
  path: "/tools",
  component: MainNavigationLayout,
  children: [
    {
      path: "",
      name: "tools",
      component: () => import("@/views/tools/ToolsView.vue"),
    },
    {
      path: "goals",
      name: "goals",
      component: () => import("@/views/tools/GoalsView.vue"),
    },
    {
      path: "templates",
      name: "templates",
      component: () => import("@/views/tools/TemplatesView.vue"),
    },
  ],
};
