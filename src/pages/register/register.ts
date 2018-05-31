import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';
import { AlertController } from 'ionic-angular';
import{LoginPage}from'../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public name:any;
  public studentid:any;
  public password:any;
  public password2:any;
  public role:any;
  public grade:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Successfull..',
     
      buttons: ['OK']
    });
    alert.present();
  }


 adddata(){

    this.db.addDocument('user',{
      name:this.name,
      userid:this.studentid,
      password:this.password,
      role:this.role,
      grade:this.grade

    });

  }

  showAlert2() {
    let alert = this.alertCtrl.create({
      title: 'Successfull',
     
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert1() {
    let alert = this.alertCtrl.create({
      title: 'Please Fill Data!',
     
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirm password not match',
     
      buttons: ['OK']
    });
    alert.present();
  }
  

  

  showConfirm(){

    let confirm1 = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want create an Account?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {

            if(this.studentid=='' ){
              this.showAlert1();
            }
            else if(this.name==''){
              this.showAlert1();
            }
            else if(this.password==''){
              this.showAlert1();
            }
            else if(this.password2==''){
              this.showAlert1();
            }
            else if(this.password!=this.password2){
                this.presentAlert();
                this.password2='';
            }
            else if(this.role==''){
              this.showAlert1();
            }
            else if(this.grade==''){
              this.showAlert1();
            }
            else{ 
              console.log('Agree clicked');
              this.adddata();
             //this. showAlert2();
              this.navCtrl.push(LoginPage);
      
            }
            
          }
        }
      ]
    });
    confirm1.present();

  }

  clear(){
    this.name=''
  }

}
