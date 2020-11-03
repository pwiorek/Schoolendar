import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventHandlingService {
  events: Event[] = [];
  database = firebase.database();
  eventsListRef = this.database.ref('events');

  constructor() {
    this.loadEvents().then(events => console.log(events));     
  }
  
  addEvent(event: Event) {
    const newEventRef = this.eventsListRef.push();
    newEventRef.set({
      name: event.name,
    });
  }

  async loadEvents(): Promise<Event[]> {
    const events = await this.getEvents();
    return events;
  }

  getEvents(): Promise<Event[]> {
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
  
}