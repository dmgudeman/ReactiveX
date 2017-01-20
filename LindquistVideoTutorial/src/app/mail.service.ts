import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    'message1',
    'message2',
    'message3',
    'message4'

  ]
  message = "you've  got mail"
  constructor() { }

}
