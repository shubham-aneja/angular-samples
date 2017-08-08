import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import {TaskService} from './tasks/task.service'

import { AppComponent } from './app.component';
import {TasksListComponent} from './tasks/tasks-list.component'
import {StarComponent} from './shared/star.component'

import {FilterTasks} from './tasks/task-list.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    FilterTasks,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: ':status', component: TasksListComponent },
      {path: '**', component: TasksListComponent  }
    ])
  ],
  //providers:[TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
