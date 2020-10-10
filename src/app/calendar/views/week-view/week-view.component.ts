import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  numbers: number[] = [];
  days: string[] = ['Pon', 'Wt', 'Sr', 'Czw', 'Pt']; // <- to na obiekty (albo daty)

  constructor() {
    this.numbers = Array(30).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
  }

}
