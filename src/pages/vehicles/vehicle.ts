import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicle.html'
})
export class VehiclePage {

  vehicles: any;

  constructor(public navCtrl: NavController, public swapiProvider: SwapiProvider) {

  }

  getFilms(){
    this.swapiProvider.getFilms().then(
      data => {
        this.vehicles = data["results"];
        console.log(this.vehicles);
      }
    );
  }
}
