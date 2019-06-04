import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpokeSharedModule } from 'spoke-shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpokeSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
