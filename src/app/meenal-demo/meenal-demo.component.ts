import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeenalTasksService } from '../meenal-tasks.service';

@Component({
  selector: 'app-meenal-demo',
  templateUrl: './meenal-demo.component.html',
  styleUrls: ['./meenal-demo.component.scss']
})
export class MeenalDemoComponent implements OnInit {


  form: FormGroup
  safetyFormArray: FormGroup[] = []
  status:string = "safety"
  tab1:string ="tab3"
  tab2:string ="tab3"
  tab3:string ="tab3"
  final:any[] =[]
  privacyFormArray: FormGroup[] = []
  questionLenth: any[] = [
    { id: 1, question: "question-1" },
    { id: 2, question: "question-2" }
  ]

  safetyQuestion: any[] = [
    {
      id: 1,
      type: 0,
      question: "safety question first"
    },
    {
      id: 2,
      type: 0,
      question: "safety question second"
    },
    {
      id: 3,
      type: 0,
      question: "safety question third"
    }
  ]

  privacyQuestion: any[] = [
    {
      id: 1,
      type: 2,
      question: "privacy question first"
    },
    {
      id: 2,
      type: 2,
      question: "privacy question second"
    },
    {
      id: 3,
      type: 2,
      question: "privacy question third"
    }
  ]
  constructor(private _services: MeenalTasksService,
    private fb: FormBuilder) {
    this.form = fb.group({})
  }

  ngOnInit(): void {
    this.privacy(),
      this.safety()
    
  }
  submit() {
    
    
    console.log(this.final)
  }
  safety() {
    this.safetyQuestion.map(item => {
      this.safetyFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          types: [item.type, Validators.required],
          option1: [null, Validators.required],
          Option2: [null, Validators.required],
          option3: [null, Validators.required]
        })
      )
    })
  }

  privacy() {
    this.privacyQuestion.map(item => {
      this.privacyFormArray.push(
        this.fb.group({
          question: [item.question, Validators.required],
          types: [item.type, Validators.required],
          option1: [null, Validators.required],
          Option2: [null, Validators.required],
          option3: [null, Validators.required]
        })
      )
    })
  }

  save(data:any){
    if(this.status==data){
      this.safetyFormArray.map(sfty=>{
        const payload ={
          question:sfty.get('question')?.value,
          option1:sfty.get('option1')?.value,
          option2:sfty.get('Option2')?.value,
          option3:sfty.get('option3')?.value
        }
        this.final.push(payload)
      })
    }

  }
}










