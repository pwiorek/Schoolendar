import { Event } from '../services/event';

export interface CalendarState {
    events: ReadonlyArray<Event>;
}