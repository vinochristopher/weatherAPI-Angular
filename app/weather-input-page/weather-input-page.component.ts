import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WeatherAPIService } from '../service/weather-api.service';

@Component({
  selector: 'app-weather-input-page',
  templateUrl: './weather-input-page.component.html',
  styleUrls: ['./weather-input-page.component.css']
})

export class WeatherInputPageComponent implements OnInit {
  weatherForm: FormGroup;
  errorMessage: any;
  resCityName: any;
  resZipCode: any;
  resDate: any;

  constructor(private weatherService: WeatherAPIService, private fb: FormBuilder, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.weatherForm = this.fb.group({
      PostalCode: new FormControl("",
        [Validators.required, Validators.minLength(5), Validators.maxLength(5),
        Validators.pattern('[0-9]*$')])
    });
  }

  search() {
    this.weatherService.getJSONValue(this.weatherForm.get('PostalCode').value).subscribe(
      res => {
        this.resCityName = res.city;
        this.resZipCode = res.zipCode;
        this.resDate = res.detailsWeatherList;
      },error=>this.errorMessage=error);

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1100);
  }

  onSubmit(): void { }

  reset(){
    this.weatherForm.get('PostalCode').setValue("");
    this.resCityName="";
    this.resZipCode="";
    this.resDate="";
  }
}