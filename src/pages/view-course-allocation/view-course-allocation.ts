import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';

/**
 * Generated class for the ViewCourseAllocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-view-course-allocation',
  templateUrl: 'view-course-allocation.html',
})
export class ViewCourseAllocationPage {

  public grade:any
  public course:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
    this.grade=localStorage.getItem('grade');
    this.viewAllocateCourse();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCourseAllocationPage');
  }

  viewAllocateCourse(){
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
