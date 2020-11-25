import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { CalendarViewMenuComponent } from './calendar/components/calendar-view-menu/calendar-view-menu.component';
import { WeekViewComponent } from './calendar/components/views/week-view/week-view.component';
import { DayViewComponent } from './calendar/components/views/day-view/day-view.component';
import { MonthViewComponent } from './calendar/components/views/month-view/month-view.component';
import { HomeComponent } from './calendar/home/home.component';
import { AddEventComponent } from './calendar/components/add-event/add-event.component';
import { AddEventDialog } from './calendar/components/add-event/add-event-dialog';
import { EventDetailsComponent } from './calendar/components/event-details/event-details.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TodayButtonComponent } from './calendar/components/today-button/today-button.component';
import { MaterialModule } from './material.module';
import { TimePeriodControlerComponent } from './calendar/components/time-period-controler/time-period-controler.component';
import { HammerModule } from '@angular/platform-browser';

import * as firebase from 'firebase/app';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ToTypeIconPipe } from './pipes/to-type-icon.pipe';


var firebaseConfig = {
  apiKey: environment.firebaseConfig.apiKey,
  authDomain: environment.firebaseConfig.authDomain,
  databaseURL: environment.firebaseConfig.databaseURL,
  projectId: environment.firebaseConfig.projectId,
  storageBucket:environment.firebaseConfig.storageBucket,
  messagingSenderId: environment.firebaseConfig.messagingSenderId,
  appId: environment.firebaseConfig.appId,
  measurementId: environment.firebaseConfig.measurementId
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
    AddEventDialog,
    TodayButtonComponent,
    ToTypeIconPipe,
    TimePeriodControlerComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HammerModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // database
    AngularFireAuthModule, // auth
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    AddEventDialog
  ],
})
export class AppModule { }
