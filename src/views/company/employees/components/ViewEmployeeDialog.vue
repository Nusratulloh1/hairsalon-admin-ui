<template>
  <div class="view pt-6 px-8 pb-12">
    <h1 class="view__title">
      {{ `${staff.name} ${staff.surname} ${staff.middle_name}` }}
    </h1>
    <div class="app-divider my-2 md:my-4" />
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 mb-10">
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.firstName") }}</span>
        <span class="view__item-value">{{ staff.name }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.lastName") }}</span>
        <span class="view__item-value">{{ staff.surname }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.middleName") }}</span>
        <span class="view__item-value">{{ staff.middle_name }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.phoneNumber") }}</span>
        <span class="view__item-value">{{
          beautify.beautifyPhone(+staff.phone)
        }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.address") }}</span>
        <span class="view__item-value">{{ staff.address }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.role") }}</span>
        <span class="view__item-value">{{
          beautify.mapRoleName(staff.roles)
        }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.passportSeries") }}</span>
        <span class="view__item-value">{{ staff.passport_number }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.mail") }}</span>
        <span class="view__item-value">{{ staff.email }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.businessUnit") }}</span>
        <span class="view__item-value">{{ staff.org?.name }}</span>
      </div>

      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.department") }}</span>
        <span class="view__item-value">Маркетинг</span>
      </div>
    </div>
    <div class="grid md:grid-cols-3">
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.passportScan") }}</span>
        <!-- <img class="w-32 h-32" :src="file" alt="Passport" /> -->
      </div>
    </div>
    <div class="app-divider my-2 md:my-8" />
    <h1 class="view__title mb-6">{{ $t("app.salaryAndWorkTime") }}</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 mb-10">
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.salaryAmount") }}</span>
        <span class="view__item-value"
          >{{ $n(staff.salary) }} {{ $t("shared.sum") }}</span
        >
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.cardNumber") }}</span>
        <span class="view__item-value">{{
          beautify.beautifyCard(+staff.card_number)
        }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.paymentType") }}</span>
        <span class="view__item-value">{{
          $t(`shared.${beautify.getPayType(staff.pay_type)}`)
        }}</span>
      </div>
      <div class="flex flex-col view__item space-y-2 md:space-y-4">
        <span class="view__item-label">{{ $t("app.workedTime") }}</span>
        <span class="view__item-value">{{
          $t("app.workHour", { value: staff.work_hour })
        }}</span>
      </div>
    </div>
    <el-button @click="goToSchedule" type="primary" size="large" class="mt-5">
      {{ $t("app.comingAndLeaving") }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from "@/composables";
import { useBeautify } from "@/composables/useBeautify";
import type { IStaff } from "@/models/backend";
import { computed } from "vue";
import { useRouter } from "vue-router";

const modal = useModal();
const router = useRouter();
const beautify = useBeautify();

const props = defineProps<{ staff: IStaff }>();

const staff = computed(() => props.staff);

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
