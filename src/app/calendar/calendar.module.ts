import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './views/week-view/week-view.component';
import { TimePeriodControlerComponent } from './components/time-period-controler/time-period-controler.component';


@NgModule({
  declarations: [WeekViewComponent, TimePeriodControlerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeekViewComponent,
    TimePeriodControlerComponent,
  ]
})
export class CalendarModule { }
