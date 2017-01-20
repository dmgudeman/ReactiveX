import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html',
  styleUrls: ['./reactive-select.component.css']
})
export class ReactiveSelectComponent implements OnInit {
  myGroup:FormGroup;
  constructor() { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      name: new FormControl("Dave"),
      location: new FormControl("Palo Alto, CA"),
      state: new FormControl()
    })
  }
  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'}
  ];
  form = new FormGroup({
    state: new FormControl(this.states[3]),
  });
}
