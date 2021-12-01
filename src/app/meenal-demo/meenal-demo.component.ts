import { Component, OnInit } from '@angular/core';
import { MeenalTasksService } from '../meenal-tasks.service';

@Component({
  selector: 'app-meenal-demo',
  templateUrl: './meenal-demo.component.html',
  styleUrls: ['./meenal-demo.component.scss']
})
export class MeenalDemoComponent implements OnInit {
  commonId: number = 1400
  constructor(private _services: MeenalTasksService) { }

  ngOnInit(): void {
    this.finalfunctions()
  }


  finalfunctions() {
    let payload = {
      ProductName: "",
      ProductID: "",
      ProductSerialNumber: "",
      ServiceProviderName: "",
      ServiceProviderCity: "",
      ProductReturnID: "",
      ReturnStatusID: "",
      ReturnStatusDisplay: ""
    }
    // complete API data is here------>
    this._services.getCompleted(this.commonId).subscribe((item1: any) => {
      item1.data.map((item: any) => {
        // this is for seperate
        // 
        let payloads = {
          ProductName: item[4],
          ProductID: item[1],
          ProductSerialNumber: item[2],
          ServiceProviderName: item[5],
          ServiceProviderCity: item[6]
        }
        // this payload for both api data
        payload.ProductID = item[4];
        payload.ProductName = item[1],
          payload.ProductSerialNumber = item[2],
          payload.ServiceProviderCity = item[5],
          payload.ServiceProviderName = item[6]
        /// this.productList.push(payload)
      })

    })
    // future Api data ---->
    this._services.getFuture(this.commonId).subscribe((res: any) => {
      res.data.map((items2: any) => {
        payload.ProductReturnID = items2[0],
          payload.ReturnStatusID = items2[1],
          payload.ReturnStatusDisplay = items2[2]
      })
    })
console.log(payload)
  }
}


