import MainNavigationLayout from "@/layout/MainNavigationLayout.vue";

export const companyRoutes = {
  path: "/company",
  component: MainNavigationLayout,
  children: [
    {
      path: "",
      name: "company",
      component: () => import("@/views/company/CompanyView.vue"),
    },
    {
      path: "employees",
      name: "employees",
      redirect: "/company/employees",
      children: [
        {
          path: "",
          name: "employees",
          component: () =>
            import("@/views/company/employees/EmployeesView.vue"),
        },
        {
          path: "new-employee",
          name: "new-employee",
          component: () =>
            import("@/views/company/employees/NewEmployeeView.vue"),
        },
        {
          path: "edit-employee/:id",
          name: "edit-employee",
          component: () =>
            import("@/views/company/employees/EditEmployeeView.vue"),
        },
        {
          path: "schedule-employee/:id",
          name: "schedule-employee",
          component: () =>
            import("@/views/company/employees/EmployeeWorkScheduleView.vue"),
        },
      ],
    },
    {
      path: "units",
      name: "units",
      component: () => import("@/views/company/units/UnitsView.vue"),
    },
  ],
};
