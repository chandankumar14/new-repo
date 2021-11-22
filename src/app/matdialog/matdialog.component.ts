import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrls: ['./matdialog.component.scss'],
})
export class MatdialogComponent implements OnInit {
  number : number = 145
  constructor(public Dialog: MatDialog) {}

  ngOnInit(): void {}

  popup() {
  const PopupdialogRef =  this.Dialog.open(PopupComponent, {
      width: '661px',
      height: '451px',
      data: {
        firstName: "chandan",
        lastName: "kumar",
        role: "developer",
        Age: 24,
      },
    });
    PopupdialogRef.afterClosed().subscribe((response)=>{
      console.log(response)
    })
  }
  
}
