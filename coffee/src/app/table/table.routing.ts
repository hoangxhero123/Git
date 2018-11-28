import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../core/services/auth.guard.service';

const routes: Routes = [
    {path: '', component: LayoutComponent, canActivate: [AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class TableRoutingModule { }