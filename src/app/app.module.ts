import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { DynamicformComponent } from './dynamicform/dynamicform.component';
import{ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { DynamicformeditComponent } from './dynamicformedit/dynamicformedit.component';

import { TestingComponent } from './testing/testing.component'; 
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    
    DynamicformComponent,
    routingComponents,
    
    DynamicformeditComponent,
    TestingComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,CommonModule,
    BsDatepickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
