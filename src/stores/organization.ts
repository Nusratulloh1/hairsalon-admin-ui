import { defineStore } from "pinia";

import request from "@/utils/request";
import type { ControlItem } from "@/models/frontend";
import { makeControlItems } from "@/utils/mappers";
import type { IOrganization } from "@/models/backend/organization.model";

interface OrgState {
  currentOrganization: IOrganization | null;
  organization: IOrganization | null;
  loading: boolean;
}

export const useOrganizationStore = defineStore("organization", {
  state: (): OrgState => ({
    currentOrganization: null,
    organization: null,
    loading: false,
  }),

  actions: {
    async fetchOrgListTree() {
      const response = await request.post("/organization/list-tree");
      this.currentOrganization = response;
    },

    async createUnit(unit: any) {
      await request.post("/organization/store", unit);
      this.fetchOrgListTree();
    },

    async editUnit(unit: any) {
      await request.post("/organization/update", unit);
      this.fetchOrgListTree();
    },

    async removeUnit(id: string) {
      await request.post("/organization/remove", { id });
      this.fetchOrgListTree();
    },

    async getStaffById(id: string) {
      try {
        this.loading = true;
        const organization = await request.post("/organization/get-one", {
          id,
        });
        this.organization = organization;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },
  },

  getters: {
    orgChildrenControls: (state): ControlItem[] =>
      makeControlItems(state.currentOrganization?.children || []),
  },
});
