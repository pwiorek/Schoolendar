import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { TimePeriodService } from '../../time-period-controler/time-period.service';
import { View } from 'src/app/calendar/services/viewEnum';

import { Event } from '../../../services/event';
import { EventHandlingService } from '../../../services/event-handling.service';
import { AddEventDialog } from '../../add-event/add-event-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Type } from '../../add-event/typeEnum';

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
  _subscription: Subscription;
  subscriptionDialog: Subscription;
  events: Event[] = [];
  eventsChange: Subject<Event[]> = new Subject<Event[]>();
  options: Type[] = [Type.EXAM, Type.QUIZ, Type.HOMEWORK, Type.OTHER];

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
    this._subscription = this.dateHandler.currentWeekChange.subscribe(value => this.days = value);
    this.timePeriodService.setView(View.week);
    if(this.isSmallScreen) this.dayFormat = 'E'; 
    this._subscription.add(this.eventHandlingService.temporaryEventChange.subscribe(value => this.events.push(value)));
    this.eventHandlingService.loadEvents(new Date(this.days[0].setHours(0, 0, 0)), new Date(this.days[this.days.length - 1].setHours(23, 59, 59))).then(events => {
      this.events = events
      this.eventsChange.next(this.events)})
        .catch(e => console.log(e));
    this._subscription.add(this.eventsChange.subscribe(value => this.events = value));
  }  

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  handleSwipe(side: string) {
    if (this.isSmallScreen) {
      if (side === 'left') this.dateHandler.moveForwards(7);
      else if (side === 'right') this.dateHandler.moveBackwards(7);
    }
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

  //used in HTML to convert into correct form
  getShortISODate(date: Date): string {
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  }

  xd() {
    // this.eventHandlingService.fetchEventsForWeek();
  }

}
