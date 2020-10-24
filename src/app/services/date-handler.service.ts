import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateHandlerService {
  currentWeek: Date[] = [];
  currentWeekChange: Subject<Date[]> = new Subject<Date[]>();
  
  
  constructor() {
    this.setWeek(new Date());
   }

   setWeek(referenceDate: Date) {
    let listOfDays: Date[] = [];
    let day = new Date();

    // get date of Monday
    if(referenceDate.getDay() >= 1) day.setDate(referenceDate.getDate() - (referenceDate.getDay() - 1));
    else day.setDate(referenceDate.getDate() - 6);

    for(let i = 0; i < 5; i++) {
      listOfDays.push(day);
      day = new Date(day);
      day.setDate(day.getDate() + 1);
    }

    this.currentWeek = listOfDays;
    this.currentWeekChange.next(this.currentWeek);
  }
}
