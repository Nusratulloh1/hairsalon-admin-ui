import type {
  ILoginInfo,
  IUser,
  IAcceptInvite,
  IResetInvite,
} from "@/models/backend";
import { defineStore } from "pinia";
import {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  removeAccessToken,
  removeRefreshToken,
  setCode,
} from "@/utils/cookies";
import request from "@/utils/request";

interface UserState {
  token?: string;
  user: IUser | null;
}

export const useUsersStore = defineStore("users", {
  state: (): UserState => ({
    token: getAccessToken() || "",
    user: null,
  }),

  actions: {
    async login(loginInfo: ILoginInfo) {
      const response = await request.post("/auth/login", loginInfo);

      this.token = response.access_token;
      setAccessToken(response.access_token);
      setRefreshToken(response.refresh_token);
    },

    async acceptInviteSetPassword(acceptInvite: IAcceptInvite) {
      return request.post("/auth/accept-invite-set-password", acceptInvite);
    },
    async resetPassword(acceptInvite: IResetInvite) {
      return request.post("/auth/reset-password", acceptInvite);
    },
    async sendCodeToEmail(formData: { email: string }) {
      try {
        const response = await request.post("/auth/email-send-code", formData);
        setCode(response.code);
      } catch (error: any) {
        console.log("error", error.message);
      }
    },

    async getUserInfo() {
      const user = await request.post("/auth/get-user");

      this.user = user;
    },

    resetToken() {
      removeAccessToken();
      removeRefreshToken();
      this.token = "";
      this.user = null;
    },
  },

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
});
