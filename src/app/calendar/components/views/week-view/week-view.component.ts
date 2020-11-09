import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { CalendarViewMenuService } from 'src/app/calendar/services/calendar-view-menu.service';
import { TimePeriodService } from '../../time-period-controler/time-period.service';

import { EventHandlingService } from '../../../services/event-handling.service';
import { AddEventDialog } from '../../add-event/add-event-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit, OnDestroy {
  days: Date[] = [];
  hours = this.eventHandlingService.hours;
  today = new Date();
  dayFormat = 'EEEE';
  isSmallScreen = false;

  _subscription: any;
  subscription: any;


  constructor(
    private dateHandler: DateHandlerService,
    private breakpointObserver: BreakpointObserver,
    private calendarViewMenu: CalendarViewMenuService,
    private timePeriodService: TimePeriodService
    private eventHandlingService: EventHandlingService,
    public dialog: MatDialog,

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
    if (side == 'left') this.dateHandler.moveForwards(7);
    else if (side == 'right') this.dateHandler.moveBackwards(7);
  }

  openDialog(hour: string, date: Date): void {
    const dialogRef = this.dialog.open(AddEventDialog, {
      data: {
        name: "",
        date: date,
        hour: hour
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'add-event-dialog-panelClass'
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
