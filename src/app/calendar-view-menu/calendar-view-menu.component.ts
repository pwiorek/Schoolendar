import { Component, OnInit } from '@angular/core';
import { CalendarViewMenuService } from '../calendar-view-menu.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-calendar-view-menu',
  templateUrl: './calendar-view-menu.component.html',
  styleUrls: ['./calendar-view-menu.component.scss']
})
export class CalendarViewMenuComponent implements OnInit {
  subscribedParam = "initial value";

  constructor(private CalendarViewMenuService: CalendarViewMenuService, private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.loadSavedView();
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("view");
    });
}

  changeView(): void {
   this.CalendarViewMenuService.setView((<HTMLInputElement>document.querySelector('input[name="view"]:checked')).value);
   this.goto((<HTMLInputElement>document.querySelector('input[name="view"]:checked')).value);
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

  goto(view: string): void {
    this.router.navigateByUrl("home/" + view);
  }

}
