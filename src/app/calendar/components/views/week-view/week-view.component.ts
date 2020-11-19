import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { TimePeriodService } from '../../time-period-controler/time-period.service';
import { View } from 'src/app/calendar/services/viewEnum';

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
  subscription: Subscription
  subscriptionDialog: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
    private breakpointObserver: BreakpointObserver,
    private timePeriodService: TimePeriodService,
    private eventHandlingService: EventHandlingService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
    this.days = this.dateHandler.currentWeek;
    this.subscription = this.dateHandler.currentWeekChange.subscribe(value => this.days = value);
    this.timePeriodService.setView(View.week);
    if(this.isSmallScreen) this.dayFormat = 'E'; 
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleSwipe(side: string) {
    if (this.isSmallScreen) {
      if (side === 'left') this.dateHandler.moveForwards(7);
      else if (side === 'right') this.dateHandler.moveBackwards(7);
    }
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

    this.subscriptionDialog = dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
