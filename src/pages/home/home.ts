import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from './../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather:any;
  location:{
    city:string,
    country:string
  }

  constructor(public navCtrl: NavController,
    private weatherProvider: WeatherProvider) {
      
  }

  ionViewWillEnter(){
    this.location = {
      city: 'Berlin',
      country: 'DE'
    }

    this.weatherProvider.getWeather(this.location.city, this.location.country)
    .subscribe(data => {
      console.log(`${data.city.name} ${data.city.country}`);
      console.log(`${data.list[0].main.temp}`);
      console.log(`${data.list[0].weather[0].main}`);
      console.log(`${data.list[0].weather[0].description}`);
      console.log(`${data.list[0].weather[0].icon}`);

      console.log(data);

      this.weather = data;
      this.weather.icon_url = this.getIconUrl();


    });
  }
  
  getIconUrl(){
    return 'http://openweathermap.org/img/w/' + this.weather.list[0].weather[0].icon + '.png'
  }

}
