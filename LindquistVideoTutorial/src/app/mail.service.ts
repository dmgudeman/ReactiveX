import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  out_messages = [
    {id:0, text:'message1'},
    {id:1, text:'message2'},
    {id:2, text:'message3'},
    {id:3, text:'message4'},
  ]
  messages = [
    'message1',
    'message2',
    'message3',
    'message4'
  ]

  updateInMail(id, text){
    this.out_messages = this.out_messages.map(m=>
       m.id === id ? {id, text} : m)
  }
  // update(id, text){
  //   this.messages = this.messages.map(m=>
  //      m.id === id ? {id, text} : m)
  // }
  // message = "you've  got mail"
  constructor() { }

}
