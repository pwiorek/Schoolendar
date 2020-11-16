import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { CalendarViewMenuService } from 'src/app/calendar/services/calendar-view-menu.service';
import { TimePeriodService } from '../../time-period-controler/time-period.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit, OnDestroy {
  days: Date[] = [];
  hours = ['7:10 - 7:55', '8:00 - 8:45', '9:50 - 10:35', '10:40 - 11:25', '11:30 - 12:15', '12:30 - 13:15',
    '13:20 - 14:05', '14:10 - 14:55']; //in future from database
  today = new Date();
  dayFormat = 'EEEE';
  isSmallScreen = false;
  private subscription: Subscription

  constructor(
    private dateHandler: DateHandlerService,
    private breakpointObserver: BreakpointObserver,
    private calendarViewMenu: CalendarViewMenuService,
    private timePeriodService: TimePeriodService
  ) {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
    this.days = this.dateHandler.currentWeek;
    this.subscription = dateHandler.currentWeekChange.subscribe(value => this.days = value);
  }

  ngOnInit(): void {
    this.timePeriodService.setView(this.calendarViewMenu.view);
    if(this.isSmallScreen) this.dayFormat = 'E'; 
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleSwipe(side: string) {
    if (side === 'left') this.dateHandler.moveForwards(7);
    else if (side === 'right') this.dateHandler.moveBackwards(7);
  }
}
