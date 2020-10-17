import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './views/week-view/week-view.component';
import { TimePeriodControlerComponent } from './components/time-period-controler/time-period-controler.component';
import { DayViewComponent } from './views/day-view/day-view.component';
import { MonthViewComponent } from './views/month-view/month-view.component';


@NgModule({
  declarations: [WeekViewComponent, TimePeriodControlerComponent, DayViewComponent, MonthViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeekViewComponent,
    TimePeriodControlerComponent
  ]
})
export class CalendarModule { }
