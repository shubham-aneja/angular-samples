import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {TaskService} from './tasks/task.service'

import { AppComponent } from './app.component';
import {TasksListComponent} from './tasks/tasks-list.component'


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //providers:[TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
