import { Component, Inject } from '@angular/core';
import { Event } from '../../services/event';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Type } from '../add-event/typeEnum';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  options: Type[] = [Type.EXAM, Type.QUIZ, Type.HOMEWORK, Type.OTHER];

  constructor(public dialogRef: MatDialogRef<EventDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event,) { }

}
