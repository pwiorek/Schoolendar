import { Component, Inject, OnInit } from '@angular/core';
import { EventHandlingService } from '../../services/event-handling.service';
import { Event } from '../../services/event';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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


  constructor(
    private eventHandlingService: EventHandlingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addEvent(name: string) {
    this.eventHandlingService.addEvent(new Event(name));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { name: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result ? this.addEvent(result) : alert("Minimalna długość nazwy to 1 znak");
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Event) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}