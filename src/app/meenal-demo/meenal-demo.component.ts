import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MeenalTasksService } from '../meenal-tasks.service';

@Component({
  selector: 'app-meenal-demo',
  templateUrl: './meenal-demo.component.html',
  styleUrls: ['./meenal-demo.component.scss']
})
export class MeenalDemoComponent implements OnInit {
  
  form: FormGroup;
  questionLenth:any[] = [
    {id:1, question:"question-1"},
    {id:2, question:"question-2"}
  ]
  constructor(private _services: MeenalTasksService,
    private fb: FormBuilder) {
    this.form = fb.group({
      question:[null, Validators.required],
      option1:[null,Validators.required],
      option2:[null, Validators.required],
      option3:[null,Validators.required],
      option4:[null, Validators.required],

    })
    }
  
  ngOnInit(): void { 
   
   }


}
    

  


 


 



