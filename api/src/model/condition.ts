import { int, URI } from "./base";

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
