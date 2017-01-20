import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MailService } from '../mail.service';
@Component({
   selector: 'app-output-form',
   template: `
 <br><br><br>
 {{"mof: "+ messageOutputForm }}<br>
 
 <input 
   #myInput  
   type="text" 
   [(ngModel)]="messageOutputForm">
 
 <button (click)="outputEmit.emit({text: messageOutputForm})" >
     Click me!
 </button>

 
  `,
   styles: []
})
export class OutputFormComponent implements OnInit {

   @Input() messageOutputForm;
   @Output() outputEmit = new EventEmitter<any>();
 

   constructor(private mail: MailService) { }

   ngOnInit() { }

   

}


