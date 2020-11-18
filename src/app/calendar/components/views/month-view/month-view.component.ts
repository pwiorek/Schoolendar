import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { TimePeriodService } from '../../time-period-controler/time-period.service';
import { CalendarViewMenuService } from 'src/app/calendar/services/calendar-view-menu.service';
import { View } from 'src/app/calendar/services/viewEnum';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit, OnDestroy {
  days: Date[] = [];
  today = new Date();
  private subscription: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
    private calendarViewMenu: CalendarViewMenuService,
    private timePeriodService: TimePeriodService
  ) { 
    this.days = this.dateHandler.currentMonth;
    this.subscription = dateHandler.currentMonthChange.subscribe(value => this.days = value);
  }

  ngOnInit(): void {
    this.timePeriodService.setView(View.month);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
