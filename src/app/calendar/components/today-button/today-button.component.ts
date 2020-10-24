import { Component, OnInit } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';

@Component({
  selector: 'app-today-button',
  templateUrl: './today-button.component.html',
  styleUrls: ['./today-button.component.scss']
})
export class TodayButtonComponent implements OnInit {

  constructor(
    private dateHandler: DateHandlerService,
  ) { }

  ngOnInit(): void {
  }

  displayCurrentTimePeriod() {
    this.dateHandler.setWeek(new Date());
  }

}
