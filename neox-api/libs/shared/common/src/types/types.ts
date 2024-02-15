export type Nullable<T> = T | null;

export interface IClassType<T = any> {
	new (...args: never[]): T;
}
