
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebSeviceLocation } from '../service/webService';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {
  public weatherForm: FormGroup;
  public weatherData;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WebSeviceLocation
  ) { }

  ngOnInit(): void {
    this.weatherForm = this.formBuilder.group({
      location: ['']
    })
  }

  onSubmit(formValues){
    this.weatherService.getWeather(formValues.location)
    .subscribe(data => {
      this.weatherData = data;
      this.weatherData.current.temp_f = data.current.temperature * 2 +30;
      console.log(this.weatherData)
      ;
    });
  }

}
