import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './item/items.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { InactiveComponent } from './event/inactive.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { GoogleMapsModule } from '@nativescript/google-maps/angular';
import { MenuSectionComponent } from './_components/menu/menusection.component';
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, GoogleMapsModule],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    HomeComponent,
    EventComponent,
    InactiveComponent,
    MenuSectionComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
