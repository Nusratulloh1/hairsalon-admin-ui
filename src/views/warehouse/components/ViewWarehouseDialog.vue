<template>
  <div class="view pt-6 px-8 pb-12">
    <div class="flex items-center space-x-2">
      <span>ID:</span>
      <app-tag color="blue">222</app-tag>
    </div>

    <div class="app-divider my-2 md:my-4" />
    <div
      class="grid sm:grid-cols-2 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 mb-10"
    >
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.title") }}</span>
        <span class="view__item-value">{{ warehouse.product_name }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.category") }}</span>
        <span class="view__item-value">{{ warehouse.category }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.subcategory") }}</span>
        <span class="view__item-value">{{ warehouse.subcategory }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("shared.count") }}</span>
        <span class="view__item-value leading-none">
          {{ $n(warehouse.product_count) }}</span
        >
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("shared.unit") }}</span>
        <span class="view__item-value">{{ warehouse.unit }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.price") }}</span>
        <span class="view__item-value"
          >{{ $n(warehouse.product_price) }} {{ $t("shared.sum") }}</span
        >
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{
          $t("app.minimumRecommendedStock")
        }}</span>
        <span class="view__item-value">{{ warehouse.min_recommended }}</span>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <span>{{ $t("app.status") }}:</span>
      <app-tag color="blue">{{ $t(`statuses.${warehouse.status}`) }}</app-tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IWarehouse } from "@/models/backend";
import { computed } from "vue";

const props = defineProps<{ warehouse: IWarehouse }>();

const warehouse = computed(() => props.warehouse);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";
.view {
  @include card;
  background-color: #fff;

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #282e36;
  }

  &__item {
    &-label {
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      color: #8492a9;
    }
    &-value {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #282e36;
    }
  }
}
</style>
