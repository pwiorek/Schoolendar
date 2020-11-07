import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateHandlerService } from 'src/app/services/date-handler.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, OnDestroy {
  day: Date;
  private subscription: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
  ) {
    this.day = this.dateHandler.currentDate;
    this.subscription = dateHandler.currentDateChange.subscribe(value => this.day = value)
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
