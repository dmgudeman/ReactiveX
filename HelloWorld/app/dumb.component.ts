
import {Component, Input, Output, EventEmitter} from '@angular/core';import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'dumb',
  template: 
   ` <input 
      [(ngModel)] = "box"
      #ctrl="ngModel"
      (keyup)="onKey(box.value)"
      >
    <p>{{message}}</p>
  `
})
export class DumbComponent {
  @Input() message:string; 
  // @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  // values = '';
  // onKey(value: string) {
  //   this.values += value + ' | ';
  // }
  constructor (){

  }
}
  