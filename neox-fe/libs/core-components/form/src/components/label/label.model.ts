export interface ILabel {
  id?: string;
  showLabel?: boolean;
  required?: boolean;
  name: string;
}

export class Label implements ILabel {
  id = '';
  showLabel = true;
  required = false;
  name = '';
  constructor(config?: Partial<ILabel>) {
    Object.assign(this, config);
  }
}
