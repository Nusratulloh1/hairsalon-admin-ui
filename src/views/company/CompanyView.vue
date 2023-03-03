<template>
  <div class="space-y-2 md:space-y-8 view">
    <div>
      <h1 class="view__title">{{ $t("app.company") }}</h1>
      <p class="view__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-10 md:gap-x-16">
      <div class="card" v-for="item of cardItems" :key="item.title">
        <h1 class="card__title truncate text-primary mb-2">
          {{ $t(item.title) }}
        </h1>
        <p class="card__description text-primary mb-6">
          {{ $t(item.description) }}
        </p>
        <el-button
          type="primary"
          size="large"
          @click="$router.push(item.route)"
          >{{ $t(item.shortName) }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ICardItem {
  route: string;
  title: string;
  description: string;
  shortName: string;
}

const cardItems: ICardItem[] = [
  {
    title: "app.addBusinessUnits",
    route: "company/units",
    description: "app.businessUnitDescription",
    shortName: "app.businessUnits",
  },
  {
    title: "app.emploeesListSection",
    route: "company/employees",
    description: "app.employeesDescription",
    shortName: "app.emploeesList",
  },
  {
    title: "app.organizationalStructure",
    route: "",
    description: "app.organizationalStructureDescription",
    shortName: "app.organizationalStructure",
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

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  &__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    height: 44px;
    color: $base-text;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__icon {
    width: 74px;
    height: 74px;
  }
}
</style>
