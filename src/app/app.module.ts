import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WebSeviceLocation } from './service/webServiceLocation';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WebSeviceLocation],
  bootstrap: [AppComponent]
})
export class AppModule { }
