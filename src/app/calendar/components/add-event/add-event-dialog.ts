import { Component, Inject, OnInit } from '@angular/core';
import { Event } from '../../services/event';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'add-event-dialog',
    templateUrl: 'add-event-dialog.html',
    styleUrls: ['./add-event.component.scss']
  })
  export class AddEventDialog {
  
    nameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30)
    ]);
    constructor(
      public dialogRef: MatDialogRef<AddEventDialog>,
      @Inject(MAT_DIALOG_DATA) public data: Event) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 6;
    }
  
  }