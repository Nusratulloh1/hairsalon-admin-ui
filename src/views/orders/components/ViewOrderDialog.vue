<template>
  <div class="view pt-6 px-8 pb-12">
    <div class="flex items-center space-x-2">
      <h1 class="view__title">ID заказа:</h1>
      <app-tag color="blue">222</app-tag>
    </div>

    <div class="app-divider my-2 md:my-4" />
    <div
      class="grid sm:grid-cols-2 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 mb-10"
    >
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.customer") }}</span>
        <span class="view__item-value">Баширов Амаль</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.phoneNumber") }}</span>
        <span class="view__item-value">{{
          beautify.beautifyPhone(998990009765)
        }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.address") }}</span>
        <span class="view__item-value"
          >Ташкент, Чиланзар Катта Хирмонтепа 1</span
        >
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.whoAccepted") }}</span>
        <span class="view__item-value">Рашидов Абдужаббор</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.paymentType") }}</span>
        <span class="view__item-value">{{
          $t(`shared.${beautify.getPayType(1)}`)
        }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.salaryAmount") }}</span>
        <span class="view__item-value"
          >{{ $n(750000) }} {{ $t("shared.sum") }}</span
        >
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.paid") }}</span>
        <span class="view__item-value"
          >{{ $n(350000) }} {{ $t("shared.sum") }}</span
        >
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.dateOfReceipt") }}</span>
        <span class="view__item-value">16/01/2023</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.productsPaidFor") }}</span>
        <span class="view__item-value">
          <div class="flex flex-wrap items-center space-x-2">
            <div class="gray-tag">Imzo</div>
            <div class="gray-tag">Engelberg</div>
          </div>
        </span>
      </div>
      <div class="flex flex-col items-start view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.orderLead") }}</span>
        <span class="view__item-value">
          <div class="gray-tag">Шоурум</div>
        </span>
      </div>
    </div>
    <div class="space-y-4">
      <div class="flex flex-col items-start view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.passportScan") }}</span>
        <div class="gray-tag flex items-center space-x-2">
          <img src="@/assets/images/pdf.png" alt="Passport" class="h-7 w-7" />
          <span class="view__item-value"
            >Gant chart for Project managers.pdf</span
          >
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <span>Статус:</span>
          <app-tag color="blue">В производстве</app-tag>
        </div>
        <div class="flex items-center space-x-2">
          <span>ID товара:</span>
          <app-tag color="blue">321</app-tag>
        </div>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.comment") }}</span>
        <div class="w-full h-24 border rounded bg-gray-100/25"></div>
      </div>
    </div>
    <div class="flex justify-center">
      <el-button @click="goToSchedule" type="primary" size="large" class="mt-5">
        {{ $t("app.purchaseHistory") }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from "@/composables";
import { useBeautify } from "@/composables/useBeautify";
import type { IStaff } from "@/models/backend";
import { useRouter } from "vue-router";

const modal = useModal();
const router = useRouter();
const beautify = useBeautify();

const props = defineProps<{ staff?: IStaff }>();

const goToSchedule = () => {
  modal.hideModal();
  router.push({ name: "schedule-employee", params: { id: 12 } });
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";
.view {
  @include card;
  background-color: #fff;

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #1f1f1f;
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
