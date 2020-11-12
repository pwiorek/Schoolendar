import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { Subscription } from 'rxjs';
import { TimePeriodService } from './time-period.service';

@Component({
  selector: 'app-time-period-controler',
  templateUrl: './time-period-controler.component.html',
  styleUrls: ['./time-period-controler.component.scss']
})
export class TimePeriodControlerComponent implements OnDestroy {
  activeDate: Date;
  activeWeek: Date[] = [];
  activeMonth: Date[] = [];
  activeView: string;

  private dateSubscription: Subscription;
  private weekSubscription: Subscription;
  private monthSubscription: Subscription;
  private viewSubscription: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
    private timePeriodService: TimePeriodService,
  ) {
    this.getActiveData();
  }

  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
    this.weekSubscription.unsubscribe();
    this.monthSubscription.unsubscribe();
    this.viewSubscription.unsubscribe();
  }

  getActiveData() {
    this.activeDate = this.dateHandler.currentDate;
    this.dateSubscription = this.dateHandler.currentDateChange.subscribe(date => this.activeDate = date);

    this.activeWeek = this.dateHandler.currentWeek;
    this.weekSubscription = this.dateHandler.currentWeekChange.subscribe(dates => this.activeWeek = dates);

    this.activeMonth = this.dateHandler.currentMonth;
    this.monthSubscription = this.dateHandler.currentMonthChange.subscribe(dates => this.activeMonth = dates);

    this.activeView = this.timePeriodService.activeView;
    this.viewSubscription = this.timePeriodService.activeViewChange.subscribe(view => this.activeView = view);
  }

  changeHandler(side: string) {
    let num: number;

    if(this.activeView === 'day') num = 1;
    else if(this.activeView === 'week') num = 7;
    else {
      num = this.activeMonth[this.activeMonth.length - 1].getDate();
    }

    if(side === 'left') this.dateHandler.moveBackwards(num);
    else if(side === 'right') this.dateHandler.moveForwards(num);
  }
  

}