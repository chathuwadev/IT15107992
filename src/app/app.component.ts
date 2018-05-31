import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{LoginPage}from'../pages/login/login';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  config = {
    apiKey: "AIzaSyBCoV2k19_u6bEZgOGsVd-3PUHLZg02cJY",
    authDomain: "school-631a4.firebaseapp.com",
    databaseURL: "https://school-631a4.firebaseio.com",
    projectId: "school-631a4",
    storageBucket: "school-631a4.appspot.com",
    messagingSenderId: "267232053540"
  };

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) { 
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(this.config);
  }


  
}

