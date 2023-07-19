import type { IRole, IUSD } from "@/models/backend";
import { defineStore } from "pinia";
import request from "@/utils/request";
import type { ControlItem } from "@/models/frontend";
import { makeControlItems } from "@/utils/mappers";
interface GuideState {
  roles?: IRole[] | null;
  usd: IUSD | null;
  weather: any;
  langs: any[],
  tuitions: any[];
  examDates: any[];
  regions: any[];
}

export const useGuideStore = defineStore("guide", {
  state: (): GuideState => ({
    roles: [],
    usd: null,
    weather: null,
    tuitions: [],
    langs: [],
    examDates: [],
    regions: [],
  }),

  actions: {
    async fetchRoles() {
      const response = await request.post("/reference/roles", {
        for_client: true,
      });
      this.roles = response;
    },
    async fetchTuitions() {
      const tuitions = await request.post("/program/list");
      this.tuitions = tuitions
    },
    async fetchTuitionsLang() {
      const langs = await request.post("/program/list-languages");
      this.langs = langs;
    },
    async createTuition(Tuition: any) {
      await request.post("/program/create", Tuition);
      this.fetchTuitions();
    },

    async editTuition(Tuition: any) {
      await request.post("/program/update", Tuition);
      this.fetchTuitions();
    },

    async removeTuition(id: string) {
      await request.post("/program/remove", { id });
      this.fetchTuitions();
    },
    async fetchExamDates() {
      const examDates = await request.post("/application/exam-dates");
      this.examDates = examDates;
    },
    async fetchRegions(data: any) {
      const regions = await request.post("/application/regions", data);
      this.regions = regions;
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
    getExamDates: (state): ControlItem[] =>
      state.examDates.map((date) => ({ value: date.id, label: date.duration })),
    getRegions: (state): ControlItem[] =>
      state.regions
        .filter((region) => region.type === "province")
        .map((region) => ({
          value: region.id,
          label: region.name,
        })),
    getTuitions: (state): any[] =>
      state.tuitions.map((tution) => ({
        value: tution.id,
        label: tution.program,
        lang: tution.lang || [],
        has_scholarship: tution.has_scholarship
      })),
  },
});
