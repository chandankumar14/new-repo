import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.scss']
})
export class ReuseComponent implements OnInit {


@Input() formInput:FormGroup | undefined
  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

}
