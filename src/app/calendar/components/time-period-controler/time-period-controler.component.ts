import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { Subscription, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TimePeriodService } from './time-period.service';

@Component({
  selector: 'app-time-period-controler',
  templateUrl: './time-period-controler.component.html',
  styleUrls: ['./time-period-controler.component.scss']
})
export class TimePeriodControlerComponent implements OnInit, OnDestroy {
  activePeriod: Date[] = [];
  activeView: string;
  subscribedParam: any;
  private subscription: Subscription;
  private newSubscription: Subscription;

  constructor(
    private dateHandler: DateHandlerService,
    private activeRoute: ActivatedRoute,
    private timePeriodService: TimePeriodService,
  ) {
    this.activePeriod = this.dateHandler.currentWeek;
    this.subscription = this.dateHandler.currentWeekChange.subscribe(dates => this.activePeriod = dates);

    this.activeView = this.timePeriodService.activeView;
    this.newSubscription = this.timePeriodService.activeViewChange.subscribe(view => this.activeView = view);

  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      console.log(params)
})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.newSubscription.unsubscribe();
  }


  changeHandler(side: string) {
    if(side === 'left') this.dateHandler.moveBackwards(7);
    else if(side === 'right') this.dateHandler.moveForwards(7);
  }
  

}