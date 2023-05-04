import type {
  ILoginInfo,
  IUser,
  IAcceptInvite,
  IResetInvite,
  ISigninForm,
  ListData,
  ICountryCodes
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
  countryCodes: ICountryCodes[] | null,
  users: ListData<IUser[]>;
}

export const useUsersStore = defineStore("users", {
  state: (): UserState => ({
    token: getAccessToken() || "",
    user: null,
    countryCodes: null,
    users: {
      page: 1,
      limit: 30,
      total: 0,
      data: [],
    },
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
    async countryCode() {
      const countryCode = await request.post("/country/list");
      this.countryCodes = countryCode
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
      await request.post("/auth/send-email-reset-token", formData);
      // setCode(response.code);
    },

    async createUser(formData: Omit<IUser, "id" | "is_verified">) {
      await request.post("/users/create", formData);
    },

    async updateUser(formData: Omit<IUser, "is_verified">) {
      await request.post("/users/update", formData);
    },

    async remoevUser(id: string) {
      await request.post("/users/remove", { id });
    },

    async getUsers(data: any) {
      this.users = await request.post("/users/list", data);
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
