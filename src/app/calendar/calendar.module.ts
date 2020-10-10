import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './views/week-view/week-view.component';
import { MonthViewComponent } from './views/month-view/month-view.component';
import { DayViewComponent } from './views/day-view/day-view.component';


@NgModule({
  declarations: [WeekViewComponent, MonthViewComponent, DayViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeekViewComponent
  ]
})
export class CalendarModule { }
