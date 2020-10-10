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
    
    return 
  }
}
