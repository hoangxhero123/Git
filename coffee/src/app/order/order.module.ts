import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { FoodComponent } from './food/food.component';
import { FoodFilterComponent } from './food-filter/food-filter.component';
import { SharedModule } from '../shared/shared.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { TableRoutingModule } from '../table/table.routing';

@NgModule({
    imports: [
        SharedModule,
        TableRoutingModule
    ],
    exports: [
    ],
    declarations: [
        OrderComponent,
        FoodComponent,
        FoodFilterComponent,
        OrderSummaryComponent,
    ],
    providers: [],
})
export class OrderModule { }
