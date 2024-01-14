import type { IContact } from "@/models/backend";
import { defineStore } from "pinia";
import request from "@/utils/request";

interface ContactState {
  token?: string;
  contacts: IContact[] | null;
}

export const usContactStore = defineStore("contact", {
  state: (): ContactState => ({
    contacts: null,
  }),
  actions: {
    async fetchContacts() {
      const response = await request.get("/contact-us");
      this.contacts = response;
    },
    createContact(data: IContact) {
      return request.post("/contact-us", data);
    },
    updateContact(data: IContact) {
      return request.put(`/contact-us/${data.id}`, data);
    },
    removeContact(id: any) {
      return request.delete(`/contact-us/${id}`);
    },
  },

  getters: {},
});
