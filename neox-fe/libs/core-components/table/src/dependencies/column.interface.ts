import { INumberFieldConfig } from '../fields/number/number-config.model';
import { ColumnTypeEnum } from './column-type.enum';

export type IFieldConfigTypes = INumberFieldConfig;

export interface ITableGeneratorColumn<FieldType = IFieldConfigTypes> {
  header: string;
  fieldName: string;
  dataType: string;
  columnType: ColumnTypeEnum;
  fieldConfig?: FieldType;
}
