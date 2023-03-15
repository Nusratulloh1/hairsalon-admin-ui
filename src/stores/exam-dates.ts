import { defineStore } from "pinia";

import request from "@/utils/request";
import type { IExamDate, IExamYear } from "@/models/backend";

interface ExamDatesState {
  examDates: IExamDate[];
  examYears: IExamYear[];
}

export const useExamDatesStore = defineStore("exam-dates", {
  state: (): ExamDatesState => ({
    examDates: [],
    examYears: [],
  }),

  actions: {
    async fetchExamYears() {
      const examYears = await request.post("/exam-year/list");
      this.examYears = examYears;
    },
    async createExamYears(year: any) {
      await request.post("/exam-year/create", year);
      this.fetchExamYears();
    },

    async editExamYears(year: any) {
      await request.post("/exam-year/update", year);
      this.fetchExamYears();
    },

    async removeExamYears(id: string) {
      await request.post("/exam-year/remove", { id });
      this.fetchExamYears();
    },

    async fetchExamDates(id: string) {
      const examDates = await request.post("/exam-date/list", {
        year_id: id,
        page: 1,
        limit: 100,
      });
      this.examDates = examDates.data;
    },

    async createExamDates(date: any) {
      await request.post("/exam-date/create", date);
      // this.fetchExamDates();
    },

    async editExamDates(date: any) {
      await request.post("/exam-date/update", date);
      // this.fetchExamDates();
    },

    async removeExamDates(id: string) {
      await request.post("/exam-date/remove", { id });
      // this.fetchExamDates();
    },
  },

  getters: {},
});
