import { CommonDataControl } from '../tools/common-data-control';

export interface IBaseModel {
  id: string;
}

export abstract class BaseModel
  extends CommonDataControl
  implements IBaseModel
{
  id = '';
}
