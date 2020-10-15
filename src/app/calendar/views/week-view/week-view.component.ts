import { Component, OnInit } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  days: Date[] = [];
  hours = ['7:10 - 7:55', '8:00 - 8:45', '9:50 - 10:35', '10:40 - 11:25', '11:30 - 12:15', '12:30 - 13:15',
    '13:20 - 14:05', '14:10 - 14:55']; //in future from database
  today = new Date();
  dayFormat = 'EEEE';
  isSmallScreen = false;

  constructor(
    private dateHandler: DateHandlerService,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 560px)');
  }

  ngOnInit(): void {
    this.days = this.dateHandler.getWeek(this.today);
    if(this.isSmallScreen) this.dayFormat = 'E'; 
  }  
}
