import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/observable/from';
import { DumbComponent } from './dumb.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <ul>
    <dumb *ngFor="let message of messages"
      [message]="message">
    </dumb>
  </ul>
  `,
})
export class AppComponent {
  name = 'Angular';
  messages: string[] = ["hi sparky", "hi lancelot", "knife"]


  // observable = Observable.from([1, 2, 3])
  //       .subscribe(x => console.log(x + 3));

  //  mouse = Observable.from(document.onkeyup.


}
