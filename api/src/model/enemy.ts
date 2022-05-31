import { URI } from "./base";
import { SpawnableElement } from "./spawn";

/**
 * Information about an enemy ability deck.
 */
export interface EnemyAbilityDeck {
  /** The list of abilities in this deck. */
  abilities: EnemyAbility[];
}

/**
 * Information about an enemy ability.
 */
export interface EnemyAbility {
  /** The URI to the image of the card for this ability. */
  image?: URI;

  /** Defines which components can be spawned by this ability. */
  spawn?: SpawnableElement[];
}

/**
 * Information about an enemy.
 */
export interface Enemy {
  /** The URL that represents an icon of the enemy. */
  icon?: URI;

  /** The name of the ability deck this enemy uses. */
  abilityDeck: string;
}

/**
 * Information about a boss.
 */
export interface BossEnemy {
  /** The URL that represents an icon of the enemy. */
  icon?: URI;

  /** Defines which components can be spawned by this boss. */
  spawn?: SpawnableElement[];
}
