import { defineStore } from "pinia";

import request from "@/utils/request";
import type { IFile } from "@/models/backend";

interface ITemplate {
  id: string;
  created_at: Date;
  files: IFile[];
}

interface TemplateState {
  templates: ITemplate[];
  loading: boolean;
}

export const useTemplateStore = defineStore("templates", {
  state: (): TemplateState => ({
    templates: [],
    loading: false,
  }),

  actions: {
    async fetchTemplate() {
      const response = await request.post("/template/list", { limit: 100 });
      this.templates = response?.data || [];
    },

    async createTemplate(file: IFile) {
      try {
        this.loading = true;
        await request.post("/template/create", { files: [file] });
        this.fetchTemplate();
        this.loading = false;
      } catch (error: any) {
        console.log("error", error.message);
        this.loading = false;
        throw Error(error);
      }
    },

    async updateTemplate(formData: { name: string; id: string }) {
      await request.post("/template/update", formData);
      this.fetchTemplate();
    },

    async removeTemplate(id: string) {
      await request.post("/template/remove", { id });
      this.fetchTemplate();
    },
  },
});
