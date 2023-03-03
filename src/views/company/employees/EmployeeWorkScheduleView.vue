<template>
  <div class="callendar">
    <div class="callendar__header grid grid-cols-6">
      <div
        v-for="item of weeks"
        :key="item.value"
        class="callendar__header-item"
        :class="{ 'callendar__header-item-active': item.value === today }"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="callendar__content grid grid-cols-6">
      <div
        class="callendar__content-item"
        v-for="item of durations"
        :key="item.label"
        :class="{ 'callendar__content-item-past': isPast(item.value) }"
      >
        <span class="date-label">{{ item.label }}</span>
        <span class="date-duration" v-if="isPast(item.value)"
          >19:00 - 23:00</span
        >
        <span class="date-empty" v-else>--:-- - --:--</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
  format,
  isPast,
  getDay,
} from "date-fns";
const date = new Date();
const durations = eachDayOfInterval({
  start: startOfMonth(date),
  end: endOfMonth(date),
}).map((item) => ({ value: item, label: format(item, "d LLLL") }));

const weeks = [
  {
    value: 1,
    label: "Понедельник",
  },
  {
    value: 2,
    label: "Вторник",
  },
  {
    value: 3,
    label: "Среда",
  },
  {
    value: 4,
    label: "Четверг",
  },
  {
    value: 5,
    label: "Пятница",
  },
  {
    value: 6,
    label: "Суббота",
  },
];
const today = getDay(date);
console.log("today", today);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.callendar {
  &__header {
    border: 1px solid #f5f5f5;
    border-radius: 2px 2px 0px 0px;
    &-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 0px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #a1a1aa;
      border-left: 1px solid #f5f5f5;

      &-active {
        background-color: $primary;
        color: #fff;
      }
    }
  }
  &__content {
    &-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 12px 16px;
      gap: 8px;
      border: 1px solid #eeeeee;
      &-past {
        background: #f5f5f5;
      }
      .date {
        &-label {
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: #77787d;
        }
        &-duration {
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #000;
        }
        &-empty {
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #77787d;
        }
      }
    }
  }
}
</style>
