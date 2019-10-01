import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherInputPageComponent } from './weather-input-page/weather-input-page.component';

const routes: Routes = [
{path:'**',component:WeatherInputPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
