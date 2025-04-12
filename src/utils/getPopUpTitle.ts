import { GoalKey } from "../types/GoalKey";
import { PopUpTitle } from "../types/PopUpTitle";

export const getPopUpTitle = (value: GoalKey) => {
  if (value === GoalKey.GOALS) {
    return PopUpTitle.guidance;
  }

  if (value === GoalKey.GROWTH) {
    return PopUpTitle.consistency;
  }

  if (value === GoalKey.CONTENT) {
    return PopUpTitle.selfImprovement;
  }

  if (value === GoalKey.CHALLENGES) {
    return PopUpTitle.changingLoveLife;
  }
};
