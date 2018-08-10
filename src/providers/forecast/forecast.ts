import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ForecastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForecastProvider {
  [x: string]: any;

  constructor(public http: HttpClient) {




    
    console.log('Hello ForecastProvider Provider');
  }
  getForecust(cityname){

  
    let apikey = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityname + ',' +'southafrica&units=metric&APPID=7fabf2d1ab43bc74376c02dfef03173d' ;
    
    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   });
  }



}
