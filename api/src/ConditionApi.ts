/**
 * The `ConditionApi` is used to register new conditions that can be applied to figures.
 *
 * @module
 */
import { callApi } from "ApiUtil";
import { WithOptionalFields } from "./model/base";
import { Condition } from "./model/condition";

/** Specifies the type required to register a condition. */
export type ConditionRegister = WithOptionalFields<Condition, "max">;

/**
 * Registers a condition.
 *
 * @param conditionName The name of the condition.
 * @param condition The information about the condition.
 *
 * @category Registration
 */
export const registerCondition = (conditionName: string, condition: ConditionRegister) => {
  callApi("registerCondition", { conditionName: conditionName, condition: condition });
};

/**
 * Registers a class tracker.
 * Note: It's not required to call this API directly, as [[ClassApi.registerClass]] already takes care of this.
 *
 * @param className The name of the class.
 * @param tracker The information about the class tracker.
 *
 * @category Registration
 */
export const registerTracker = (className: string, tracker: ConditionRegister) => {
  callApi("registerTracker", { className: className, tracker: tracker });
};

/**
 * Returns a list of all registered condition.
 * Though technically class trackers are also conditions, those are exluded here.
 *
 * @category Get
 */
export const getConditions = (): Condition[] => {
  return callApi("getConditions");
};

/**
 * Returns a list of all registered class trackers.
 *
 * @category Get
 */
export const getClassTrackers = (): Condition[] => {
  return callApi("getClassTrackers");
};
