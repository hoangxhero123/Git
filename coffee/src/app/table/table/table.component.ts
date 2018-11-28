import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITable } from '../../interfaces/ITable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() table: ITable;
  @Output() inTable: EventEmitter<ITable> = new EventEmitter();

  constructor() {

  }

  tapOnTable(table: ITable) {
    this.inTable.emit(table);
  }
}
