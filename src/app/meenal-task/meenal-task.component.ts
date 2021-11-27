import { Component, OnInit } from '@angular/core';
import { productList } from '../meenal-interfaces';
import { MeenalTasksService } from '../meenal-tasks.service';

@Component({
  selector: 'app-meenal-task',
  templateUrl: './meenal-task.component.html',
  styleUrls: ['./meenal-task.component.scss']
})
export class MeenalTaskComponent implements OnInit {
  productList: productList[] = []
  data: any[] = []
  constructor(private service: MeenalTasksService) { }

  ngOnInit(): void {
    this.getAllList()
  }


  getAllList() {
    this.service.getList().subscribe((response: any) => {

      response.data.map((item: any) => {
        let payload = {
          ProductName: item[4],
          ProductID: item[1],
          ProductSerialNumber: item[2],
          ServiceProviderName: item[5],
          ServiceProviderCity: item[6]
        }
        this.productList.push(payload)
      }
      )
    })
    console.log(this.productList)
  }
  

}
