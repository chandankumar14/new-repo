import { Component, OnInit } from '@angular/core';
import { MeenalTasksService } from '../meenal-tasks.service';

@Component({
  selector: 'app-meenal-demo',
  templateUrl: './meenal-demo.component.html',
  styleUrls: ['./meenal-demo.component.scss']
})
export class MeenalDemoComponent implements OnInit {
  commonId: number = 1400
  letStet1to3:any[] = []
  step4to7:any[]= []
  finalObj ={}
  constructor(private _services: MeenalTasksService) { }
  ngOnInit(): void {
    this.finalfunctions()
    console.log(this.letStet1to3)
    console.log(this.step4to7)
  }


  finalfunctions() {
    this._services.getCompleted(this.commonId).subscribe((resc:any)=>{
      resc.data.map((item:any)=>{
        let payload = {
          ReturnStatusDisplay:item[13],
          ReturnStatusDTM:item[14]
        }
        this.letStet1to3.push(payload)
      
      })

    })

    this._services.getFuture(this.commonId).subscribe((resf:any)=>{
      resf.data.map((item2:any)=>{
        let payload4t7={
          ReturnStatusDisplay:item2[2]
        }
        this.step4to7.push(payload4t7)
      })
    })

  }
}


