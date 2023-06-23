import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponents } from './modules/module-a/view-components';
import { ViewHome } from './modules/module-a/view-home';
import { ViewForm } from './modules/module-b/view-form';

@NgModule({
    declarations: [AppComponent, ViewComponents, ViewHome, ViewForm],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
