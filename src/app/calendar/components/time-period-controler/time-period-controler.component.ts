import { Component, OnInit } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';

@Component({
  selector: 'app-time-period-controler',
  templateUrl: './time-period-controler.component.html',
  styleUrls: ['./time-period-controler.component.scss']
})
export class TimePeriodControlerComponent implements OnInit {
  currentWeek: Date[] = [];

  constructor(
    private dateHandler: DateHandlerService,
  ) { }

  ngOnInit(): void {
    this.currentWeek = this.dateHandler.currentWeek;
    // this.xd()
  }

  xd() {
    alert(this.currentWeek);
  }

}
