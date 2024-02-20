export type Nullable<T> = T | null;

export type ClassType<T = any> = {
  new (...args: any[]): T;
};
