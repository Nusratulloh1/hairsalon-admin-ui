import { defineStore } from "pinia";

import request from "@/utils/request";
import type {
  IProgramByMonth,
  IApplicationByStatus,
  IApplicationByGender,
} from "@/models/backend/application.model";

interface ApplicationState {
  application: any;
  programsByMonth: IProgramByMonth[];
  applicationsByStatus: IApplicationByStatus;
  applicationsByGender: IApplicationByGender;
}

export const useApplicationStore = defineStore("application", {
  state: (): ApplicationState => ({
    application: null,
    programsByMonth: [],
    applicationsByStatus: {
      total: 0,
      pending: 0,
      reject: 0,
      accept: 0,
    },
    applicationsByGender: {
      total: 0,
      female: 0,
      male: 0,
    },
  }),

  actions: {
    async getApplication() {
      const application = await request.post("/application/get-one");
      this.application = application;
    },

    async createApplication(application: any) {
      return request.post("/application/create", application);
    },

    async fetchProgramsByMonth() {
      this.programsByMonth = await request.post(
        "/application/report/program-by-month"
      );
    },

    async fetchApplicationsByStatus() {
      this.applicationsByStatus = await request.post(
        "/application/report/status"
      );
    },

    async fetchApplicationsByGender() {
      this.applicationsByGender = await request.post(
        "/application/report/gender"
      );
    },
  },
});
