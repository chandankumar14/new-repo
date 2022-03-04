import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../Form_Service/form.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  DoctorForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
   private formservice:FormService) {
    this.DoctorForm = this._formBuilder.group({
      doctorName: [null],
      speciality:[null]
    })
  }

  ngOnInit(): void {
    
  }
  submit(){
  const payload={
      doctorName:this.DoctorForm.controls["doctorName"].value,
      speciality:this.DoctorForm.controls["speciality"].value
    }
    this.formservice.postData(payload).subscribe(res=>{
      alert("Doctor Details Added Successfully’")
    })
  }
}

