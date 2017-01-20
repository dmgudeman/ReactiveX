import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SelectControlComponent } from './select-control/select-control.component';
import { ReactiveSelectComponent } from './reactive-select/reactive-select.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectControlComponent,
   
    ReactiveSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
