import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventHandlingService {
  events: Event[];
  database = firebase.database();
  eventsListRef = this.database.ref('events');
  hours = ['7:10 - 7:55', '8:00 - 8:45', '9:50 - 10:35', '10:40 - 11:25', '11:30 - 12:15', '12:30 - 13:15',
    '13:20 - 14:05', '14:10 - 14:55'];

  constructor() {
    this.loadEvents().then(events => console.log(events));
    this.loadEvents().then(events => this.events = events);      
  }
  
  addEvent(event: Event) {
    const newEventRef = this.eventsListRef.push();
    newEventRef.set({
      name: event.name,
      date: event.date.toDateString(),
      hour: event.hour,
      timeZone: event.timeZone
    });
  }

  async loadEvents(): Promise<Event[]> {
    const events = await this.getEventsFromDB();
    return events;
  }

  getEventsFromDB(): Promise<Event[]> {
    return new Promise((res, rej) => {
      const events: Event[] = [];
      this.eventsListRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          events.push(childSnapshot.val())
        })
        res(events);
      });
    });
  }

  getEvents(): Observable<any> {
    return of (this.events);
  }

}