import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicle.html'
})
export class VehiclePage {

  vehicles: any;
  prevPage: String;
  nextPage: String;

  constructor(public navCtrl: NavController, public swapiProvider: SwapiProvider) {
    this.getVehicles();
  }

  getVehicles(){
    this.swapiProvider.getVehicles().then(
      data => {
        this.vehicles = data["results"];
        this.prevPage = data["previous"];
        this.nextPage = data["next"];
        console.log(this.vehicles);
      }
    );
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        
        this.swapiProvider.getNextPage(this.nextPage).then(
          data => {
            this.vehicles = this.vehicles.concat(data["results"]);
            this.prevPage = data["previous"];
            this.nextPage = data["next"];
            console.log(this.vehicles);
          }
        );

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
}
