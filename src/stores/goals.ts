import { defineStore } from "pinia";

import request from "@/utils/request";
import { GoalStatus, type IGoalGroup, type IGoal } from "@/models/backend";

interface GoalsState {
  goalGroups: IGoalGroup[];
  goal: IGoal | null;
  loading: boolean;
}

export const useGoalsStore = defineStore("goals", {
  state: (): GoalsState => ({
    goalGroups: [],
    goal: null,
    loading: false,
  }),

  actions: {
    async fetchGoalGroup() {
      const response = await request.post("/goal-group/list", {
        status: GoalStatus.DONE,
      });
      this.goalGroups = response;
    },

    async createGoalGroup(formData: { name: string }) {
      try {
        this.loading = true;
        await request.post("/goal-group/create", formData);
        this.fetchGoalGroup();
        this.loading = false;
      } catch (error: any) {
        console.log("error", error.message);
        this.loading = false;
      }
    },

    async createGoal(formData: Omit<IGoal, "id">) {
      try {
        this.loading = true;
        await request.post("/goal/create", formData);
        this.fetchGoalGroup();
        this.loading = false;
      } catch (error: any) {
        console.log("error", error.message);
        this.loading = false;
      }
    },

    async updateGoal(formData: Omit<IGoal, "id">) {
      try {
        this.loading = true;
        await request.post("/goal/update", formData);
        this.fetchGoalGroup();
        this.loading = false;
      } catch (error: any) {
        console.log("error", error.message);
        this.loading = false;
        throw error;
      }
    },

    async removeGoal(id: string) {
      await request.post("/goal/remove", { id });
      this.fetchGoalGroup();
    },

    async updateGoalGroup(formData: { name: string; id: string }) {
      await request.post("/goal-group/update", formData);
      this.fetchGoalGroup();
    },

    async removeGoalGroup(id: string) {
      await request.post("/goal-group/remove", { id });
      this.fetchGoalGroup();
    },
  },
});
