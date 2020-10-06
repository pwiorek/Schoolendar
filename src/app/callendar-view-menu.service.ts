import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallendarViewMenuService {
  readonly defaultView: string = "weekView";
  lastView: string = this.get("lastView") || this.defaultView;

  constructor() { }

  saveView(view: string): void {
    this.set("lastView", view);
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
