import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaffRegisterPage } from '../staff-register/staff-register';

/**
 * Generated class for the StaffManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-staff-management',
  templateUrl: 'staff-management.html',
})
export class StaffManagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffManagementPage');
  }
  staffRegister(){
    this.navCtrl.push( StaffRegisterPage);
  }

}
