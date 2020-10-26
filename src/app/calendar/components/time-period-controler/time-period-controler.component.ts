import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time-period-controler',
  templateUrl: './time-period-controler.component.html',
  styleUrls: ['./time-period-controler.component.scss']
})
export class TimePeriodControlerComponent implements OnInit, OnDestroy {
  activeWeek: Date[] = [];
  private subscription: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
  ) {
    this.activeWeek = this.dateHandler.currentWeek;
    this.subscription = dateHandler.currentWeekChange.subscribe(dates => this.activeWeek = dates);
  }

  ngOnInit(): void {
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  previousTimePeriod() {
    let prevDay = this.activeWeek[0];
    prevDay.setDate(prevDay.getDate() - 7);
    this.dateHandler.setWeek(prevDay);
    this.activeWeek = this.dateHandler.currentWeek;
  }

  nextTimePeriod() {
    let nextDay = this.activeWeek[0];
    nextDay.setDate(nextDay.getDate() + 7);
    this.dateHandler.setWeek(nextDay);
    this.activeWeek = this.dateHandler.currentWeek;
  }

  changeHandler(side: string) {
    if(side === 'left') this.dateHandler.moveBackwards(7);
    else if(side === 'right') this.dateHandler.moveForwards(7);
  }
  

}