import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StarshipPage } from '../pages/starships/starship';
import { VehiclePage } from '../pages/vehicles/vehicle';
import { FilmsPage } from '../pages/films/film';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { SwapiProvider } from '../providers/swapi/swapi';

@NgModule({
  declarations: [
    MyApp,
    StarshipPage,
    VehiclePage,
    FilmsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StarshipPage,
    VehiclePage,
    FilmsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwapiProvider
  ]
})
export class AppModule {}
