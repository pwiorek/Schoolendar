import { Component, OnInit } from '@angular/core';
import { CalendarViewMenuService } from '../../services/calendar-view-menu.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-calendar-view-menu',
  templateUrl: './calendar-view-menu.component.html',
  styleUrls: ['./calendar-view-menu.component.scss']
})
export class CalendarViewMenuComponent implements OnInit {
  subscribedParam = "initial value";
  

  constructor( 
    readonly calendarViewMenuService: CalendarViewMenuService, 
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("view");
    });
}

changeView(view: string){
  this.calendarViewMenuService.setView(view);
  this.goto(view);
}

  goto(view: string): void {
    this.router.navigateByUrl("home/" + view);
  }

}