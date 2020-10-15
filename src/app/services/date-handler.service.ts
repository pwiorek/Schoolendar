import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateHandlerService {
  currentWeek: Date[] = [];

  constructor() {
    this.currentWeek = this.getWeek(new Date());
   }

  getWeek(referenceDate: Date): Date[] {
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

    return listOfDays;
  }
}
