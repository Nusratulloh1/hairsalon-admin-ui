<template>
  <div class="space-y-2 md:space-y-8 view">
    <div>
      <h1 class="view__title">{{ $t("app.order-history") }}</h1>
      <p class="view__description">
        {{ $t("app.dashboardTitle") }}
      </p>
    </div>
    <div class="content">
      <div class="content__header">
        <div class="tab flex gap-x-8">
          <div
            v-for="item of tabItems"
            :key="item.value"
            class="tab__item"
            :class="{ 'tab__item-active': item.value === activeTab }"
          >
            {{ $t("shared.all") }}
          </div>
        </div>
        <div>
          <el-button type="primary" class="gray-button" size="large">
            <FilterIcon class="h-4 w-4 fill-primary mr-2" />
            <span>{{ $t("shared.filter") }}</span>
          </el-button>
          <el-button
            type="primary"
            size="large"
            @click="$router.push('/orders/new-order')"
          >
            <UserPlusIcon class="h-5 w-5 fill-primary mr-2" />
            <span>{{ $t("app.addNewOrder") }}</span>
          </el-button>
        </div>
      </div>
      <div class="content__table py-2 md:py-3.5 px-4 md:px-6">
        <div class="table-wrapper" v-if="tableData?.length">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            row-class-name="cursor-pointer"
            @row-click="onTableRowClick"
            v-loading="loading"
          >
            <el-table-column
              prop="id"
              label="ID"
              min-width="160"
              max-width="200"
            />
            <el-table-column
              prop="phone_number"
              :label="$t('app.phoneNumber')"
              min-width="160"
              max-width="200"
              align="center"
            >
              <template #default="{ row }">
                {{ beautify.beautifyPhone(row.phone_number) }}
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              :label="$t('app.location')"
              width="180"
              align="center"
            >
              <template #default="{ row }">
                <h1 class="leading-none">
                  {{ row.address }}
                </h1>
              </template>
            </el-table-column>
            <el-table-column
              prop="client_type"
              label="B2B / B2C"
              min-width="150"
              align="center"
            />
            <el-table-column
              prop="status"
              :label="$t('app.status')"
              min-width="150"
              align="center"
            >
              <template #default="{ row }">
                <div class="app-light-tag">
                  {{ row.status }}
                </div>
              </template>
            </el-table-column>

            <el-table-column width="50" align="right" prop="action">
              <template #default="scope">
                <el-dropdown
                  trigger="click"
                  @command="
                    (command) => handleActionClick(command, scope.row.id)
                  "
                  class="flex justify-center white-card"
                >
                  <el-button text>
                    <MoreFilled
                      class="h-4 w-4 rotate-90 dot-icon cursor-pointer"
                    />
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
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-else class="flex items-center justify-center py-8 md:py-20">
          <EmptyListIcon />
        </div>
      </div>
      <div class="content__footer p-4 md:p-7">
        <el-pagination
          background
          layout="pager, next"
          :total="staffStore.staffs?.total"
        />
      </div>
    </div>
  </div>
  <teleport to="#modal" v-if="showModal">
    <ViewOrderDialog />
  </teleport>
</template>

<script lang="ts" setup>
import { FilterIcon, UserPlusIcon, EmptyListIcon } from "@/components/icons";
import { useModal } from "@/composables";
import { MoreFilled, Delete, EditPen } from "@element-plus/icons-vue";
import ViewOrderDialog from "./components/ViewOrderDialog.vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStaffStore } from "@/stores";
import { useRouter } from "vue-router";
import { useBeautify } from "@/composables/useBeautify";

const i18n = useI18n();
const router = useRouter();
const modal = useModal();
const beautify = useBeautify();
const staffStore = useStaffStore();

// onMounted(() => {
//   staffStore.fetchStaff();
// });

const loading = computed(() => staffStore.loading);
// const staffs = computed(() => staffStore.staffs);
// const currentStaff = computed(() => staffStore.currentStaff);

const activeTab = ref("all");
const showModal = computed(() => modal.show.value);

const onTableRowClick = async (row: any, cell: any) => {
  if (cell.property !== "action") {
    try {
      // await staffStore.getStaffById(row.id);
      modal.setTitle(i18n.t("app.orderInformation"));
      modal.setWidth("50%");
      modal.showModal();
    } catch (error) {
      console.log("error", error);
    }
  }
};

const tableData = [
  {
    id: Math.floor(Math.random() * 100),
    address: "Ташкент, Чиланзар Катта Хирмонтепа 1",
    phone_number: "998990009988",
    client_type: "B2B",
    status: "В производстве",
  },
  {
    id: Math.floor(Math.random() * 100),
    address: "Ташкент, Чиланзар Катта Хирмонтепа 1",
    phone_number: "998990009988",
    client_type: "B2B",
    status: "В производстве",
  },
  {
    id: Math.floor(Math.random() * 100),
    address: "Ташкент, Чиланзар Катта Хирмонтепа 1",
    phone_number: "998990009988",
    client_type: "B2B",
    status: "В производстве",
  },
  {
    id: Math.floor(Math.random() * 100),
    address: "Ташкент, Чиланзар Катта Хирмонтепа 1",
    phone_number: "998990009988",
    client_type: "B2B",
    status: "В производстве",
  },
];

const tabItems = [
  {
    value: "all",
    label: "shared.all",
  },
];

const handleActionClick = (command: string, id: string) => {
  if (command === "edit") {
    router.push({ name: "edit-employee", params: { id } });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/colors.scss";

.content {
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 14px 14px rgba(20, 23, 38, 0.02);
  border-radius: 10px;

  &__header {
    height: 60px;
    padding: 0 24px;
    border-bottom: 1px solid #f2f2f2;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    row-gap: 12px;
  }

  &__table {
    border-bottom: 1px solid #f2f2f2;
  }
}

.table-wrapper {
  border: 1px solid #f6f7f9;
  border-radius: 6px;
}

.dot-icon {
  color: #8492a9;
}

.tab {
  &__item {
    font-weight: 500;
    font-size: 16px;
    line-height: 60px;
    text-align: justify;
    color: #8992a9;
    height: 100%;
    cursor: pointer;

    &-active {
      color: $primary;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background: #5db8e4;
        border-radius: 39px 39px 0 0;
        left: 0;
        bottom: 0;
      }
    }
  }
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
