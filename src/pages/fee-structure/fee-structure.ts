import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';

/**
 * Generated class for the FeeStructurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-fee-structure',
  templateUrl: 'fee-structure.html',
})
export class FeeStructurePage {
  public grade:any;
  public course:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
    this.grade=localStorage.getItem('grade');
    this.feeStructure();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeeStructurePage');
  }

  feeStructure(){

    this.db.getDocuments('course').then(data=>{
      
            console.log(data);
            let result=data.filter(element=>{
              return(element.grade==this.grade)
            })
      
            this.course=result;
            console.log(this.course);
            });
  }

  
}
