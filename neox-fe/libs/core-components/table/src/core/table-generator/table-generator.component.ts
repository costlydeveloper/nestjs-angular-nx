import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ColumnTypeEnum, ITableGeneratorColumn } from '../../dependencies';
import { DateComponent } from '../../fields/date/date.component';
import { NumberComponent } from '../../fields/number/number.component';
import { StringComponent } from '../../fields/string/string.component';

@Component({
  selector: 'table-generator',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    StringComponent,
    DateComponent,
    NumberComponent,
  ],
  templateUrl: './table-generator.component.html',
  styleUrl: './table-generator.component.scss',
})
export class TableGeneratorComponent<T> {
  tableData = input.required<T[]>();
  columnArray = input.required<ITableGeneratorColumn[]>();

  columnTypeEnum = ColumnTypeEnum;
}
