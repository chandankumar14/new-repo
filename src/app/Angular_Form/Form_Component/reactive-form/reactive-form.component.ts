import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  studentForm!: FormGroup;
  mode: string = "init"
  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    if (this.mode === "init") {
      this.initForm()
    } else {
      this.editForm()
    }
  }

  initForm() {
    this.studentForm = this._formBuilder.group({
      firstName: [null, Validators.required, Validators.maxLength(250)],
      lastName: [null, Validators.required, Validators.maxLength(250)],
      age: [null, Validators.required],
      role: [null, Validators.required],
      experiences: [null, Validators.required],
      address: [null, Validators.required, Validators.maxLength(250)]
    })
  }

  editForm() {
    this.studentForm.controls["firstName"].setValue(""),
      this.studentForm.controls["lastName"].setValue("xyz"),
      this.studentForm.controls["age"].setValue(25),
      this.studentForm.controls["role"].setValue("xyz"),
      this.studentForm.controls["experiences"].setValue("xyz"),
      this.studentForm.controls["address"].setValue("xyz")
  }

}

