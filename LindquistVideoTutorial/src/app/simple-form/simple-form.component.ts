import { Component, OnInit, Input } from '@angular/core';
import { MailService } from '../mail.service';
@Component({
  selector: 'app-simple-form',
  template: `
 
 {{messageSimpleFormInput }}<br>
 
 <input 
   #myInput  
   type="text" 
   (keydown)="onKeyDown(myInput.value)"
   [(ngModel)]="messageSimpleFormInput"
 >
 
 <button (click)="onClick($event.clientX, myInput.value)" >
     Click me!
 </button><br>

 {{value}}
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() messageSimpleFormInput;
   
  constructor(private mail: MailService) { }
  value: string;
  ngOnInit() {
  }
  onClick(event, value) {
    console.log(value);
    console.log(event);
  }
  onKeyDown(value) {
    this.value = value;
    console.log(value);

  }

}
