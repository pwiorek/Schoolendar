import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { View } from 'src/app/calendar/services/viewEnum';


@Injectable({
  providedIn: 'root'
})
export class TimePeriodService {
  activeView: View;
  activeViewChange: Subject<View> = new Subject<View>();

  constructor() { }

  setView(view: View) {
    this.activeView = view;
    this.activeViewChange.next(this.activeView);
  }
}
