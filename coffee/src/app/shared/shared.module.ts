import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FrameComponent } from './frame/frame.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HeaderComponent,
        FrameComponent,
        PageNotFoundComponent
    ],
    declarations: [
        HeaderComponent,
        FrameComponent,
        PageNotFoundComponent
    ],
    providers: [],
})
export class SharedModule { }
