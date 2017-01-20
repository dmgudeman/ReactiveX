import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';
@Component({
  selector: 'app-root',
  template: `
<div>
  <ul>
  <li *ngFor="let message of mail.messages">{{message}}</li>
  </ul>
  
  <app-simple-form  
        *ngFor="let messageForNgFor of mail.messages"           
        [messageSimpleFormInput]="messageForNgFor.text"
        >
  </app-simple-form>
<!--  *******************************************************-->
  <h1>Start Output Form</h1>
  <ul>
  <li *ngFor="let messOutputNgFor of mail.out_messages">{{messOutputNgFor.text}}</li>
  </ul>
  <app-output-form
        *ngFor="let messOutputNgFor of mail.out_messages"
        [messageOutputForm]="messOutputNgFor.text"
        (outputEmit)="onOutputEmit(messOutputNgFor.id, $event.text)"
        ></app-output-form>
</div>

<!-- here the messOutputNgFor.id gets the id and the $event.text gets the updated
    text from the event emitted which carries the new text from the input box-->
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private mail: MailService
  ) { }
  onOutputEmit(id, text) {
    this.mail.updateInMail(id, text);
    console.log(event);
  }
}