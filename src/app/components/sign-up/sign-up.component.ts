import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  addEvent(type: string, event: MatDatepickerInputEvent<Date>,newInput:HTMLInputElement) {
    console.log(newInput.value);
  }
}
