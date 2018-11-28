import { Component, OnInit } from '@angular/core';
import { ITable } from '../../interfaces/ITable';
import { ITab } from '../../interfaces/ITab';
import { Router } from '@angular/router';
import { TableService } from '../../core/services/table.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  tables: ITable[] = [];
  currentTable: String = '';
  tabs: ITab[] = [
    { name: 'menu', icon: 'assets/coffee-beans.png' },
    { name: 'order', icon: 'assets/shopping-cart.png' },
    { name: 'profile', icon: 'assets/avatar.png' }
  ];

  constructor(private tableService: TableService, private router: Router) {

  }
  //thì bên đây phải subscribe để hứng từ cái Observable đó
  ngOnInit() {
    this.tableService.oTables.subscribe(data => { 
      this.tables = data;
    })
    this.tableService.getTables();
    // this.tables = this.tableService.tables;
  }

  clickTab(item: ITab): void {
    alert('dạ mẹ ' + item.name);
  }

  onTapTable(table: ITable) {
    if (table.id) {
      this.router.navigate(['order/' + table.id]);
    } else {
      alert('xàm');
    }
  }
}
