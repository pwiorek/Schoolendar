import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';

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
  hours = ['7:10 - 7:55', '8:00 - 8:45', '9:50 - 10:35', '10:40 - 11:25', '11:30 - 12:15', '12:30 - 13:15',
    '13:20 - 14:05', '14:10 - 14:55']; //in future from database
  today = new Date();
  dayFormat = 'EEEE';
  isSmallScreen = false;
  _subscription: any;
  subscription: any;

  constructor(
    private dateHandler: DateHandlerService,
    private breakpointObserver: BreakpointObserver,
    private eventHandlingService: EventHandlingService,
    public dialog: MatDialog,
  ) {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
    this.days = this.dateHandler.currentWeek;
    this._subscription = dateHandler.currentWeekChange.subscribe(value => this.days = value);
  }

  ngOnInit(): void {
    if(this.isSmallScreen) this.dayFormat = 'E'; 
  }  

  ngOnDestroy() {
    this._subscription.unsubscribe();
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
