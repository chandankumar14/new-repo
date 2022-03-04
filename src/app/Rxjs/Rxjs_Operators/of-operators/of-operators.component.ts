import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { RxjsService } from '../../Rxjs_Services/rxjs.service';
import { filter } from 'rxjs/operators';
import { student_Model, Time } from 'src/app/Models/student_model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-of-operators',
  templateUrl: './of-operators.component.html',
  styleUrls: ['./of-operators.component.scss'],
})
export class OFOperatorsComponent implements OnInit, OnDestroy {
  

  counter: number = 0;
  time: number = 20;
  subject: number = 0;
  constructor(private _rxjsService: RxjsService) {
    this._rxjsService.time.subscribe((subjectTime) => {
      if (subjectTime !== 0) {
        this.time = subjectTime;
      }
    });
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.counter =  this.counter+1
    },1000)
  }

  ngOnDestroy(): void {
    let updatedTime =  Math.floor(this.time*60 -this.counter)
    this._rxjsService.time.next(Math.floor(updatedTime/60));
  }
}
