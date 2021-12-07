import { Component, OnInit } from '@angular/core';
import { MeenalTasksService } from '../meenal-tasks.service';

@Component({
  selector: 'app-meenal-demo',
  templateUrl: './meenal-demo.component.html',
  styleUrls: ['./meenal-demo.component.scss']
})
export class MeenalDemoComponent implements OnInit {
  commonId: number = 1400
  letStep1to7: any[] = []
  completed:any[] = []
future:any[] =[]

  ImageList:any["."] | undefined
  // step no ---1
  img1:string = "assets/ACATE-2692.PNG"
  img2:string =""
  completdimg:any[] = [this.img1]
  // step no ---2
  constructor(private _services: MeenalTasksService) { }
  step1:string | undefined ="";

result={
  name: "",
pqr:""
} 
  ngOnInit(): void {
    this.finalfunctions()
    console.log(this.letStep1to7)
  }


  finalfunctions() {
    this._services.getCompleted(this.commonId).subscribe((resc: any) => {
      resc.data.map((item: any, index:any, arr:any) => {
        let payload = {
          ReturnStatusDisplayC: item[13],
          ReturnStatusDTM: item[14],
          ReturnStatusDisplayF: "",
          img:this.completdimg[index]
        }
        this.letStep1to7.push(payload)
       
      })
    })

    this._services.getFuture(this.commonId).subscribe((resf: any) => {
      resf.data.map((item2: any) => {
        let payload = {
          ReturnStatusDisplayC: "",
          ReturnStatusDTM: "",
          ReturnStatusDisplayF: item2[2]
        }
        this.letStep1to7.push(payload)
      })
    })

  }
 
}


