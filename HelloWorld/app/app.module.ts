import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DumbComponent } from './dumb.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: 
  [ 
    AppComponent,
    DumbComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
