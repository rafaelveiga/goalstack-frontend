import axios, { AxiosResponse } from "axios";

class GoalStackService {
  getGoalStacks(): Promise<AxiosResponse<GoalStack[]>> {
    return axios.get<GoalStack[]>("http://localhost:8080/goal-stack");
  }
}

export interface GoalStack {
  id: number;
  goalStackTitle: string;
  goalStackDescription: string;
  goals: Goal[];
}

export interface Goal {
  id: number;
  goalTitle: string;
  goalType: GoalType;
}

export interface GoalType {
  id: number;
  goalTypeDescription: string;
}

export default new GoalStackService();
