import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
@Input() matdialogdata:number | undefined
counter:number =45
  constructor() { }
  ngDoCheck(): void {
   console.log("do check method is called here")
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("onChange method is called")
  }

  ngOnInit(): void {
  }

  increament(){
    this.counter = this.counter+1
  }
  decreament(){
    this.counter = this.counter-1
  }
  sum(a: any, b: any){
    return a+b;
  }
}
