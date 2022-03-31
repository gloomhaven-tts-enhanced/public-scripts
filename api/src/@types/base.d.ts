type int = number;
type nil = undefined;
type URI = string;
type GUID = string;

/** Type alias that takes all fields from the given type and makes the given keys optional. */
type WithOptionalFields<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type Maybe<T> = T | nil;
