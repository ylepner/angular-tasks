import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { Task2StoreQueueComponent } from './task2-store-queue/task2-store-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2StoreQueueComponent
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
