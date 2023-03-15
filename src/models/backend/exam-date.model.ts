export interface IExamYear {
  id: string;
  is_active: boolean;
}

export interface IExamDate {
  id: string;
  year_id: string;
  duration: string;
}
