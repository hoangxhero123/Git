import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'tables', pathMatch: 'full' },
    { path: 'login', loadChildren: './auth/auth.module#AuthModule'},
    { path: 'tables', loadChildren: './table/table.module#TableModule'},
    { path: 'order', loadChildren: './order/order.module#OrderModule'},
    // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }