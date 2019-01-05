import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-film',
  templateUrl: 'film.html'
})
export class FilmsPage {

  films: any;

  constructor(public navCtrl: NavController, public swapiProvider: SwapiProvider) {
    this.getFilms();
  }

  getFilms(){
    this.swapiProvider.getFilms().then(
      data => {
        this.films = data["results"];
        console.log(this.films);
      }
    );
  }

}
