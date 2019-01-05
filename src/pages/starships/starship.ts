import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-starships',
  templateUrl: 'starship.html'
})
export class StarshipPage {

  starships: any;
  prevPage: String;
  nextPage: String;

  constructor(public navCtrl: NavController, public swapiProvider: SwapiProvider) {
    this.getStarships();
  }

  getStarships(){
    this.swapiProvider.getStarships().then(
      data => {
        this.starships = data["results"];
        this.prevPage = data["previous"];
        this.nextPage = data["next"];
        console.log(this.starships);
      }
    );
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        
        this.swapiProvider.getNextPage(this.nextPage).then(
          data => {
            this.starships = this.starships.concat(data["results"]);
            this.prevPage = data["previous"];
            this.nextPage = data["next"];
            console.log(this.starships);
          }
        );

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

}
