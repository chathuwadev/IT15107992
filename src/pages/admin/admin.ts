import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamManagementPage } from '../exam-management/exam-management';
import { StaffManagementPage } from '../staff-management/staff-management';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  examManagement(){
    
        this.navCtrl.push(ExamManagementPage);
      }

      staffManagement(){
        this.navCtrl.push(StaffManagementPage);
      }

      studentRegistre(){
        this.navCtrl.push(RegisterPage);
      }

}
