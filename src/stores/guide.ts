import type { IRole, IUSD } from "@/models/backend";
import { defineStore } from "pinia";

import request from "@/utils/request";
import type { ControlItem } from "@/models/frontend";
import { makeControlItems } from "@/utils/mappers";

interface GuideState {
  roles?: IRole[] | null;
  usd: IUSD | null;
  weather: any;
}

export const useGuideStore = defineStore("guide", {
  state: (): GuideState => ({
    roles: [],
    usd: null,
    weather: null,
  }),

  actions: {
    async fetchRoles() {
      const response = await request.post("/reference/roles", {
        for_client: true,
      });
      this.roles = response;
    },
    async fetchUSD() {
      const response = await request.post("/reference/currency");
      this.usd = response;
    },
    async fetchWeather() {
      const response = await request.post("/reference/weather");
      this.weather = response;
    },
  },

  getters: {
    roleControls: (state): ControlItem[] => makeControlItems(state.roles),
    getWeather: (state): { temp: number; description: string } => {
      if (state.weather) {
        return {
          temp: state.weather.main?.temp,
          description: Array.isArray(state.weather.weather)
            ? state.weather.weather[0]?.description
            : "",
        };
      }
      return {
        temp: 0,
        description: "",
      };
    },
  },
});
