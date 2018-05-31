import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{Firebase}from'@ionic-native/firebase';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';


import{LoginPage}from'../pages/login/login';
import{RegisterPage}from'../pages/register/register';
import{CourseAllocationPage} from'../pages/course-allocation/course-allocation';
import{TeacherHomePage}from'../pages/teacher-home/teacher-home';
import{ViewCourseAllocationPage}from'../pages/view-course-allocation/view-course-allocation';
import{FeeStructurePage}from'../pages/fee-structure/fee-structure';
import{AdminPage}from'../pages/admin/admin';
import{ExamManagementPage}from'../pages/exam-management/exam-management';
import{StaffManagementPage}from '../pages/staff-management/staff-management';
import{StaffRegisterPage}from'../pages/staff-register/staff-register';

import{DiscusionPage}from'../pages/discusion/discusion';
import{AnswerPage}from'../pages/answer/answer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/db/db';

var config = {
  apiKey: "AIzaSyBCoV2k19_u6bEZgOGsVd-3PUHLZg02cJY",
  authDomain: "school-631a4.firebaseapp.com",
  databaseURL: "https://school-631a4.firebaseio.com",
  projectId: "school-631a4",
  storageBucket: "school-631a4.appspot.com",
  messagingSenderId: "267232053540"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DiscusionPage,
    AnswerPage,
    CourseAllocationPage,
    TeacherHomePage,
    ViewCourseAllocationPage,
    FeeStructurePage,
    AdminPage,
    ExamManagementPage,
    StaffManagementPage,
    StaffRegisterPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DiscusionPage,
    AnswerPage,
    CourseAllocationPage,
    TeacherHomePage,
    ViewCourseAllocationPage,
    FeeStructurePage,
    AdminPage,
    ExamManagementPage,
    StaffManagementPage,
    StaffRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Firebase,
    HttpClient,
    
    
  ]
})
export class AppModule {}
