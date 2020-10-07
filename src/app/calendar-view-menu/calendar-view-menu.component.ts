import { Component, OnInit } from '@angular/core';
import { CalendarViewMenuService } from '../calendar-view-menu.service';

@Component({
  selector: 'app-calendar-view-menu',
  templateUrl: './calendar-view-menu.component.html',
  styleUrls: ['./calendar-view-menu.component.scss']
})
export class CalendarViewMenuComponent implements OnInit {

  constructor(private CalendarViewMenuService: CalendarViewMenuService) { }

  ngOnInit(): void {
    this.loadSavedView();
  }

  changeView(): void {
   this.CalendarViewMenuService.setView((<HTMLInputElement>document.querySelector('input[name="view"]:checked')).value);
  }

  loadSavedView(): void {
    let lastView: string = this.CalendarViewMenuService.lastView;
    if (lastView === "dayView") {
      (<HTMLInputElement>document.getElementById("day")).checked = true;
    } else if (lastView === "weekView") {
      (<HTMLInputElement>document.getElementById("week")).checked = true;
    } else if (lastView === "monthView") {
      (<HTMLInputElement>document.getElementById("month")).checked = true;
    }
    this.changeView();
  }

}
