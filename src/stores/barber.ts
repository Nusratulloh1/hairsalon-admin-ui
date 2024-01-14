import type { IContact } from "@/models/backend";
import { defineStore } from "pinia";
import request from "@/utils/request";

interface BarberState {
  barbers: any | null;
  barber: any | null;
}

export const usBarberStore = defineStore("barber", {
  state: (): BarberState => ({
    barbers: null,
    barber: null
  }),
  actions: {
    async fetchBarbers() {
      const response = await request.get("/barber");
      this.barbers = response;
    },
    async fetchBarberById(id: number) {
        const response = await request.get(`/barber/get-by-barberId/${id}`);
        this.barber = response;
      },
    updateBarberForAdmin(data: any) {
      return request.put(`/barber/${data.id}/update-barber`, data);
    },
    updateBarbder(data: any) {
      return request.put(`/barber/update-barber`, data);
    },
    removeBarber(id: any) {
      return request.delete(`/barber/${id}`);
    },
  },

  getters: {},
});
