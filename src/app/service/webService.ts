import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WebSeviceLocation{
  constructor(
    private httpClient: HttpClient
  ){  }

  getWeather(location){
    return this.httpClient.get('http://api.weatherstack.com/current?access_key=<app_key>&query='+
    location)
  }
}
