import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { View } from './viewEnum';


@Injectable({
  providedIn: 'root'
})
export class CalendarViewMenuService {
  readonly defaultView: string = View.week;
  readonly viewStorageKey = 'lastView';
  lastView: string = this.get(this.viewStorageKey) || this.defaultView;
  view: string = this.lastView || this.defaultView;

  constructor(
    private readonly router: Router
  ) {
    this.router.navigateByUrl("home/" + this.view);
   }

  saveView(view: string): void {
    this.set(this.viewStorageKey, view);
  }

  setView(view: string): void {
    this.view = view;
    this.saveView(view);
  }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
