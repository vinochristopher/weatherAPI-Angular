import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInputPageComponent } from './weather-input-page/weather-input-page.component';
import { WeatherAPIService } from './service/weather-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    WeatherInputPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule, NgxSpinnerModule
  ],
  providers: [WeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }