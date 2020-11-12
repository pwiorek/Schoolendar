import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';

import { EventHandlingService } from '../../../services/event-handling.service';
import { AddEventDialog } from '../../add-event/add-event-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit, OnDestroy {
  daysOfMonth: Date[] = [];
  daysToDisplay: Date[] = [];
  today = new Date();
  dayFormat = 'EEEE';
  isSmallScreen = false;
  _subscription: any;
  subscription: any;
  rows: number;
  arrayOfRows: Date[][];
  currentMonth: number;

  constructor(
    private dateHandler: DateHandlerService,
    private breakpointObserver: BreakpointObserver,
    private eventHandlingService: EventHandlingService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
    this.daysOfMonth = this.dateHandler.currentMonth;
    this.currentMonth = this.daysOfMonth[0].getMonth();
    this._subscription = this.dateHandler.currentMonthChange.subscribe(value => this.daysOfMonth = value);
    if (this.isSmallScreen) this.dayFormat = 'E';
    this.fillDaysToDisplay();
    console.log(this.arrayOfRows);

  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  fillDaysToDisplay(): void {
    const firstDay: number = this.daysOfMonth[0].getDay() === 0 ? 7 : this.daysOfMonth[0].getDay();
    //getting days from previous month to fill the first row when the first day of month is not Monday 
    for (let i = (firstDay - 1); i > 0; i--) {
      let dayOfPreviousMonth: Date = new Date(this.daysOfMonth[0].getTime());
      dayOfPreviousMonth.setDate(dayOfPreviousMonth.getDate() - i);
      this.daysToDisplay.push(dayOfPreviousMonth);
    }
    this.daysOfMonth.forEach(element => {
      this.daysToDisplay.push(element);
    });

    this.rows = Math.ceil((this.daysToDisplay.length) / 7);
    const toAdd: number = 7 * this.rows - this.daysToDisplay.length; // number of needed days from the following month
    //getting days from following month to fill the last row when the last day of month is not Sunday  
    for (let i = 1; i <= toAdd; i++) {
      let dayOfFollowingsMonth: Date = new Date(this.daysOfMonth[this.daysOfMonth.length - 1].getTime());
      dayOfFollowingsMonth.setDate(dayOfFollowingsMonth.getDate() + i);
      this.daysToDisplay.push(dayOfFollowingsMonth);
    }
    let arrayOfRows: Date[][] = [[]];
    for (let i = 1; i < this.rows; i++) {
      arrayOfRows.push([]);
    }
    let i = 0;
    let j = 0;
    this.daysToDisplay.forEach(element => {
      arrayOfRows[j].push(element);
      i++;
      if (i === 7) {
        i = 0;
        j++;
      }
    });
    this.arrayOfRows = arrayOfRows;
  }

  openDialog (date: Date): void {
    const dialogRef = this.dialog.open(AddEventDialog, {
      data: {
        name: "",
        date: date,
        hour: '7:10 - 7:55'
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
