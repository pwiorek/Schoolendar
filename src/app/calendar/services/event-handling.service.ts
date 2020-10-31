import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventHandlingService {
  events: Event[] = this.get("events") || [];
  database = firebase.database();

  constructor() { }

  addEvent(event: Event) {
    this.events.push(event);
    this.database.ref('events/' + event.name).set({
      name: event.name
    });
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
