import type {
  ILoginInfo,
  IUser,
  IAcceptInvite,
  IResetInvite,
  ISigninForm,
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
  users: IUser[];
}

export const useUsersStore = defineStore("users", {
  state: (): UserState => ({
    token: getAccessToken() || "",
    user: null,
    users: [],
  }),

  actions: {
    async login(loginInfo: ILoginInfo) {
      const response = await request.post("/auth/login", loginInfo);

      this.token = response.access_token;
      setAccessToken(response.access_token);
      setRefreshToken(response.refresh_token);
    },

    async signin(signinForm: ISigninForm) {
      const response = await request.post("/auth/register", signinForm);
      this.token = response.access_token;
      setAccessToken(response.access_token);
    },

    async sendVerifyEmail() {
      return request.post("/auth/send-verify-email");
    },

    async verifyEmail(code: string) {
      return request.post("/auth/verify", { code });
    },

    async acceptInviteSetPassword(acceptInvite: IAcceptInvite) {
      return request.post("/auth/accept-invite-set-password", acceptInvite);
    },

    async resetPassword(acceptInvite: IResetInvite) {
      return request.post("/auth/reset-password", acceptInvite);
    },

    async sendCodeToEmail(formData: { email: string }) {
      const response = await request.post("/auth/email-send-code", formData);
      setCode(response.code);
    },

    async createUser(formData: Omit<IUser, "id" | "is_verified">) {
      await request.post("/users/create", formData);
      this.getUsers();
    },

    async updateUser(formData: Omit<IUser, "is_verified">) {
      await request.post("/users/update", formData);
      this.getUsers();
    },

    async remoevUser(id: string) {
      await request.post("/users/remove", { id });
      this.getUsers();
    },

    async getUsers() {
      this.users = await request.post("/users/list");
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
