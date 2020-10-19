import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DayViewComponent } from './calendar/views/day-view/day-view.component';
import { MonthViewComponent } from './calendar/views/month-view/month-view.component';
import { WeekViewComponent } from './calendar/views/week-view/week-view.component';

const routes: Routes = [
  { path: "home", component: AppComponent, children: [ 
    { path: "week", component: WeekViewComponent },
    { path: "day", component: DayViewComponent },
    { path: "month", component: MonthViewComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
