<template>
  <div class="header">
    <div class="flex flex-col">
      <h1 class="header__title">{{ $t("app.goals") }}</h1>
      <p class="header__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="topElement" ref="topElement"></div>

    <div
      class="wrapper"
      :style="{
        top: topElement?.offsetTop + 'px',
        left: topElement?.offsetLeft + 'px',
      }"
      v-loading="loading"
    >
      <div class="scene"></div>
      <div class="flex items-start gap-x-4">
        <div
          v-for="group of goalsGroup"
          :key="group.id"
          class="flex flex-col justify-between gap-y-8 md:gap-y-16"
        >
          <div class="goals-wrapper">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span
                  class="inline-block w-2 h-2 rounded-full bg-primary"
                ></span>
                <span class="text-primary text-lg font-semibold">{{
                  group.name
                }}</span>
              </div>
              <el-dropdown
                trigger="click"
                @command="(command) => handleActionClick(command, group)"
                class="flex justify-center white-card"
              >
                <el-button text>
                  <MoreFilled class="h-4 w-4 dot-icon cursor-pointer" />
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu class="!p-1 space-y-1">
                    <el-dropdown-item
                      command="delete"
                      class="danger-dropdown-item flex items-center justify-start space-x-3 !py-2 rounded"
                    >
                      <Delete class="h-4 w-4" />
                      <span>{{ $t("shared.delete") }}</span>
                    </el-dropdown-item>
                    <el-dropdown-item
                      command="edit"
                      class="simple-dropdown-item flex items-center justify-start space-x-3 !py-2 rounded"
                    >
                      <EditPen class="h-4 w-4 icon" />
                      <span>{{ $t("shared.edit") }}</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div class="goals space-y-3">
              <div
                v-for="goal of group.goals"
                :key="goal.id"
                @click="onGoalDbClick(goal, group.id)"
                class="goal flex flex-col items-start cursor-pointer"
              >
                <p class="goal__title mb-2 trunucate">{{ goal.title }}</p>
                <p class="goal__text mb-2 trunucate">{{ goal.body }}</p>
                <p class="goal__date mb-2">{{ formatDate(goal.dates) }}</p>
                <div
                  class="rounded text-white text-sm py-1 px-1.5"
                  :style="{ 'background-color': goalColors[goal.status] }"
                >
                  {{ $t(`goals.${goal.status}`) }}
                </div>
              </div>
            </div>
            <button class="goal-btn" @click="openGoalFormDialog(group)">
              + {{ $t("app.addTask") }}
            </button>
          </div>
          <div class="goal-stats flex flex-col gap-y-4 md:py-12 py-8">
            <p class="goal-stats__text">
              {{ $t("app.finished") }}:
              <span class="text-primary"
                >{{ group.status_count }}/{{ group.total_count }}</span
              >
            </p>
            <el-progress
              :percentage="
                (isNaN(group.status_count / group.total_count)
                  ? 0
                  : group.status_count / group.total_count) * 100
              "
            >
              <span text></span>
            </el-progress>
          </div>
        </div>
        <button class="folder-btn" @click="openCreateGroup">
          + {{ $t("app.addOneColumn") }}
        </button>
      </div>
    </div>
  </div>
  <teleport to="#modal" v-if="showModal">
    <GoalForm
      :type="formType"
      :goal="goal"
      @on-submit="submitForm($event)"
      @on-delete="deleteGoal($event)"
    />
  </teleport>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";
import { useGoalsStore } from "@/stores";
import { MoreFilled } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useI18n } from "vue-i18n";
import { GoalStatus, type IGoal, type IGoalGroup } from "@/models/backend";
import { format } from "date-fns";
import GoalForm from "./components/GoalForm.vue";
import { useModal } from "@/composables";

const formType = ref<"create" | "edit">("create");
const topElement = ref<HTMLInputElement | null>(null);
const gorupId = ref<string | null>(null);
const modal = useModal();
const i18n = useI18n();
const goalStore = useGoalsStore();

const showModal = computed(() => modal.show.value);
const loading = computed(() => goalStore.loading);
const goalsGroup = computed(() => goalStore.goalGroups);
const goal = ref<IGoal | null>(null);

const goalColors = {
  [GoalStatus.NOT_STARTED]: "#6DA2CB",
  [GoalStatus.POSTPONED]: "#F3B256",
  [GoalStatus.CANCELED]: "#FF4C4C",
  [GoalStatus.IN_PROCESS]: "#EBCE00",
  [GoalStatus.DONE]: "#0CBD50",
} as any;
onMounted(() => {
  goalStore.fetchGoalGroup();
});

const openCreateGroup = () => {
  ElMessageBox.prompt(i18n.t("app.title"), "Добавить колонку", {
    confirmButtonText: i18n.t("shared.save"),
    cancelButtonText: i18n.t("shared.cancel"),
    inputPattern: /./,
    inputErrorMessage: i18n.t("validation.fillField"),
  })
    .then(async ({ value }) => {
      await goalStore.createGoalGroup({ name: value });
      ElMessage({
        message: i18n.t("shared.created"),
        type: "success",
      });
    })
    .catch(() => {});
};

const handleActionClick = (command: string, group: IGoalGroup) => {
  if (command === "edit") {
    ElMessageBox.prompt(i18n.t("app.title"), "Редактировать колонку", {
      confirmButtonText: i18n.t("shared.save"),
      cancelButtonText: i18n.t("shared.cancel"),
      inputPattern: /./,
      inputValue: group.name,
      inputErrorMessage: i18n.t("validation.fillField"),
    })
      .then(async ({ value }) => {
        await goalStore.updateGoalGroup({ name: value, id: group.id });
        ElMessage({
          message: i18n.t("shared.updated"),
          type: "success",
        });
      })
      .catch(() => {});
  }
  if (command === "delete") {
    ElMessageBox.confirm(
      i18n.t("shared.deleteConfirm"),
      i18n.t("shared.warning"),
      {
        confirmButtonText: i18n.t("shared.yes"),
        cancelButtonText: i18n.t("shared.cancel"),
        type: "warning",
        center: true,
      }
    )
      .then(async () => {
        await goalStore.removeGoalGroup(group.id);
        ElMessage({
          type: "success",
          message: i18n.t("shared.deleteCompleted"),
        });
      })
      .catch(() => {});
  }
};

const onGoalDbClick = async (_goal: IGoal, group_id: string) => {
  console.log("_goal", _goal);
  try {
    goal.value = _goal;
    gorupId.value = group_id;
    formType.value = "edit";
    modal.setTitle(i18n.t("app.editBusinessUnits"));
    modal.setWidth("50%");
    modal.showModal();
  } catch (error: any) {
    console.log("error", error.message);
  }
};

const openGoalFormDialog = (group: IGoalGroup) => {
  formType.value = "create";
  gorupId.value = group.id;
  modal.setTitle(i18n.t("app.addGoal"));
  modal.setWidth("50%");
  modal.showModal();
};

const submitForm = async (goal: any) => {
  const data = {
    ...goal,
    dates: format(new Date(goal.dates), "yyyy-MM-dd"),
    group_id: gorupId.value,
  };
  if (formType.value === "edit") {
    data["id"] = goal.id;
    await goalStore.updateGoal(data);
    ElMessage({
      message: i18n.t("shared.updated"),
      type: "success",
    });
  } else {
    await goalStore.createGoal(data);
    ElMessage({
      message: i18n.t("shared.created"),
      type: "success",
    });
  }
  modal.hideModal();
};

const deleteGoal = (goalId: string) => {
  ElMessageBox.confirm(
    i18n.t("shared.deleteConfirm"),
    i18n.t("shared.warning"),
    {
      confirmButtonText: i18n.t("shared.yes"),
      cancelButtonText: i18n.t("shared.cancel"),
      type: "warning",
      center: true,
    }
  )
    .then(async () => {
      await goalStore.removeGoal(goalId);
      ElMessage({
        type: "success",
        message: i18n.t("shared.deleteCompleted"),
      });
      modal.hideModal();
    })
    .catch(() => {});
};
const formatDate = (date: string) => format(new Date(date), "iii, dd MMM");
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";
.header {
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
}

.wrapper {
  position: absolute;
  right: 0;
  max-width: 100% !important;
  overflow: auto;
  background: #fafafa;

  .scene {
    z-index: -1;
    position: fixed;
    bottom: 0;
    top: 0;
    left: -40px;
    right: 0;
    background: #fafafa;
  }
}

.goals-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "top"
    "goals"
    "btn";
  row-gap: 16px;
  max-height: 540px;
  width: 356px;
  background: #f6f8f9;
  border-radius: 10px;
  padding: 12px 8px;
  overflow-y: hidden;

  .goals {
    overflow-y: auto;
  }

  .goal {
    background: #ffffff;
    border-radius: 7.58269px;
    padding: 10px 15px;
    &__title {
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #282e36;
    }
    &__text {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #282e36;
    }
    &__date {
      font-weight: 600;
      font-size: 10.1102px;
      line-height: 14px;
      color: #282e36;
    }
  }
  .goal-btn {
    border: 1px dashed #111;
    padding: 12px;
    color: rgba(40, 46, 54, 0.7);
    font-weight: 500;
    font-size: 15.1654px;
    line-height: 21px;
    border-radius: 5px;
  }
}
.goal-stats {
  border-top: 1px solid #8992a9;

  &__text {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000;
  }
}
.folder-btn {
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: rgba(40, 46, 54, 0.7);
  background-color: #f4f4f5;
  border-radius: 10px;
  padding: 13px 30px;
  min-width: 350px;
}
</style>
<style lang="scss">
@import "@/assets/styles/colors.scss";
.danger-dropdown-item {
  background-color: $bg-danger !important;
  color: $danger;
  width: 180px;
  &:focus {
    color: $danger !important;
    background-color: $bg-danger !important;
  }
}
.simple-dropdown-item {
  color: #181c25 !important;
  width: 180px;
  .icon {
    color: #c4c8d4;
  }
  &:focus {
    color: #181c25 !important;
    background-color: $bg-white !important;
  }
}
</style>
