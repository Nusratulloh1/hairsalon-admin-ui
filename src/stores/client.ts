import { defineStore } from "pinia";

import request from "@/utils/request";
import type { IClient, IClientList, ListData } from "@/models/backend";

interface ClientState {
  clients: ListData<IClientList[]>;
  loading: boolean;
  currentClient: IClient | null;
}

export const useClientStore = defineStore("client", {
  state: (): ClientState => ({
    clients: {
      page: 1,
      limit: 30,
      total: 0,
      data: [],
    },
    currentClient: null,
    loading: false,
  }),

  actions: {
    async createClient(data: any) {
      await request.post("/customer/store", data);
    },

    async editClient(data: any) {
      await request.post("/customer/update", data);
    },

    async fetchClient() {
      try {
        this.loading = true;
        const clients = await request.post("/customer/list");

        this.clients = clients;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },

    async getClientById(id: string) {
      try {
        this.loading = true;
        const client = await request.post("/customer/get-one", {
          id,
        });
        this.currentClient = client;
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },
    async removeClient(id: string) {
      try {
        this.loading = true;
        await request.post("/customer/remove", {
          id,
        });
        this.fetchClient();
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log("error", error?.message);
      }
    },
  },

  getters: {},
});
