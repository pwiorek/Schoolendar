import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimePeriodService {
  activeView: string;
  activeViewChange: Subject<string> = new Subject<string>();

  constructor() { }

  setView(view: string) {
    this.activeView = view;
    this.activeViewChange.next(this.activeView);
  }
}
