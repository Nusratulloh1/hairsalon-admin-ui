<template>
  <el-breadcrumb separator=">" class="app-breadcrumb">
    <el-breadcrumb-item
      v-for="item of breadcrumbItems"
      :key="item.name"
      :to="item.path ?? ''"
      >{{ $t(item.name) }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script lang="ts">
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { IBreadcrumb } from "@/models/frontend";
import { breadCrumbNames } from "@/utils/constants";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const applicationRoutes = router.getRoutes();
    const mainBreadcrumbItem: IBreadcrumb = {
      name: breadCrumbNames.dashboard,
      path: "/dashboard",
    };
    let breadcrumbItems = ref<IBreadcrumb[]>([]);

    watch(
      () => route.name,
      () => {
        breadcrumbItems.value = [mainBreadcrumbItem];
        const currentRoutes = route.fullPath.split("/").slice(1);

        currentRoutes.forEach((item, index) => {
          const currentRoute = applicationRoutes.find((i) => i.name === item);
          console.log("item", item);
          if (item in breadCrumbNames && currentRoute) {
            const breadcrumbItem: IBreadcrumb = {
              name: breadCrumbNames[
                item as unknown as keyof typeof breadCrumbNames
              ],
            };

            if (index + 1 !== currentRoutes.length) {
              breadcrumbItem["path"] = currentRoute.path;
            }
            // console.log("breadcrumbItem", breadcrumbItem);

            breadcrumbItems.value.push(breadcrumbItem);
          }
        });
      },
      { immediate: true }
    );

    return {
      breadcrumbItems,
    };
  },
};
</script>

<style lang="scss" scoped></style>
