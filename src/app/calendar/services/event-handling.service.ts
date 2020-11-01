import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventHandlingService {
  events: Event[];
  database = firebase.database();

  constructor() {
    this.events = this.fetchEvents(this.database.ref('events'));
    console.log(this.events);
  }
  addEvent(event: Event) {
    var eventsListRef = this.database.ref('events');
    var newEventRef = eventsListRef.push();
    newEventRef.set({
      name: event.name,
    });
    this.events = this.fetchEvents(eventsListRef);
  }

  fetchEvents(eventsListRef: firebase.database.Reference): Event[] {
    var eventsArray: Event[] = new Array;
    eventsListRef.once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        eventsArray.push(childSnapshot.val())
      })
    })
    return eventsArray;
  }

}
