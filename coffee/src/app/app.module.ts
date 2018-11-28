import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderModule } from './order/order.module';
import { TableModule } from './table/table.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';

import { FrameComponent } from './shared/frame/frame.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [FrameComponent]
})
export class AppModule { }
