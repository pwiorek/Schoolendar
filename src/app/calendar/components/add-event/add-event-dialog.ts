import { Component, Inject, OnInit } from '@angular/core';
import { Event } from '../../services/event';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventHandlingService } from '../../services/event-handling.service';

@Component({
  selector: 'add-event-dialog',
  templateUrl: 'add-event-dialog.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventDialog implements OnInit {
  formGroup: FormGroup;
  nameAlert: string = 'To pole jest wymagane, min. długość: 1 znak, max. długość 30 znaków.';
  dateAlert: string = 'To pole jest wymagane.';
  hours = ['7:10 - 7:55', '8:00 - 8:45', '9:50 - 10:35', '10:40 - 11:25', '11:30 - 12:15', '12:30 - 13:15',
    '13:20 - 14:05', '14:10 - 14:55'];
  
  constructor(
    public dialogRef: MatDialogRef<AddEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Event,
    private formBuilder: FormBuilder,
    private eventHandlingService: EventHandlingService) { }

  ngOnInit() {
    this.createForm();
    this.formGroup.get('hour').setValue(this.data.hour);
    this.formGroup.get('date').setValue(this.data.date);
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  get date() {
    return this.formGroup.get('date') as FormControl
  }

  get hour() {
    return this.formGroup.get('hour') as FormControl
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      'date': [null, [Validators.required]],
      'hour': [null, [Validators.required]],
    });
  }

  onSubmit(post) {
    this.eventHandlingService.addEvent(new Event(post.name, new Date(post.date), post.hour));
  }

}