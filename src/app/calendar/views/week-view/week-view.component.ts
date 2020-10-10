import { Component, OnInit } from '@angular/core';
import { DateHandlerService } from 'src/app/services/date-handler.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  numbers: number[] = [];
  days: string[] = ['Pon', 'Wt', 'Sr', 'Czw', 'Pt']; // <- to na obiekty (albo daty)

  constructor(
    private dateHandler: DateHandlerService,
  ) {
    this.numbers = Array(30).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
    alert(this.dateHandler.getNextDays(new Date(), 7))
  }

}
