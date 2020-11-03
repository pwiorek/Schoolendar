import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventDialog } from './add-event-dialog';
import { Subscription } from 'rxjs';
import { EventHandlingService } from '../../services/event-handling.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  private subscription: Subscription;
  
  constructor(
    public dialog: MatDialog,
    private eventHandlingService: EventHandlingService //only for creating service at the start of the app 
    //(to display events in console on start), will be deleted in the future 
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddEventDialog, {
      data: { name: "" },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'add-event-dialog-panelClass'
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}

