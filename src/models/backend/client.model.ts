import type { Gender } from "./common.model";

export interface IClientList {
  id: string;
  full_name: string;
  salary: number;
  card_number: number;
  pay_type: number;
  work_hour: number;
  phone: string;
  created_at: Date;
}

export interface IClient {
  id: string;
  name: string;
  surname: string;
  middle_name: string;
  phone: string;
  address_id?: string;
  passport_number: string;
  type?: string;
  status: number;
  comments?: string;
  location?: string;
  last_purchase_date: string;
  gander: Gender;
  age?: number;
}
