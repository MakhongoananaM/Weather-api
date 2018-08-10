import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForecastProvider } from '../../providers/forecast/forecast';
import { WeeklyPage } from '../weekly/weekly';
import { ManagePage } from '../manage/manage';
import { Geolocation } from '@ionic-native/geolocation'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eg ;
  p;
  searchQuery: string = '';
  items: string[];
  data:any;
  weather:any[];
  main;
  name;
  temp;
  icon;
  public open = false;
  constructor(public navCtrl: NavController, private provFore: ForecastProvider) {
   this.getWeather('Johannesburg');
  }

  getWeather(cityname) {
    this.provFore.getForecust(cityname)
    .then((data:any )=> {
      this.data = data;  
      this.weather = this.data.weather;
      console.log(this.data);

      this.eg =data.weather[0].id ;
      this.p =data.weather[0].description ;
      this.icon =data.weather[0].icon ;
      this.main =data.main.humidity;
      this.name =data.name;
      this.temp =Math.round(data.main.temp)+ '°C';
    });
  }


  

  initializeItems() {
    this.items =['Port Elizabeth','Pietermaritzburg','East London','Polokwane','Rustenburg','Welkom','Ladysmith','Potchefstroom','Richards Bay','Kimberley','Mahikeng','Klerksdorp','Paarl','Mthatha','Pinetown','Thohoyandou','Grahamstown','Borksburg',
    'Vereeniging','Sasolburg','Centurion','Upington','Oudtshoorn','Secunda','Uitenhage','Worcester','Krugersdorp','Benoni','Newcastle','Bellville','Khayelitsha','Graaff-Reinet','Ulundi','Tembisa','Bhisho','Johanneburg','Soweto'
    ];
    
  }
  Start(){
    this.navCtrl.push(WeeklyPage);
  }
  City(){
    this.navCtrl.push(ManagePage)
  }
  }
  // getItems(ev: any) {
  //   this.initializeItems();
  //   // set val to the value of the searchbar
  //   const val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  // getCityWeather = function(cityname){
  //   this.provFore.getForecust(cityname)
  //   .then((data:any )=> {
  //     this.data = data;  
  //     this.weather = this.data.weather;
  //     console.log(this.data);

  //     this.eg =data.weather[0].id ;
  //     this.p =data.weather[0].description ;
  //     this.icon =data.weather[0].icon ;
  //     this.main =data.main.humidity;
  //     this.name =data.name;
  //     this.temp =data.main.temp;
  //   });
  // }



