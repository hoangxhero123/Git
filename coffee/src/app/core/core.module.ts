import { NgModule } from '@angular/core';
import { TableService } from './services/table.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodService } from './services/food.service';
import { FoodFilterService } from './services/food-filter.sevice';
import { AuthService } from './services/auth.service';
import { HeaderInterceptor } from './services/http.interceptor';
import { AuthGuard } from './services/auth.guard.service';
import { OrderService } from './services/order.service';

@NgModule({
    imports: [HttpClientModule], //đây, nhớ thêm bên module
    exports: [],
    declarations: [],
    providers: [
    ],
})
export class CoreModule { //khúc này là học thuộc, aQ bảo thế :p
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                TableService,
                FoodService,
                FoodFilterService,
                AuthService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HeaderInterceptor,
                    multi: true
                },
                AuthGuard,
                OrderService
            ]
        };
    }
}
