import { Component } from '@angular/core';

import { FilmsPage } from '../films/film';
import { StarshipPage } from '../starships/starship';
import { VehiclePage } from '../vehicles/vehicle';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FilmsPage;
  tab2Root = StarshipPage;
  tab3Root = VehiclePage;

  constructor() {

  }
}
