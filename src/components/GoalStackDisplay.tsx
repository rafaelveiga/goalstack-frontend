import { GoalStack } from "../services/GoalStack";

const GoalStackDisplay = (props: GoalStackProps) => (
  <div className="text-white">{props.data.goalStackTitle}</div>
);

export default GoalStackDisplay;

interface GoalStackProps {
  data: GoalStack;
}
