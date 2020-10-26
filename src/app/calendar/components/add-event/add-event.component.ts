import { Component, Inject, OnInit } from '@angular/core';
import { EventHandlingService } from '../../services/event-handling.service';
import { Event } from '../../services/event';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AddEventDialog } from './add-event-dialog';
import { Subscription } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  private subscription: Subscription;

  constructor(
    private eventHandlingService: EventHandlingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addEvent(name: string) {
    this.eventHandlingService.addEvent(new Event(name));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEventDialog, {
      data: { name: "" }
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result)
        this.addEvent(result)

    });

  }

}

