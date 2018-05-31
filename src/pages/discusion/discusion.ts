import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';

/**
 * Generated class for the DiscusionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-discusion',
  templateUrl: 'discusion.html',
})
export class DiscusionPage {
public qu:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
    this.loadQuestion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscusionPage');
  }

  loadQuestion(){

    this.db.getDocuments('question').then(data=>{
      this.qu=data;

    })

  }

}
