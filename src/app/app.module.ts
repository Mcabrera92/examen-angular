import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PantallaExamenComponent} from './modules/pantalla-examen/pantalla-examen.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
