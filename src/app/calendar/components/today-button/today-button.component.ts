import { Component, OnInit } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';

@Component({
  selector: 'app-today-button',
  templateUrl: './today-button.component.html',
  styleUrls: ['./today-button.component.scss']
})
export class TodayButtonComponent {

  constructor(
    private dateHandler: DateHandlerService,
  ) { }

  displayCurrentTimePeriod() {
    this.dateHandler.setWeek(new Date());
  }

}
