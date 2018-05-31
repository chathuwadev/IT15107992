import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{DatabaseProvider}from'../../providers/db/db';
import{DiscusionPage} from'../discusion/discusion';
import { ViewCourseAllocationPage } from '../view-course-allocation/view-course-allocation';
import { FeeStructurePage } from '../fee-structure/fee-structure';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public subjects:any;
  public sub:any;
  public sub1:any;
  public sub2:any;
  public name:any;
  constructor(public navCtrl: NavController,private db:DatabaseProvider) {
   // this. viewSubjects();
   this.name=localStorage.getItem('name')

  }

  viewSubjects(){

    this.db.getDocuments('course').then(data=>{

      this.subjects=data;
       console.log(data);
      this.subjects.forEach(element => {

        this.sub=element.subject;
        this.sub.forEach(element=>{
          this.sub1=element.sname
          this.sub2=element.content
        })
      });

//       let result= data.filter(element=>{
//         return (element.role=='primary')
//       });

//  console.log(result);
//       result.foreach(element=>{
//         this.sub=element.subject;
//         this.sub.forEach(element=>{
//                this.sub1=element.content
//             })
//       })
    })
  }

  discution(){
    this.navCtrl.push(DiscusionPage);
  }

  allocation(){
    this.navCtrl.push(ViewCourseAllocationPage);
  }
  feeStructure(){

    this.navCtrl.push( FeeStructurePage);
  }

}
