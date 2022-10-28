import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { NombresComponent } from './nombres/nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    NombresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
