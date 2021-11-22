import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form  = this.fb.group({
      firstName:[null, Validators.required, Validators.maxLength(250)],
      lastName:[null, Validators.required, Validators.maxLength(250)],
      Age:[null, Validators.required],
      email:[null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
