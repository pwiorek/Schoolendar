import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekViewComponent } from './calendar/views/week-view/week-view.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
