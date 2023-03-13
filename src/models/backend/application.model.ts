export interface IProgramByMonth {
  id: string;
  program: string;
  january: number;
  february: number;
  march: number;
  april: number;
  may: number;
  june: number;
  july: number;
  august: number;
  september: number;
  october: number;
  november: number;
  december: number;
  total: number;
}

export interface IApplicationByStatus {
  total: number;
  pending: number;
  accept: number;
  reject: number;
}
export interface IApplicationByGender {
  total: number;
  female: number;
  male: number;
}
