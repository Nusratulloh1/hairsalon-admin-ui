import { defineStore } from "pinia";

import request from "@/utils/request";
import type { IWarehouse, IWarehouseList, ListData } from "@/models/backend";

interface WarehouseState {
  warehouses: ListData<IWarehouseList[]>;
  loading: boolean;
  currentWarehouse: IWarehouse | null;
}

export const useWarehouseStore = defineStore("warehouse", {
  state: (): WarehouseState => ({
    warehouses: {
      page: 1,
      limit: 30,
      total: 0,
      data: [],
    },
    currentWarehouse: null,
    loading: false,
  }),

  actions: {
    async createWarehouse(data: any) {
      await request.post("/warehouse/create", data);
    },

    async editWarehouse(data: any) {
      await request.post("/warehouse/update", data);
    },

    async fetchWarehouse() {
      try {
        this.loading = true;
        const warehouses = await request.post("/warehouse/list");

        this.warehouses = warehouses;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },

    async getWarehouseById(id: string) {
      try {
        this.loading = true;
        const warehouses = await request.post("/warehouse/get-one", {
          id,
        });
        this.currentWarehouse = warehouses;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },

    async removeWarehouse(id: string) {
      try {
        this.loading = true;
        await request.post("/warehouse/remove", {
          id,
        });
        this.fetchWarehouse();
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },
  },

  getters: {},
});
