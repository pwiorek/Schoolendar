import { createReducer, on, Action } from '@ngrx/store';

import { retrievedEventList } from './events.actions';
import { Event } from '../services/event';

export const initialState: ReadonlyArray<Event> = [];

export const eventsReducer = createReducer(
  initialState,
  on(retrievedEventList, (state, { Event }) => [...Event])
);