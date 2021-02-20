import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Event } from './event';
import { Timetable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class EventHandlingService {
  database = firebase.database();
  eventsListRef = this.database.ref('events');
  timetable = new Timetable;
  temporaryEvent: Event;
  temporaryEventChange: Subject<Event> = new Subject<Event>();
  events: Event[];
  eventsChange: Subject<Event[]> = new Subject<Event[]>();


  constructor() {}
  
  addEvent(event: Event) {
    const newEventRef = this.eventsListRef.push();
    newEventRef.set({
      name: event.name,
      date: event.date.getTime(),
      hour: event.hour,
      timeZone: event.timeZone,
      type: event.type,
    });
  }

  async loadEvents(start: Date, end: Date): Promise<Event[]> {
    const events = await this.fetchEventsForTimePeriod(start, end);
    this.events = events;
    this.eventsChange.next(this.events);
    return events;
  }

  fetchAllEvents(): Promise<Event[]> {
    return new Promise((res) => {
      
      this.eventsListRef.on('value', function(snapshot) {
        const events: Event[] = [];
        snapshot.forEach(function(childSnapshot) {
          const value = childSnapshot.val();
          events.push(new Event(value.name, new Date(value.date), value.hour, value.type));
        })
        res(events);
      });
    });
  }
  
  fetchEventsForTimePeriod(startDate: Date, endDate: Date): Promise<Event[]> {
    return new Promise((res) => {
      this.eventsListRef
        .orderByChild('date')
        .startAt(startDate.getTime())   
        .endAt(endDate.getTime())   
        .on('value', (snapshot) => {
          const events: Event[] = [];
          snapshot.forEach(childSnapshot => {
            const value = childSnapshot.val();
            events.push(new Event(value.name, new Date(value.date), value.hour, value.type));
          });
          res(events);
        })
    });
  }

  //needed to update WeekView when event is added by AddEventButton
  addedByButton(event: Event) {
    this.temporaryEvent = event;
    this.temporaryEventChange.next(this.temporaryEvent);
  }

}