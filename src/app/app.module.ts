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
import { TodayButtonComponent } from './calendar/components/today-button/today-button.component';
import { MaterialModule } from './material.module';
import { TimePeriodControlerComponent } from './calendar/components/time-period-controler/time-period-controler.component';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewMenuComponent,
    WeekViewComponent,
    DayViewComponent,
    MonthViewComponent,
    HomeComponent,
    TodayButtonComponent,
    TimePeriodControlerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HammerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
