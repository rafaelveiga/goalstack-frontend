import { GoalStack } from "../services/GoalStack";
import groupBy from "lodash.groupby";

const GoalStackDisplay = (props: GoalStackProps) => {
  const groupedGoals = groupBy(props.data.goals, "goalType.id");

  return (
    <div className="mb-5 dark:text-white flex">
      <div className="mr-5">
        <h3 className="text-2xl">{props.data.goalStackTitle}</h3>
        <h5 className="dark:text-zinc-400">
          {props.data.goalStackDescription}
        </h5>
      </div>
      <div className="flex-1">
        {Object.keys(groupedGoals).map((goalTypeKey) => (
          <div className="grid grid-cols-6 gap-2 mb-5">
            <div className="card py-2 px-2 mr-3 text-center font-bold text-blue-500">
              {groupedGoals[goalTypeKey][0].goalType.goalTypeDescription}
            </div>
            <div
              className={`col-span-5 grid gap-2 grid-cols-${groupedGoals[goalTypeKey].length}`}
            >
              {groupedGoals[goalTypeKey].map((goal) => (
                <div className="card flex-1 mr-2 text-center flex justify-center items-center">
                  {goal.goalTitle}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalStackDisplay;

interface GoalStackProps {
  data: GoalStack;
}
