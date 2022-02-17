import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ui-design',
  templateUrl: './ui-design.component.html',
  styleUrls: ['./ui-design.component.scss']
})
export class UIDesignComponent implements OnInit {
   demoForm: FormGroup;

  constructor(private fb :FormBuilder) { 
    this.demoForm = this.fb.group({
      text_input: ['', Validators.required],
      photos: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }


 
  get photos(): FormArray {
   return this.demoForm.get('photos') as FormArray;
  }

  detectFiles(event:any) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
         this.photos.push(
            this.fb.group({
              fileUrl:[e.target.result],
              fileDescription:[null, Validators.required]
            })
          );
        };
        reader.readAsDataURL(file);
      }
    }
    console.log(this.photos)
  }

  removePhoto(i:number) {
    this.photos.removeAt(i);
  }
  Submit(){
    console.log(this.demoForm.value)
  }
  xyz(photo:any){
    console.log(photo.controls.fileUrl.value)
  }
}
