import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
    imports: [
        SharedModule,
        AuthRoutingModule
    ],
    exports: [
        LoginComponent
    ],
    declarations: [
        LoginComponent
    ],
    providers: [],
})
export class AuthModule { }
