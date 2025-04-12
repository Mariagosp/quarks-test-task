import { Goal } from "../types/Goal";
import { GoalKey } from "../types/GoalKey";

export const goals: Goal[] = [
  { label: "Setting goals", key: GoalKey.GOALS },
  { label: "Adapting growth areas", key: GoalKey.GROWTH },
  { label: "Picking content", key: GoalKey.CONTENT },
  { label: "Prioritizing challenges", key: GoalKey.CHALLENGES },
];