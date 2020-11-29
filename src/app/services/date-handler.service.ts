import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateHandlerService {
  currentDate: Date;
  currentDateChange: Subject<Date> = new Subject<Date>();
  
  currentWeek: Date[] = [];
  currentWeekChange: Subject<Date[]> = new Subject<Date[]>();
  
  currentMonth: Date[] = [];
  currentMonthChange: Subject<Date[]> = new Subject<Date[]>();

  constructor() {
    this.setDate(new Date());
   }

  setDate(referenceDate: Date) { 
    if (referenceDate.getDay() === 0) {
      referenceDate = new Date(referenceDate);
      referenceDate.setDate(referenceDate.getDate() + 1);
    }
    if (referenceDate.getDay() === 6) {
      referenceDate = new Date(referenceDate);
      referenceDate.setDate(referenceDate.getDate() + 2);
    }
    this.currentDate = referenceDate;
    this.currentDateChange.next(this.currentDate);
    

    this.setWeek(new Date(referenceDate));
    this.setMonth(new Date(referenceDate));
  }

  setWeek(referenceDate: Date) {
    let listOfDays: Date[] = [];
    let day = new Date();

    const normalizeDayIndex = 1;

    // get date of Monday
    if(referenceDate.getDay() >= 1) {
      day = new Date(referenceDate.setDate(referenceDate.getDate() - referenceDate.getDay() + normalizeDayIndex));
    }
    else {
      day = new Date(referenceDate.setDate(referenceDate.getDate() - 7 + normalizeDayIndex)); 
    }


    for(let i = 0; i < 5; i++) {
      listOfDays.push(day);
      day = new Date(day);
      day.setDate(day.getDate() + 1);
    }

    this.currentWeek = listOfDays;
    this.currentWeekChange.next(this.currentWeek);
  }

  setMonth(referenceDate: Date) {
    let listOfDays: Date[] = [];
    let day = new Date(referenceDate.setDate(1));

    while(day.getMonth() === referenceDate.getMonth()) {
      listOfDays.push(day);
      day = new Date(day);
      day.setDate(day.getDate() + 1);
    }

    this.currentMonth = listOfDays;
    this.currentMonthChange.next(this.currentMonth);

  }


  moveForwards( num: number) {
    if (num === 1) {
      if (this.currentDate.getDay() === 5) {
        num += 2;
      }
    }
    let day = new Date(this.currentDate);
    day.setDate(day.getDate() + num);
    this.setDate(day);
  }

  moveBackwards(num: number) {
    if (num === 1) {
      if (this.currentDate.getDay() === 1) {
        num += 2;
      }
    }
    let day = new Date(this.currentDate);
    day.setDate(day.getDate() - num);
    this.setDate(day);
  }
}
