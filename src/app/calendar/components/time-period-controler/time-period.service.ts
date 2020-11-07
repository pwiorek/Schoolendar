import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarViewMenuService } from '../../services/calendar-view-menu.service';

@Injectable({
  providedIn: 'root'
})
export class TimePeriodService {
  activeView: string;
  activeViewChange: Subject<string> = new Subject<string>();

  constructor(
    private calendarViewMenu: CalendarViewMenuService
  ) { 

  }

  setView(view: string) {
    this.activeView = this.calendarViewMenu.lastView;
    this.activeViewChange.next(this.activeView);
  }
}
