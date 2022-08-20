import { useEffect, useState } from "react";
import GoalStackService, { GoalStack } from "../services/GoalStack";

export function useGoalStack() {
  const [goalStacks, setGoalStacks] = useState<GoalStack[] | never[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    GoalStackService.getGoalStacks()
      .then((response) => {
        setGoalStacks(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { goalStacks, loading, error };
}
