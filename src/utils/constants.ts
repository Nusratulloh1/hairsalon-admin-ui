import type { INavigationItem } from "@/models/frontend";
import { AccountTree, UserTeam, FinanceHandCoin } from "@/components/icons";

export const navigationItems: INavigationItem[] = [
  {
    title: "Управление структурой предприятия",
    route: "/company",
    icon: AccountTree,
    description: "Количество сотрудников: 20",
    shortName: "Предприятие",
  },
  {
    title: "Клиентская база",
    route: "/clients",
    icon: UserTeam,
    description: "Количество клиентов: 110",
    shortName: "Клиенты",
  },
  {
    title: "Финансы",
    route: "/finance",
    icon: FinanceHandCoin,
    description: "Общее количество денег: 1.500.000 сум",
    shortName: "Финансы",
  },
  {
    title: "Инструменты менеджмента",
    route: "/tools",
    icon: FinanceHandCoin,
    description: "Общее количество денег: 1.500.000 сум",
    shortName: "Инструменты",
  },
  {
    title: "Аналитика",
    route: "/analitic",
    icon: FinanceHandCoin,
    description: "Чистая прибыль: 150.000сум",
    shortName: "Аналитика",
  },
  {
    title: "Заказы",
    route: "/orders",
    icon: FinanceHandCoin,
    description: "Количество заказов: 500",
    shortName: "Заказы",
    // childrens: [
    //   {
    //     title: "Заказы",
    //     route: "/orders/active-orders",
    //     icon: FinanceHandCoin,
    //     description: "Количество заказов: 500",
    //     shortName: "Заказы",
    //   },
    //   {
    //     title: "Заявки",
    //     route: "/orders/applications",
    //     icon: FinanceHandCoin,
    //     description: "Количество заказов: 500",
    //     shortName: "Заявки",
    //   },
    // ],
  },
  {
    title: "Склад",
    route: "/warehouse",
    icon: FinanceHandCoin,
    description: "Количество заказов: 500",
    shortName: "Склад",
  },
  {
    title: "Статусы активных заказов",
    route: "/order-status",
    icon: FinanceHandCoin,
    description: "Время до клиента - 1 день",
    shortName: "Статусы активных заказов",
  },
];

export const breadCrumbNames = {
  dashboard: "app.dashboard",
  company: "app.company",
  clients: "app.clientsList",
  finance: "app.finance",
  employees: "app.employees",
  "new-employee": "app.new-employee",
  "edit-employee": "app.edit-employee",
  "schedule-employee": "app.schedule-employee",
  "new-client": "app.new-client",
  "new-order": "app.addNewOrder",
  orders: "app.orders",
  applications: "app.applications",
  units: "app.businessUnits",
  tools: "app.managementTools",
  goals: "app.goals",
  templates: "app.templates",
  warehouse: "app.warehouse",
  "new-warehouse": "app.new-warehouse",
  "edit-warehouse": "app.edit-warehouse",
};
