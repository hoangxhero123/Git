import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { AuthGuard } from '../core/services/auth.guard.service';

const routes: Routes = [
    { path: ':tableId', component: OrderComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class OrderRoutingModule { }