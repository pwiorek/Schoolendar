import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Event } from '../../../services/event';
import { EventHandlingService } from '../../../services/event-handling.service';
import { AddEventDialog } from '../../add-event/add-event-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

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
  subscriptionDialog: any;
  events: Event[] = [];
  eventsChange: Subject<Event[]> = new Subject<Event[]>();

  constructor(
    private dateHandler: DateHandlerService,
    private breakpointObserver: BreakpointObserver,
    public eventHandlingService: EventHandlingService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    if(this.isSmallScreen) this.dayFormat = 'E'; 
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 560px)');
    this.days = this.dateHandler.currentWeek;
    this._subscription = this.dateHandler.currentWeekChange.subscribe(value => this.days = value);
    this._subscription.add(this.eventHandlingService.temporaryEventChange.subscribe(value => this.events.push(value)));
    this.eventHandlingService.loadEvents().then(events => {
      this.events = events
      this.eventsChange.next(this.events)});
    this._subscription.add(this.eventsChange.subscribe(value => this.events = value));
  }  

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  openDialog(hour: string, date: Date, target: any, currentTarget: any): void {
    if (target === currentTarget) {
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
        if(result) {
          this.events.push(result);
          this.eventsChange.next(this.events);
        }
      });
    } 
  }

  //can be used to open popup with event details in future
  test(name:string) {
    alert(name)
  }

}
