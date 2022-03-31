type int = number;
type nil = undefined;
type URI = string;
type GUID = string;

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type Maybe<T> = T | nil;
