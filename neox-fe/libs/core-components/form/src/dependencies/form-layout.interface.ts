export type ColSpanItem = `col-span-${number}` | `empty-${number}`;
export interface IFormLayout {
  girdCols?: number;
  gap?: number;
  colSpan?: ColSpanItem[][];
}
