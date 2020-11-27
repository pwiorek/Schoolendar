import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { TimePeriodService } from '../../time-period-controler/time-period.service';
import { View } from 'src/app/calendar/services/viewEnum';
import { EventHandlingService } from '../../../services/event-handling.service';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, OnDestroy {
  day: Date;
  hours = this.eventHandlingService.hours;
  private subscription: Subscription;
  isSmallScreen: boolean;

  constructor(
    private dateHandler: DateHandlerService,
    private timePeriodService: TimePeriodService,
    private eventHandlingService: EventHandlingService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.timePeriodService.setView(View.day);
    this.day = this.dateHandler.currentDate;
    this.subscription = this.dateHandler.currentDateChange.subscribe(value => this.day = value);
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
