import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from './../../providers/weather/weather';
import { Storage } from '@ionic/storage';
 
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
    private weatherProvider: WeatherProvider,
    private storage: Storage) {
      
  }

  ionViewWillEnter(){

    this.storage.get('location').then((data) => {
      if(data != null){
        console.log(data);
        this.location = JSON.parse(data);
      } else {
        this.location = {
          city: 'Tokyo',
          country: 'JP'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.country)
      .subscribe(data => {
        // console.log(`${data.city.name} ${data.city.country}`);
        // console.log(`${data.list[0].main.temp}`);
        // console.log(`${data.list[0].weather[0].main}`);
        // console.log(`${data.list[0].weather[0].description}`);
        // console.log(`${data.list[0].weather[0].icon}`);
        // console.log(data);
        this.weather = data;
        this.weather.icon_url = `${this.weatherProvider.iconurl}${this.weather.list[0].weather[0].icon}.png`;
      });

    });

  }


}
