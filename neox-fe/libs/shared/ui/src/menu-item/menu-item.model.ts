import { generateRandomString } from '@team-link/utils';

export interface IMenuItem {
  id: string;
  translateString: string;
  route?: string;
  //icon?: any;
  child?: IMenuItem[];
  isVisible?: boolean;
  isCollapsed?: boolean;
}
export class MenuItem implements IMenuItem {
  id = generateRandomString();
  isCollapsed = false;
  child: IMenuItem[] = [];

  constructor(
    public translateString: string,
    public isVisible: boolean,
    public route: string,
  ) {}
}
