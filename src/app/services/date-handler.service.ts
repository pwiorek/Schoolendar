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
    var listOfDays: Date[] = [];
    var monday = new Date();

    // get date of Monday
    if(referenceDate.getDay() >= 1) monday.setDate(referenceDate.getDate() - (referenceDate.getDay() - 1));
    else monday.setDate(referenceDate.getDate() - 6);

    for(var i = 0; i < 5; i++) {
      listOfDays.push(monday);
      monday = new Date(monday);
      monday.setDate(monday.getDate() + 1);
    }

    return listOfDays;
  }
}
