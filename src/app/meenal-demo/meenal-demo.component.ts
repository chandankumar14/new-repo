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
  ImageList:any["."] | undefined
  constructor(private _services: MeenalTasksService) { }
  ngOnInit(): void {
    this.finalfunctions()
    console.log(this.letStep1to7)
  }


  finalfunctions() {
    this._services.getCompleted(this.commonId).subscribe((resc: any) => {
      resc.data.map((item: any) => {
        let payload = {
          ReturnStatusDisplayC: item[13],
          ReturnStatusDTM: item[14],
          ReturnStatusDisplayF: "",
          
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


