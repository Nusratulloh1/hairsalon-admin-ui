<template>
  <div class="topElement" ref="topElement"></div>
  <div
    v-loading="loading"
    class="wrapper"
    :style="{ top: topElement?.offsetTop + 'px' }"
  >
    <div class="flex justify-center py-4 tree-wrapper">
      <div class="tree !pr-8" ref="treeElement">
        <div class="relative">
          <button
            class="unit"
            type="button"
            aria-pressed="false"
            data-js="node"
          >
            <div class="unit__header unit__header-main">
              <h1 class="title truncate">{{ orgTree?.name }}</h1>
            </div>
            <div class="body grid grid-cols-1 divide-y">
              <div class="flex items-center space-x-2 py-2">
                <span class="text-sm text-gray-500">{{
                  $t("app.address")
                }}</span>
                <span>{{ orgTree?.address }}</span>
              </div>
            </div>
            <div class="unit-details absolute top-2/4 -right-10">
              <CirclePlusFilled
                class="h-5 w-5 text-primary"
                @click="openOrgFormDialog"
              />
            </div>
          </button>
        </div>
        <ul>
          <li v-for="child of orgTree?.children" :key="child.id">
            <button
              class="unit"
              type="button"
              aria-pressed="false"
              data-js="node"
            >
              <div class="unit__header unit__header-secondary">
                <h1 class="title truncate">{{ child.name }}</h1>
              </div>
              <div class="body grid grid-cols-1 divide-y">
                <div class="flex items-center space-x-2 py-2">
                  <span class="text-sm text-gray-500">{{
                    $t("app.address")
                  }}</span>
                  <span class="text-base truncate">{{ child.address }}</span>
                </div>
                <div class="flex items-center space-x-2 py-2">
                  <span class="text-sm text-gray-500">{{
                    $t("app.orgType")
                  }}</span>
                  <span class="text-base truncate">{{
                    $t(`app.${child.type}`)
                  }}</span>
                </div>
              </div>
              <div
                class="unit-details absolute top-1/4 -right-10 flex flex-col space-y-4"
              >
                <EditPen
                  @click="onEditClick(child.id)"
                  class="h-5 w-5 text-primary"
                />
                <DeleteFilled
                  @click="confirmDelete(child.id)"
                  class="h-5 w-5 text-red-400"
                />
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <teleport to="#modal" v-if="showModal">
    <OrgForm
      :type="formType"
      :organization="organization"
      @on-submit="submitUnit($event)"
    />
  </teleport>
</template>

<script setup lang="ts">
import { useOrganizationStore } from "@/stores";
import { ref, onMounted, computed } from "vue";
import {
  CirclePlusFilled,
  EditPen,
  DeleteFilled,
} from "@element-plus/icons-vue";
import { useModal } from "@/composables";
import { useI18n } from "vue-i18n";
import OrgForm from "./components/OrgForm.vue";
import { ElMessage, ElMessageBox } from "element-plus";

const treeElement = ref<HTMLInputElement | null>(null);

const i18n = useI18n();
const modal = useModal();
const orgStore = useOrganizationStore();

const formType = ref<"create" | "edit">("create");
const loading = ref(false);
const orgTree = computed(() => orgStore.currentOrganization);
const organization = computed(() => orgStore.organization);
const showModal = computed(() => modal.show.value);

const checkForLeft = () => {
  if (treeElement.value) {
    const width = Math.floor(
      (treeElement.value?.clientWidth - window.innerWidth) / 2
    );
    if (width > 0) {
      treeElement.value.style.left = width + "px";
    }
  }
};

const openOrgFormDialog = () => {
  formType.value = "create";
  modal.setTitle(i18n.t("app.addBusinessUnits"));
  modal.setWidth("50%");
  modal.showModal();
};

const onEditClick = async (id: string) => {
  try {
    await orgStore.getStaffById(id);
    formType.value = "edit";
    modal.setTitle(i18n.t("app.editBusinessUnits"));
    modal.setWidth("50%");
    modal.showModal();
  } catch (error: any) {
    console.log("error", error.message);
  }
};

const submitUnit = async (unit: any) => {
  try {
    loading.value = true;
    const data = {
      ...unit,
      parent_id: orgTree.value?.id,
    };
    if (formType.value === "edit" && organization.value) {
      data["id"] = organization.value.id;
      await orgStore.editUnit(data);
      ElMessage({
        message: i18n.t("shared.updated"),
        type: "success",
      });
    } else {
      await orgStore.createUnit(data);
      ElMessage({
        message: i18n.t("shared.created"),
        type: "success",
      });
    }
    loading.value = false;
    modal.hideModal();
    checkForLeft();
  } catch (error: any) {
    loading.value = false;
    console.log("error", error);
  }
};

const confirmDelete = (id: string) => {
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
      try {
        loading.value = true;
        await orgStore.removeUnit(id);
        loading.value = false;
        ElMessage({
          type: "success",
          message: i18n.t("shared.deleteCompleted"),
        });
        checkForLeft();
      } catch (error: any) {
        loading.value = false;
        console.log("error", error);
      }
    })
    .catch(() => {});
};

onMounted(async () => {
  try {
    loading.value = true;
    await orgStore.fetchOrgListTree();
    checkForLeft();
    loading.value = false;
  } catch (error: any) {
    console.log("error", error?.message);
    loading.value = false;
  }
});

const topElement = ref<HTMLInputElement | null>(null);
</script>

<style lang="scss" scoped>
$gutter: 4em;
$line-color: #666;
$line-width: 0.1em;
.wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 100% !important;
  overflow: auto;
  border-top: 1px solid #8992a9;
  margin-top: 1rem;
}
.tree {
  position: relative;
  text-align: center;
  padding-right: 16px;
  &,
  & ul,
  & li {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }
  &,
  & ul {
    display: table;
  }
  & ul {
    width: 100%;
  }
  & li {
    display: table-cell;
    padding: $gutter 0;
    vertical-align: top;
  }
  /* _________ */
  & li:before {
    content: "";
    left: 0;
    outline: solid calc($line-width / 2) $line-color;
    position: absolute;
    right: 0;
    top: 0;
  }
  & li:first-child:before {
    left: 50%;
  }
  & li:last-child:before {
    right: 50%;
  }
  & button {
    border-radius: 0.2em;
    margin: 0 calc($gutter / 2) $gutter;
    // The user might delete all of the text, causing the button to shrink
    min-height: 2.1em;
    position: relative;
    z-index: 1;
  }
  & [contenteditable] {
    cursor: text;
  }
  & .selected {
    border-color: #900;
    border-style: dashed;
    -webkit-box-shadow: 0 0 $gutter $line-width rgba(153, 0, 0, 0.3);
    -moz-box-shadow: 0 0 $gutter $line-width rgba(153, 0, 0, 0.3);
    box-shadow: 0 0 $gutter $line-width rgba(153, 0, 0, 0.3);
  }
  /* | */
  & ul:before,
  ul button:before {
    outline: solid calc($line-width / 2) $line-color;
    content: "";
    height: $gutter;
    left: 50%;
    position: absolute;
    // This fixes the hack in the previous version
    // top: calc(calc(-1 * $gutter) - calc($line-width / 2));
    top: calc(-1 * $gutter);
  }

  /* The root node doesn't connect upwards */
  & > li {
    margin-top: 0;
  }
  & > li:before,
  & > li:after,
  & > li > button:before {
    outline: none;
  }
}
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  position: relative;
  &:focus,
  &:hover {
    outline: 0.1em dotted $line-color;
    outline-offset: 0.5em;
  }
}

// .tree-wrapper {
//   max-width: 100%;
//   overflow-y: scroll;
//   position: relative;
//   left: 300px;
// }
.unit {
  width: 260px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(40, 46, 54, 0.08);

  &-details {
    display: none;
  }

  &:focus {
    .unit-details {
      display: block;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px;
    border-radius: 4px 4px 0px 0px;

    .title {
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
    }
    .card {
      background: #ffffff;
      border-radius: 4px;
      font-weight: 800;
      font-size: 13px;

      padding: 6px 7px;
    }
  }
  .body {
    background: #fff;
    padding: 12px 8px;
    font-weight: 500;
    font-size: 14px;
    color: #77787d;
    border-radius: 0px 0px 4px 4px;
    text-align: start;
  }

  &__header-main {
    background: #282e36;

    .card {
      color: #282e36;
    }
  }

  &__header-secondary {
    background: #8758ff;

    .card {
      color: #8758ff !important;
    }
  }
}
</style>
