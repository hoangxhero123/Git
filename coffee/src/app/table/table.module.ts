import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { TableStatusPipe } from './pipes/table-status.pipe';
import { SharedModule } from '../shared/shared.module';
import { TableRoutingModule } from './table.routing';

@NgModule({
    imports: [
        SharedModule, 
        TableRoutingModule
    ],
    exports: [
    ],
    declarations: [
        TableComponent,
        LayoutComponent,
        TableStatusPipe
    ],
    providers: [],
    entryComponents: [
    ]
})
export class TableModule { }
