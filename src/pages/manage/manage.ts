import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeeklyPage } from '../weekly/weekly';
import { objWeather } from '../../app/objWeather';
import weatherArr from '../../app/arryWeather'



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
  //private readonly newProperty = this.temperature;
  temperature: string;

  arr(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  temp1 ;
  wind;
  humidity;
  place;
  name;
 
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
 
 
  }

