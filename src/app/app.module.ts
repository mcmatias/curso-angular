import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { warningAlertComponent } from './WarningAlert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { Tarefa3Component } from './tarefa3/tarefa3.component';

@NgModule({
  declarations: [
    AppComponent,
    warningAlertComponent,
    SuccessAlertComponent,
    Tarefa3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
