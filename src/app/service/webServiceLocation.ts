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
    return this.httpClient.get('http://api.weatherstack.com/current?access_key=e7260b5db4a6a71d6d8e5ac08373830e&query='+
    location)
  }
}
