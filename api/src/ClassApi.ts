import { callApi } from "ApiUtil";
import {
  Ability,
  AbilityType,
  Class,
  EnhancementShape,
  ExtraType,
  HpProgression as HpProg,
  PerkType,
} from "./@types/class";
import { SpawnableElement } from "./@types/spawn";

export const HpProgression: Record<string, HpProg> = {
  Low: [6, 7, 8, 9, 10, 11, 12, 13, 14],
  Medium: [8, 9, 11, 12, 14, 15, 17, 18, 20],
  High: [10, 12, 14, 16, 18, 20, 22, 24, 26],
};

export { AbilityType, EnhancementShape, ExtraType, PerkType };

type ClassRegister = Class;

/**
 * Registers a class.
 */
export const registerClass = (className: string, classInfo: ClassRegister) => {
  callApi("registerClass", { className: className, classInfo: classInfo });
};

/**
 * Returns the information about the given registered class.
 * If it isn't registered, `nil` will be returned instead.
 *
 * @param className The name of the class.
 */
export const getClass = (className: string): Maybe<Class> => {
  return callApi("getClass", { className: className });
};

/**
 * Returns all registered classes.
 */
export const getClasses = (): Class[] => {
  return callApi("getClasses");
};

/**
 * Returns the information about the given ability for a registered class.
 * If the class isn't registered, or has no such ability, `nil` will be returned instead.
 * This method also does to try to do some typo correction.
 * E.g. if the ability is named "Warding Strength" and the given abilityName is "Warding Strengt", the correct ability
 * will be returned, but a warning message will be printed to the game tab.
 *
 * @param className The name of the class.
 * @param abilityName The name of the ability.
 */
export const getAbility = (className: string, abilityName: string): Maybe<Ability> => {
  return callApi("getAbility", { className: className, abilityName: abilityName });
};

/**
 * Returns all list of all registered elements that this class can spawn (e.g. traps or obstacles).
 * This is defined by the abilities that are registered for this class.
 *
 * @param className The name of the class.
 */
export const getSpawnableElements = (className: string): SpawnableElement[] => {
  return callApi("getSpawnableElements", { className: className });
};
