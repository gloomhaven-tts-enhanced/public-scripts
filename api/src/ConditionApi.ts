import { callApi } from "ApiUtil";
import { Condition } from "./@types/condition";

/** Specifies the type required to register a condition. */
type ConditionRegister = WithOptionalFields<Condition, "max">;

/**
 * Registers a condition.
 *
 * @param conditionName The name of the condition.
 * @param condition The information about the condition.
 */
export const registerCondition = (conditionName: string, condition: ConditionRegister) => {
  callApi("registerCondition", { conditionName: conditionName, condition: condition });
};

/**
 * Registers a class tracker.
 *
 * @param className The name of the class.
 * @param tracker The information about the class tracker.
 */
export const registerTracker = (className: string, tracker: ConditionRegister) => {
  callApi("registerTracker", { className: className, tracker: tracker });
};

/**
 * Returns a list of all registered condition.
 * Though technically class trackers are also conditions, those are exluded here.
 */
export const getConditions = (): Condition[] => {
  return callApi("getConditions");
};

/**
 * Returns a list of all registered class trackers.
 */
export const getClassTrackers = (): Condition[] => {
  return callApi("getClassTrackers");
};
