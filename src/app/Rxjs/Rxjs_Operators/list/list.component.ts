import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OFOperatorsComponent } from '../of-operators/of-operators.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@ViewChild(OFOperatorsComponent) OFOperatorsComponent:OFOperatorsComponent | undefined ;
@Output()childMethod = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  func(){
    this.childMethod.emit(this.OFOperatorsComponent?.timerfun())
  }
}
