import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeeklyPage } from '../weekly/weekly';
import { objWeather } from '../../app/objWeather';
import weatherArr from '../../app/arryWeather';



/**
 * Generated class for the ManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})
export class ManagePage {
  wether: any;
  private readonly newProperty = this.temperature;

  arr(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  temp1: any;
  wind: any;
  humidity: any;
  place: any;
  temperature: string;
  temperature1: any;
  temperature2: any;
  temperature3: any;
  temperature4: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePage');
  }
  City(){
    this.navCtrl.push(WeeklyPage)
  }

  search(cityname){

    this.wether.getMessages(cityname).then((data:any) =>{
 
      console.log(data);
      console.log(this.arr);
 
      this.temp1 =data.main.temp ;
      this.wind = data.wind.speed;
      this.humidity = data.main.humidity ;
      this.place = data.name;
      this.temperature =(this.temp1-273.15).toFixed(0);
 
      let obj= new objWeather(this.place,this.temperature,this.wind,this.humidity);
 
      weatherArr.push(obj);
 
    })
 
  }
 
  forecast(cityname)
  {
    this.wether.getForecast(cityname).then((data:any) =>{
   //  this.arr.getForcast(this.name).then((infor: any) => {
 
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
 
  }
}
