import { Condition } from "ConditionApi";

type HpProgression = [int, int, int, int, int, int, int, int, int];

export const HpProgression = {
  Low: [1, 2],
  Medium: [1, 2],
  High: [1, 2],
};

/**
 * Contains all information about a character class.
 */
export interface Class {
  isStartingClass: boolean;
  /** The GUID of the infinite box that contains the tuck boxes for this class.
   * If the registration script is on the infinite box itself, this could be written as `self.getGUID()` to be
   * independent of the actual GUID. */
  boxGUID: GUID;
  /**
   * Lists the number of maximum HP per level.
   * You can use the constants within `ClassApi.HpProgression` for the default behaviour (`Low`, `Medium`, `High`) or
   * provide a list of 9 values for custom HP progression.
   */
  hp: HpProgression;
  /**
   * Information about the tracker image used by this class.
   * Since class trackers are basically conditions, the same attributes can be used.
   */
  tracker: Condition;
  /**
   * Lists the information about each perk.
   * This is relevant to automatically set the correct attack modifier deck.
   */
  perks: Perk[];
  /**
   * Lists the information about each ability.
   */
  abilities: Ability[];
  /**
   * Lists extra material that is part of the character tuck box (e.g. Diviner's rifts).
   */
  extra?: Extra[];
}

/**
 * Contains the information for a perk.
 * If a perk doesn't add or remove attack modifiers or doesn't provide immunities, it still has to be added to the list
 * of perks with an empty entry.
 */
interface Perk {
  /**
   * Lists the names of the attack modifier cards that will be added by this perk.
   * Has to be the full name of the related attack modifier card (except the word "Attack Modifier").
   */
  add?: string[];
  /**
   * Lists the names of the attack modifier cards that will be removed by this perk.
   * Has to be the full name of the related attack modifier card (except the word "Attack Modifier").
   */
  remove?: string[];
  /**
   * Determines whether this perk grants immunity to negative effects.
   */
  ignore?: PerkIgnore;
}

const enum PerkIgnore {
  /** Negative item effects are ignored. */
  Item = "I",
  /** Negative scenario effects are ignored. */
  Scenario = "S",
}

interface Extra {
  /**
   * Name of the extra component.
   * Has to be equal to the component within the character tuck box.
   */
  name: string;
  /**
   * Type of the extra component.
   * Determines where the component will be placed on unpacking the character box.
   */
  type: ExtraType;
  /**
   * Only relevant if the `type` is `Figurine`.
   * This field then describes the HP progression for the figurine (e.g. Beast Tyrant's Bear).
   */
  hp?: HpProgression;
}

const enum ExtraType {
  /** The extra component is another mini figure (e.g. like Beast Tyrant's bear). */
  Figurine = "Figurine",
  /** A card. */
  Card = "Card",
  /** A rules reference card. */
  Rules = "Rules",
  /** A token or token container. */
  Token = "Token",
  /** A deck of cards. */
  Deck = "Deck",
}

interface Ability {
  /** The level at which this card is unlocked. */
  level: int | "X";
  /**
   * Lists the enhancement spots for this ability.
   * This is required for enhancements to work on packing and unpacking a character.
   */
  enhancements?: Enhancement[];
  /**
   * Describes the elements that can be spawned when this ability is used.
   * This is used by the context menu to quickly spawn those components (e.g. Cragheart's Boulders).\
   */
  spawn?: SpawnableElement[];
}

interface Enhancement {
  /** The (X, Z) position of the enhancement spot on the card (the Y-coordinate is fixed). */
  position: [number, number];
  /** Determines whether this enhancement spot is on the top half or bottom half of the ability card. */
  side: "T" | "B";
  /**
   * Determines the type of the ability that the enhancement spot is on.
   * Required for the enhancement calculator.
   * Use `ClassApi.AbilityType` to easily access those values.
   */
  type: EnhancementType;
  /**
   * The shape of the enhancement spot following the new Frosthaven format for enhancements.
   * Currently, not used, but will be in the future used by the enhancement calculator.
   */
  shape?: EnhancementShape;
  /**
   * Determines whether this enhancement spot is for the main part of the ability or for the attached part of the
   * ability.
   * Required for the enhancement calculator.
   *
   * @defaultValue true
   */
  main?: boolean;
  /**
   * Determines whether this is an enhancement spot for an ability that has more than one enhancement spots.
   * Required for the enhancement calculator.
   *
   * @defaultValue false
   */
  multi?: boolean;
  /**
   * Used for area of effect abilities. Determines how many hexes the ability has by default.
   * Required for the enhancement calculator.
   */
  baseHex?: int;
  /**
   * Used for area of effect abilities. Lists all other enhancement spots of this ability that are also area enhancement
   * spots.
   * Required for the enhancement calculator.
   */
  otherHex?: int[];
}

const enum EnhancementType {
  /** A move ability. */
  Move = "move",
  /** An attack ability. */
  Attack = "attack",
  /** A range modifier. */
  Range = "range",
  /** A shield ability. */
  Shield = "shield",
  /** A push modifier. */
  Push = "push",
  /** A pull modifier. */
  Pull = "pull",
  /** A pierce modifier. */
  Pierce = "pierce",
  /** A retaliate ability. */
  Retaliate = "retaliate",
  /** A heal ability. */
  Heal = "heal",
  /** A target modifier. */
  Target = "target",
  /** A teleport ability. */
  Teleport = "teleport",
  /** The move value of a summon. */
  SummonMove = "summMove",
  /** The attack value of a summon. */
  SummonAttack = "summAttack",
  /** The range value of a summon. */
  SummonRange = "summRange",
  /** The HP value of a summon. */
  SummonHp = "summHp",
  /** An ability that applies a condition to an enemy. */
  EnemyCondition = "enemyCondition",
  /** An ability that applies a condition to an ally. */
  AllyCondition = "allyCondition",
  /** An area of effect ability. */
  Area = "hex",
}

const enum EnhancementShape {
  Square = "square",
  Circle = "circle",
  Diamond = "diamond",
  DimamonPlus = "diamondPlus",
  Area = "hex",
}

interface SpawnableElement {}

type ClassRegister = Class;

/**
 * Registers a class.
 */
export const registerClass = (className: string, classInfo: ClassRegister) => {};

/**
 * Returns the information about the given registered class.
 * If it isn't registered, `nil` will be returned instead.
 *
 * @param className The name of the class.
 */
export const getClass = (className: string): Maybe<Class> => {
  return undefined;
};

/**
 * Returns all registered classes.
 */
export const getClasses = (): Class[] => {
  return [];
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
  return undefined;
};

/**
 * Returns all list of all registered elements that this class can spawn (e.g. traps or obstacles).
 * This is defined by the abilities that are registered for this class.
 *
 * @param className The name of the class.
 */
export const getSpawnableElements = (className: string): SpawnableElement[] => {
  return [];
};
