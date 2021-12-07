import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent // Components, Pipes and Directives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//service
  bootstrap: [AppComponent]
})
export class AppModule { }
