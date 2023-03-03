export interface IGoal {
  id: string;
  body: string;
  dates: string;
  title: string;
  status: number;
}

export interface IGoalGroup {
  id: string;
  name: string;
  total_count: number;
  status_count: number;
  goals: IGoal[];
}

export enum GoalStatus {
  NOT_STARTED = 1,
  POSTPONED = 2,
  IN_PROCESS = 3,
  CANCELED = 4,
  DONE = 5,
}
