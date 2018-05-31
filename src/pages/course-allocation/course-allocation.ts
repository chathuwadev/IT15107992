import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';

/**
 * Generated class for the CourseAllocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-course-allocation',
  templateUrl: 'course-allocation.html',
})
export class CourseAllocationPage {

  public cname:any;
  public grade:any;
  public fee:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseAllocationPage');
  }


  Addcourse(){
    this.db.addDocument('course',{
      courseName:this.cname,
      grade:this.grade,
      fee:this.fee

    });
  }
}
