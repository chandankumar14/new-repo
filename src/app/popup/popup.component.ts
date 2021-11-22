import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
// form: FormGroup;
 payload = {
   name:"xyz",
   id:125,
   role:"UI/UX developer"
 }
  constructor(private fb :FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef:MatDialogRef<PopupComponent> ) {
    // this.form = this.fb.group({
    //   firstName:[null, Validators.required, Validators.maxLength(250)],
    //   lastName:[null, Validators.required, Validators.maxLength(100)],
    //   role:[null, Validators.required],
    //   Age:[null, Validators.required]
    // })
   }

  ngOnInit(): void {
    console.log(this.data)
  }

  close(){
    this.dialogRef.close(this.payload)
  }
}
