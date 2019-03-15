import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Log-in/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalBasic} from './Log-in/login/modal-basic';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
