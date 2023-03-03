<template>
  <div class="view pt-6 px-8 pb-12">
    <h1 class="view__title">
      {{ `${client.name} ${client.surname} ${client.middle_name}` }}
    </h1>
    <div class="flex items-center space-x-4 mt-4">
      <div class="flex items-center space-x-2">
        <span>{{ $t("app.status") }}:</span>
        <app-tag color="blue">{{ $t(`statuses.${client.status}`) }}</app-tag>
      </div>
      <div class="flex items-center space-x-2">
        <span>ID:</span>
        <app-tag color="blue">222</app-tag>
      </div>
    </div>

    <div class="app-divider my-2 md:my-4" />
    <div
      class="grid sm:grid-cols-2 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 mb-10"
    >
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("shared.gander") }}</span>
        <span class="view__item-value">{{
          $t(`shared.${client.gander}`)
        }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.phoneNumber") }}</span>
        <span class="view__item-value">{{
          beautify.beautifyPhone(+client.phone)
        }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.address") }}</span>
        <span class="view__item-value leading-none">{{ client.location }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.clientAge") }}</span>
        <span class="view__item-value">{{ client.age }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">B2B / B2C</span>
        <span class="view__item-value">{{ client.type }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.lastPurchaseDate") }}</span>
        <span class="view__item-value">{{
          formatDate(client.last_purchase_date)
        }}</span>
      </div>
    </div>
    <div class="flex flex-col view__item space-y-2 md:space-y-4">
      <span class="view__item-label">{{ $t("app.comment") }}</span>
      <div class="w-full h-24 border rounded bg-gray-100/25 p-2">
        {{ client.comments }}
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <el-button
        @click="goToOrderHistory"
        type="primary"
        size="large"
        class="mt-5"
      >
        {{ $t("app.purchaseHistory") }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from "@/composables";
import { useBeautify } from "@/composables/useBeautify";
import type { IClient } from "@/models/backend";
import { format } from "date-fns";
import { computed } from "vue";
import { useRouter } from "vue-router";

const modal = useModal();
const router = useRouter();
const beautify = useBeautify();

const props = defineProps<{ client: IClient }>();

const client = computed(() => props.client);

const goToOrderHistory = () => {
  modal.hideModal();
  router.push({ name: "order-history", params: { id: 12 } });
};

const formatDate = (date: string) => {
  return format(new Date(date), "dd.MM.yyyy");
};
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
