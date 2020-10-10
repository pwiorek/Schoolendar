import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateHandlerService {

  constructor(
    private datePipe: DatePipe,
  ) { }

  getCurrentPeriodOfDays() {

  }

  getNextDays(referenceDate: Date, num: number): Date[] {
    var listOfDays: Date[] = [];

    for(var i = 0; i < num; i++) 
      listOfDays.push(new Date(referenceDate.setDate(referenceDate.getDate() + 1)));
  
    return listOfDays;
  }

}
