import { useGoalStack } from "../hooks/useGoalStack";
import GoalStackDisplay from "./GoalStackDisplay";

const GoalStackList = () => {
  const { goalStacks, loading, error } = useGoalStack();

  if (loading) return <div>Loading</div>;

  console.log(goalStacks);

  return (
    <div className="mt-5">
      <div className="text-2xl font-bold dark:text-white text-zinc-800">
        My Goal Stacks
      </div>

      {goalStacks.map((goalStack) => (
        <GoalStackDisplay data={goalStack} key={goalStack.id} />
      ))}
    </div>
  );
};

export default GoalStackList;
