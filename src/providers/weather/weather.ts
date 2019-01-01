import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  apikey = '5c23680e1aa309933faa2af5bbae3375';
  url;
  iconurl = 'http://openweathermap.org/img/w/'

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?APPID=' + this.apikey;
  }

  getWeather(city:string, country:string, id?:string){
    if(id == null){
      return this.http.get(`${this.url}&q=${city},${country}`);
        
    }else{
      return this.http.get(`${this.url}&id=${id}`);
        
    }
  }

}
