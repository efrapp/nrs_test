import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

  swapiUrl = 'https://swapi.co/api';

  constructor(public http: HttpClient) {
    console.log('Hello SwapiProvider Provider');
  }

  getFilms(){
    return new Promise(resolve => { 
      this.http.get(this.swapiUrl + '/films/').subscribe(data => {
        resolve(data),
        err => {
          console.log(err);
        }
      });
    });
  }

  getStarships(){
    return new Promise(resolve => { 
      this.http.get(this.swapiUrl + '/starships/').subscribe(data => {
        resolve(data),
        err => {
          console.log(err);
        }
      });
    });
  }

  getVehicles(){
    return new Promise(resolve => { 
      this.http.get(this.swapiUrl + '/vehicles/').subscribe(data => {
        resolve(data),
        err => {
          console.log(err);
        }
      });
    });
  }

  getNextPage(page){
    return new Promise(resolve => { 
      this.http.get(page).subscribe(data => {
        resolve(data),
        err => {
          console.log(err);
        }
      });
    });
  }

}
