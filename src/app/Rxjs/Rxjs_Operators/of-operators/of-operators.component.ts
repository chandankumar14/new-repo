import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { RxjsService } from '../../Rxjs_Services/rxjs.service';
import { filter } from 'rxjs/operators';
import { student_Model } from 'src/app/Models/student_model';
@Component({
  selector: 'app-of-operators',
  templateUrl: './of-operators.component.html',
  styleUrls: ['./of-operators.component.scss']
})
export class OFOperatorsComponent implements OnInit {

  studentData = [
    { name: "Ankit", role: "Full_Stack_Developer", experience: "5yr" },
    { name: "Aniket", role: "UI_Developer", experience: "2yr" },
    { name: "Akash", role: "BE_Developer", experience: "0.5yr" },
    { name: "Ramesh", role: "Java_Developer", experience: "1yr" },
    { name: "prakash", role: "Angular_Developer", experience: "3yr" },
    { name: "Rakesh", role: "React_Developer", experience: "6yr" }
  ]

  
  constructor(private _rxjsService:RxjsService) { }

  ngOnInit(): void {
    /* 1 for converting  Array_data into Observables (studentDat)  we use from Operators 
      2 For converting Argument Into Observables we use Of Operators 
    */

const Of_operators = of("Data_1", "Data_2", "Data_3")
    const sourceData = from(this.studentData);

    sourceData.subscribe(res => {
      console.log(res)
    })

    Of_operators.subscribe(res=>{
      console.log(res)
    })
  }
  rxjsServices(){
    this._rxjsService.getStudentProfiles().subscribe(res=>{
      console.log(res)
    })
  this._rxjsService.getStudentProfile().pipe(filter(res1=>res1.name=="xyz")).subscribe(res2=>{
    console.log(res2)
  })
  }

}
