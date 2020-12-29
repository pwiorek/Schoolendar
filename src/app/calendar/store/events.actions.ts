import { createAction, props } from '@ngrx/store';

export const addEvent = createAction(
    '[Event List] Add Event',
    props<{ Event } >()
);

export const removeEvent = createAction(
    '[Event List] Remove Event',
    props<{ Event }>()
);

export const retrievedEventList = createAction(
    '[Event List] Retrieve Event Success',
    props<{ Event }>()
  );