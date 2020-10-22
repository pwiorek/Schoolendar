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
import { AddEventComponent, DialogOverviewExampleDialog } from './calendar/components/add-event/add-event.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalendarViewMenuComponent,
    WeekViewComponent,
    DayViewComponent,
    MonthViewComponent,
    HomeComponent,
    AddEventComponent,
    DialogOverviewExampleDialog
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
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
})
export class AppModule { }
