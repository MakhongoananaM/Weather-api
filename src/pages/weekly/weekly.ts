import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ForecastProvider } from '../../providers/forecast/forecast';
//import { objWeather} from '../../app/objWeather';
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
forecast(cityname)
    {
      this.wether.getForecast(cityname).then((data:any) =>{
      // this.arr.getForcast(this.name).then((infor: any) => {

         this.temperature = data.list[0].main.temp_max;
         this.temperature1 = data.list[8].main.temp_max;
         this.temperature2 = data.list[16].main.temp_max;
         this.temperature3 = data.list[24].main.temp_max;
         this.temperature4 = data.list[32].main.temp_max;
   
   
         this.temperature = (this.temperature - 273.15).toFixed() + "°c"
         this.temperature1 = (this.temperature1 - 273.15).toFixed() + "°c"
         this.temperature2 = (this.temperature2 - 273.15).toFixed() + "°c"
         this.temperature3 = (this.temperature3 - 273.15).toFixed() + "°c"
         this.temperature4 = (this.temperature4 - 273.15).toFixed() + "°c"
         console.log(data);
       
   
   
       });
      }}