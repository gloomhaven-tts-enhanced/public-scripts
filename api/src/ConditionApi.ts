/**
 * A condition that can be applied to a figure.
 */
export interface Condition {
  /**
   * URI to the image that shows the condition.
   */
  image: URI;
  /**
   * Determines how often the condition can be stacked to a target.
   *
   * @defaultValue 1
   */
  max: int;
}

type ConditionRegister = Optional<Condition, "max">;

/**
 * Registers a condition.
 * @param conditionName The name of the condition.
 * @param condition The information about the condition.
 */
export const registerCondition = (conditionName: string, condition: ConditionRegister) => {};

/**
 * Registers a class tracker.
 * @param className The name of the class.
 * @param tracker The information about the class tracker.
 */
// TODO rename to registerClassTracker
export const registerTracker = (className: string, tracker: ConditionRegister) => {};

/**
 * Returns a list of all registered condition.
 * Though technically class trackers are also conditions, those are exluded here.
 */
export const getConditions = (): Condition[] => {
  return [];
};

/**
 * Returns a list of all registered class trackers.
 */
export const getClassTrackers = (): Condition[] => {
  return [];
};
