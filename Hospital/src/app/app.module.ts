import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormsModule } from '@angular/forms';
import { AdressListComponent } from './adress-list/adress-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    AddPersonComponent,
    AdressListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
