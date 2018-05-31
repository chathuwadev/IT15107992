import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';

/**
 * Generated class for the StaffRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-staff-register',
  templateUrl: 'staff-register.html',
})
export class StaffRegisterPage {

  public name:any;
  public staffid:any;
  public password:any;
  public password2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffRegisterPage');
  }
 
  adddata(){

    this.db.addDocument('staff',{
      name:this.name,
      userid:this.staffid,
      password:this.password,
     
    });

  }
  clear(){
    this.name=''
  }

}
