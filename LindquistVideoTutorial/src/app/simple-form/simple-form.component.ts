import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MailService } from '../mail.service';
@Component({
  selector: 'app-simple-form',
  template: `
 <br><br><br>
 {{"msfi: "+ messageSimpleFormInput }}<br>
 
 <input 
   #myInput  
   type="text" 
   (keydown)="onKeyDown(myInput.value)"
   [(ngModel)]="messageSimpleFormInput">
 
 <button (click)="update.emit({text: message})" >
     Click me!
 </button>

 <p>value from key down: </p>{{value}}
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() messageSimpleFormInput;
  @Output() update = new EventEmitter<any>();
   
  constructor(private mail: MailService) { }
  value: string;
  ngOnInit() {
  }
  
  onKeyDown(value) {
    this.value = value;
    console.log(value);

  }

}
