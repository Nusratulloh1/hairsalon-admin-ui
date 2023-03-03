<template>
  <div class="space-y-2 md:space-y-8 view">
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <h1 class="view__title">{{ $t("app.managementTools") }}</h1>
        <p class="view__description">
          {{ $t("app.dashboardTitle") }}
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="py-6 px-4 weather flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="sun"></div>
            <div class="flex flex-col">
              <span class="weather-degree"
                >{{ guideStore.getWeather.temp }}°C</span
              >
              <span class="weather-text">{{
                guideStore.getWeather.description
              }}</span>
            </div>
          </div>
          <div class="rounded-full bg-primary py-1 px-2 text-white">
            Сегодня
          </div>
        </div>
        <div
          class="py-6 px-4 currency flex items-center justify-between bg-primary"
        >
          <div class="flex flex-col">
            <img src="@/assets/images/us.png" alt="Us" />
            <span class="text-white">USD</span>
          </div>
          <div class="flex flex-col text-center">
            <span class="text-white">Покупка</span>
            <span class="text-white font-bold">
              {{ $n(usd?.rate || 0) }} {{ $t("shared.sum") }}
            </span>
          </div>
          <div class="flex flex-col">
            <span class="text-white">Продажа</span>
            <span class="text-white font-bold">
              {{ $n(usd?.rate || 0) }} {{ $t("shared.sum") }}
            </span>
          </div>
        </div>
      </div>
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
          >{{ $t("shared.view") }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useGuideStore } from "@/stores";

const guideStore = useGuideStore();
const usd = computed(() => guideStore.usd);
onMounted(() => {
  guideStore.fetchUSD();
  guideStore.fetchWeather();
});
interface ICardItem {
  route: string;
  title: string;
  description: string;
  shortName: string;
}

const cardItems: ICardItem[] = [
  {
    title: "app.goalsSection",
    route: "tools/goals",
    description: "app.businessUnitDescription",
    shortName: "app.businessUnits",
  },
  {
    title: "app.traningMaterialSection",
    route: "company/employees",
    description: "app.employeesDescription",
    shortName: "app.emploeesList",
  },
  {
    title: "app.reviewSection",
    route: "",
    description: "app.organizationalStructureDescription",
    shortName: "app.organizationalStructure",
  },
  {
    title: "app.templateSection",
    route: "tools/templates",
    description: "app.organizationalStructureDescription",
    shortName: "app.organizationalStructure",
  },
  {
    title: "app.createTicketSection",
    route: "",
    description: "app.organizationalStructureDescription",
    shortName: "app.organizationalStructure",
  },
  {
    title: "app.notificationsSection",
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
.weather {
  background: #f5f5f5;
  border-radius: 4px;
  width: 299.98px;
  .sun {
    width: 30.02px;
    height: 30.3px;
    border-radius: 50%;
    background: linear-gradient(29.69deg, #ff9900 29.91%, #ffee94 90.8%);
    box-shadow: inset 0px 5px 18px rgba(255, 255, 255, 0.81);
  }
  &-text {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #282e36;
    opacity: 0.5;
  }

  &-degree {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #282e36;
  }
}
.currency {
  border-radius: 4px;
  width: 299.98px;
}
</style>
