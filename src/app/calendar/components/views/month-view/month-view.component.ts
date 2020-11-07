import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateHandlerService } from 'src/app/services/date-handler.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit, OnDestroy {
  days: Date[] = [];
  today = new Date();
  private subscription: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
  ) { 
    this.days = this.dateHandler.currentMonth;
    this.subscription = dateHandler.currentMonthChange.subscribe(value => this.days = value)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
