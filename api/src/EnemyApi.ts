/**
 * The `EnemyApi` is used to register new enemies and get information about registered enemies.
 *
 * @module
 */
import { callApi } from "ApiUtil";
import { BossEnemy, Enemy, EnemyAbilityDeck } from "./model/enemy";
import { SpawnableElement } from "./model/spawn";

/**
 * Registers a new ability deck that can be used by enemies.
 *
 * @param name The name of the ability deck.
 * @param abilities The information about the ability deck.
 *
 * @category Registration
 */
export const registerEnemyAbilityDeck = (name: string, abilities: EnemyAbilityDeck) => {
  callApi("registerEnemyAbilityDeck", { name: name, abilities: abilities });
};

/**
 * Registers a new enemy. Requires that the ability deck that this enemy uses is already registered.
 *
 * @param name The name of the enemy.
 * @param enemyInfo The information about the enemy.
 *
 * @category Registration
 */
export const registerEnemy = (name: string, enemyInfo: Enemy) => {
  callApi("registerEnemy", { name: name, enemyInfo: enemyInfo });
};

/**
 * Registers a new boss enemy.
 *
 * @param name The name of the boss.
 * @param bossInfo The information about the boss enemy.
 *
 * @category Registration
 */
export const registerBossEnemy = (name: string, bossInfo: BossEnemy) => {
  callApi("registerBossEnemy", { name: name, bossInfo: bossInfo });
};

/**
 * Returns all list of all registered elements that this class can spawn (e.g. traps, other enemies or obstacles).
 * This is defined by the abilities that are registered for the enemies ability deck.
 *
 * @param enemyName Name of the enemy (regular or boss enemy).
 *
 * @category Get
 */
export const getSpawnableElements = (enemyName: string): SpawnableElement[] => {
  return callApi("getSpawnableElements", { enemyName: enemyName });
};
