import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { CalendarViewMenuService } from 'src/app/calendar/services/calendar-view-menu.service';
import { TimePeriodService } from '../../time-period-controler/time-period.service';
import { View } from 'src/app/calendar/services/viewEnum';


@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, OnDestroy {
  day: Date;
  private subscription: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
    private calendarViewMenu: CalendarViewMenuService,
    private timePeriodService: TimePeriodService
  ) {}

  ngOnInit(): void {
    this.timePeriodService.setView(View.day);
    this.day = this.dateHandler.currentDate;
    this.subscription = this.dateHandler.currentDateChange.subscribe(value => this.day = value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
