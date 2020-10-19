import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './views/week-view/week-view.component';
import { TimePeriodControlerComponent } from './components/time-period-controler/time-period-controler.component';
import { DayViewComponent } from './views/day-view/day-view.component';
import { MonthViewComponent } from './views/month-view/month-view.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [WeekViewComponent, TimePeriodControlerComponent, DayViewComponent, MonthViewComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeekViewComponent,
    DayViewComponent,
    MonthViewComponent,
    TimePeriodControlerComponent
  ]
})
export class CalendarModule { }
