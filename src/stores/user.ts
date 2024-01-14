import type {
  ILoginInfo,
  IUser,
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
}

export const useUsersStore = defineStore("users", {
  state: (): UserState => ({
    token: getAccessToken() || "",
    user: null,
  }),

  actions: {
    async login(loginInfo: ILoginInfo) {
      const response = await request.post("/auth/authenticate", loginInfo);

      this.token = response.token;
      setAccessToken(response.token);
    },

    async signin(signinForm: ISigninForm) {
      const response = await request.post("/auth/register", signinForm);
      
      this.token = response.token;
      setAccessToken(response.token);
    },
    async getUserInfo() {
      const user = await request.get("/get-user");
      console.log(user);
      
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
