<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-y-10 md:gap-x-16">
    <div
      class="card space-y-2 md:space-y-6"
      v-for="item of cardItems"
      :key="item.title"
      @click="$router.push(item.route)"
    >
      <h1 class="card__title">
        {{ $t(item.title) }}
      </h1>
      <component :is="item.icon" classes="fill-primary card__icon"></component>
      <p class="card__bottom-text text-primary">
        {{ $t(item.description, { value: $n(item.value) }) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  AccountTree,
  UserTeam,
  FinanceHandCoin,
  ManagementToolIcon,
  AnalyticsIcon,
  OrderHistoryIcon,
  StorageIcon,
  ActiveOrderIcon,
} from "@/components/icons";
interface ICardItem {
  route: string;
  title: string;
  icon: any;
  description: string;
  value?: any;
}

const cardItems: ICardItem[] = [
  {
    title: "app.managementCompanyStructure",
    route: "/company",
    icon: AccountTree,
    description: "app.employeesCount",
    value: 20,
  },
  {
    title: "app.clientsBase",
    route: "/clients",
    icon: UserTeam,
    description: "app.clientsCount",
    value: 20,
  },
  {
    title: "app.finance",
    route: "",
    icon: FinanceHandCoin,
    description: "app.totalMoneyAmount",
    value: 1500000,
  },
  {
    title: "app.managementTools",
    route: "/tools",
    icon: ManagementToolIcon,
    description: "app.totalMoneyAmount",
    value: 1500000,
  },
  {
    title: "app.analytics",
    route: "",
    icon: AnalyticsIcon,
    description: "app.netProfit",
    value: 150000,
  },
  {
    title: "app.orderHistory",
    route: "/orders",
    icon: OrderHistoryIcon,
    description: "app.netProfit",
    value: 150000,
  },
  {
    title: "app.stock",
    route: "/warehouse",
    icon: StorageIcon,
    description: "app.netProfit",
    value: 500,
  },
  {
    title: "app.activeOrderStatus",
    route: "",
    icon: ActiveOrderIcon,
    description: "app.timeToClient",
    value: -1,
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";
.card {
  @include card;
  background: $base-gradient;
  padding: 23px 31px 26px 17px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 14px 20px rgba(20, 23, 38, 0.05);
  }
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #282e36;
    height: 44px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__bottom-text {
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
  }
  &__icon {
    width: 74px;
    height: 74px;
  }
}
</style>
