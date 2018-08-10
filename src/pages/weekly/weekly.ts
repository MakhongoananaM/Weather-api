import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ForecastProvider } from '../../providers/forecast/forecast';
import { objWeather} from '../../app/objWeather';
import { Geolocation } from '@ionic-native/geolocation';
import weatherArr from '../../app/arryWeather';
import { ManagePage } from '../manage/manage';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
 selector: 'page-weekly',
 templateUrl: 'weekly.html',
})
export class WeeklyPage {
  [x: string]: any;

 arr = weatherArr;  
 lat: any;
 lng: any;

  temp1  ;
  temperature;
  temperature1;
  temperature2;
  temperature3;
  temperature4;
  wind;
  humidity;
  place;
  name;
 

  ionViewDidLoad() {
    weatherArr.splice(0,1);
    console.log(weatherArr);
   
    this.geo.getCurrentPosition().then( pos => {
      this.lat= (pos.coords.latitude).toFixed(4);
      this.lng = (pos.coords.longitude).toFixed(4);
     this.getGeolocation(this.lat,this.lng);
     
    }).catch( err => console.log(err));

  }
  constructor(public navCtrl: NavController , private wether : ForecastProvider,public geolocation: Geolocation
  ) {

 }

 getGeolocation(a,b)
 {

  a=this.lat;
  b=this.lng;

     this.wether.getLocation(a,b).then((data:any) =>{

       console.log(data);
       this.place = data.name;
       this.temp1 =data.main.temp + "°C" ;
       this.wind = data.wind.speed;
       this.humidity = data.main.humidity ;
       this.temperature =(this.temp1-273.15).toFixed(0) + "°C";
       console.log(this.place)
     })
 }

 
 City1(){
  this.navCtrl.push(ManagePage)
}

Back(){
  this.navCtrl.push(HomePage)
}

}