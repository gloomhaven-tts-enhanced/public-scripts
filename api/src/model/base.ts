export type int = number;
export type nil = undefined;
export type URI = string;
export type GUID = string;

/** Type alias that takes all fields from the given type and makes the given keys optional. */
export type WithOptionalFields<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type Maybe<T> = T | nil;
