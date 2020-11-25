import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './components/views/week-view/week-view.component';
import { TimePeriodControlerComponent } from './components/time-period-controler/time-period-controler.component';
import { DayViewComponent } from './components/views/day-view/day-view.component';
import { MonthViewComponent } from './components/views/month-view/month-view.component';
import { HomeComponent } from './home/home.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { TodayButtonComponent } from './components/today-button/today-button.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';


@NgModule({
  declarations: [WeekViewComponent, TimePeriodControlerComponent, DayViewComponent, MonthViewComponent, HomeComponent, AddEventComponent, TodayButtonComponent, EventDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeekViewComponent,
    DayViewComponent,
    MonthViewComponent,
    TimePeriodControlerComponent,
    TodayButtonComponent,
  ]
})
export class CalendarModule { }
