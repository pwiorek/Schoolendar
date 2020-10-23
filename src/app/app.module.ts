import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { CalendarViewMenuComponent } from './calendar/components/calendar-view-menu/calendar-view-menu.component';
import { WeekViewComponent } from './calendar/views/week-view/week-view.component';
import { DayViewComponent } from './calendar/views/day-view/day-view.component';
import { MonthViewComponent } from './calendar/views/month-view/month-view.component';
import { HomeComponent } from './calendar/home/home.component';
import { AddEventComponent, AddEventDialog } from './calendar/components/add-event/add-event.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import * as firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


var firebaseConfig = {
  apiKey: "AIzaSyD3ndHKvEoiUKOYxDt1b_D-z-yPR4TXMIM",
  authDomain: "schoolendardrac-48fb1.firebaseapp.com",
  databaseURL: "https://schoolendardrac-48fb1.firebaseio.com",
  projectId: "schoolendardrac-48fb1",
  storageBucket: "schoolendardrac-48fb1.appspot.com",
  messagingSenderId: "809888163028",
  appId: "1:809888163028:web:881f9fa8e95707b0f30741",
  measurementId: "G-Z7B7TMHP41"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewMenuComponent,
    WeekViewComponent,
    DayViewComponent,
    MonthViewComponent,
    HomeComponent,
    AddEventComponent,
    AddEventDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // database
    AngularFireAuthModule, // auth
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    AddEventDialog
  ],
})
export class AppModule { }
