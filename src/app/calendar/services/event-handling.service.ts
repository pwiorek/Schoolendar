import { Injectable } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
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