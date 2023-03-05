import { defineStore } from "pinia";

import request from "@/utils/request";

interface ApplicationState {
  application: any;
}

export const useApplicationStore = defineStore("application", {
  state: (): ApplicationState => ({
    application: null,
  }),

  actions: {
    async getApplication() {
      const application = await request.post("/application/get-one");
      this.application = application;
    },

    async createApplication(application: any) {
      return request.post("/application/create", application);
    },
  },
});
