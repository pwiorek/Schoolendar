import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventHandlingService {
  database = firebase.database();
  eventsListRef = this.database.ref('events');
  hours = ['7:10 - 7:55', '8:00 - 8:45', '9:50 - 10:35', '10:40 - 11:25', '11:30 - 12:15', '12:30 - 13:15',
    '13:20 - 14:05', '14:10 - 14:55'];
  temporaryEvent: Event;
  temporaryEventChange: Subject<Event> = new Subject<Event>();

  constructor() {
    this.loadEvents().then(events => console.log(events));    
  }
  
  addEvent(event: Event) {
    const newEventRef = this.eventsListRef.push();
    newEventRef.set({
      name: event.name,
      date: event.date,
      hour: event.hour,
      timeZone: event.timeZone,
      type: event.type,
    });
  }

  async loadEvents(): Promise<Event[]> {
    const events = await this.fetchEvents();
    return events;
  }

  fetchEvents(): Promise<Event[]> {
    return new Promise((res, rej) => {
      
      this.eventsListRef.on('value', function(snapshot) {
        const events: Event[] = [];
        snapshot.forEach(function(childSnapshot) {
          events.push(childSnapshot.val())
        })
        res(events);
      });
    });
  }

  //needed to update WeekView when event is added by AddEventButton
  addedByButton(event: Event) {
    this.temporaryEvent = event;
    this.temporaryEventChange.next(this.temporaryEvent);
  }

}