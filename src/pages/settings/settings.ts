import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;
  country: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {

  }

  ionViewWillEnter(){

    this.storage.get('location').then((data) => {
      if(data != null){
        let location = JSON.parse(data);
        this.city = location.city;
        this.country = location.country;
      } else {
        this.city = "Berlin";
        this.country = "DE";
      }
    });

  }

  saveForm(){
    let location = {
      city: this.city,
      country: this.country
    }

    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }
  
}
