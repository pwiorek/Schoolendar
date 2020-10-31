import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './calendar/home/home.component';
import { DayViewComponent } from './calendar/components/views/day-view/day-view.component';
import { MonthViewComponent } from './calendar/components/views/month-view/month-view.component';
import { WeekViewComponent } from './calendar/components/views/week-view/week-view.component';

const routes: Routes = [
  { path:"", redirectTo: "home/week", pathMatch: "full" },
  { path:"home", redirectTo: "home/week", pathMatch: "full" },
  { path: "home", component: HomeComponent, children: [ 
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
