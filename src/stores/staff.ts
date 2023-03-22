import { defineStore } from "pinia";

import request from "@/utils/request";
import type { IStaff, IStaffList, IUser, ListData } from "@/models/backend";

interface StaffState {
  staffs: ListData<IUser>;
  loading: boolean;
  currentStaff: IStaff | null;
}

export const useStaffStore = defineStore("staff", {
  state: (): StaffState => ({
    staffs: {
      page: 1,
      limit: 30,
      total: 0,
      data: [],
    },
    currentStaff: null,
    loading: false,
  }),

  actions: {
    async createStaff(data: any) {
      await request.post("/staff/create", data);
    },

    async editStaff(data: any) {
      await request.post("/staff/update", data);
    },

    async fetchStaff() {
      try {
        this.loading = true;
        const staffs = await request.post("/staff/filter");
        this.staffs = staffs;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },

    async getStaffs(data: any) {
      try {
        this.loading = true;
        const staffs = await request.post("/staff/list", data);
        this.staffs = staffs;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },

    async getStaffById(id: string) {
      try {
        this.loading = true;
        const staff = await request.post("/staff/get-one", {
          id,
        });
        this.currentStaff = staff;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },
    async removeStaff(id: string) {
      try {
        this.loading = true;
        await request.post("/staff/remove", {
          id,
        });
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        throw error;
      }
    },
  },

  getters: {},
});
