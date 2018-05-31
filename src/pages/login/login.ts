import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';
import{RegisterPage}from'../register/register';
import{HomePage}from'../home/home';
import{TeacherHomePage}from'../teacher-home/teacher-home';
import { AdminPage } from '../admin/admin';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public data1:any;
  public usernameField:any;
  public passwordField:any;
  public grade:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage(){

    this.db.getDocuments('user').then(data=>{
      console.log(data);
      
      let result=data.filter(element=>{

      return (element.userid==this.usernameField && element.password==this.passwordField);
      });

      let element=result.pop();
      if(element.role=="Student"){
        this.navCtrl.push(HomePage);
        localStorage.setItem('grade',element.grade );
        localStorage.setItem('name',element.name );


      }
      else if(element.role=="Teacher"){
        this.navCtrl.push(TeacherHomePage);

      }
      else if(element.role=="Admin"){
        this.navCtrl.push(AdminPage);

      }
     

    });
      

  }

  registerpage(){

    //this.navCtrl.push(RegisterPage);
  }

}
