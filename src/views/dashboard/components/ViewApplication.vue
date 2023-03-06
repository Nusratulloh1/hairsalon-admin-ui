<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <div class="flex space-x-8">
        <img :src="file_url" alt="File" srcset="" class="w-36 h-48" />
        <dl class="w-full grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Full Name</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ application.first_name + " " + application.last_name }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">
              Passport Information
            </dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{
                application.passport_serial + " " + application.passport_number
              }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ userStore.getUser?.email }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Date of Birth</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ formatDate(application.birth_date) }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ application.phone }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Gender</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ application.gender }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">
              Adress Information
            </dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ application.city?.name?.en || application.city?.name?.uz }},
              {{ application.address }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">
              English Certificate
            </dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ application.certificate_number }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="app-divider my-2 md:my-4" />
      <h1 class="font-medium text-base text-center mb-4 md:mb-8">
        Exam Preferences
      </h1>
      <dl
        class="w-full grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 md:grid-cols-3"
      >
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Department</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ application.program?.program }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Exam Date</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ application.exam_date?.duration }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Scholarship</dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ application.is_scholarship ? "Yes" : "No" }}
          </dd>
        </div>
      </dl>
      <div class="app-divider my-2 md:my-4" />
      <div class="flex items-center space-x-4">
        <p class="font-medium text-xl">Status:</p>
        <el-tag size="large"
          ><span class="text-base">{{ application.status }}</span></el-tag
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFileStore, useUsersStore } from "@/stores";
import { format } from "date-fns";
import { onMounted, ref, computed } from "vue";

const fileStore = useFileStore();
const userStore = useUsersStore();

const props = defineProps<{
  application?: any;
}>();
const application = computed(() => props.application);
const file_url = ref("");
onMounted(async () => {
  const photo = props.application?.passport.id;
  const file = await fileStore.downloadById(photo);
  file_url.value = URL.createObjectURL(file);
});

const formatDate = (date: string) => format(new Date(date), "yyyy-MM-dd");
</script>

<style scoped></style>
