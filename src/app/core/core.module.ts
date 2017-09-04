import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './navigation-error/navigation-error.component';

import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        ErrorPageComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ]
})
export class CoreModule {}
