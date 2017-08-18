import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpModule }    from '@angular/http';

import {TaskService} from './tasks/task.service'

import { AppComponent } from './app.component';
import {TasksListComponent} from './tasks/tasks-list.component'
import {StarComponent} from './shared/star.component'
import {DummyComponent} from './dummy-component/dummy.component'

import {FilterTasks} from './tasks/task-list.pipe'


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    FilterTasks,
    StarComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'dummy', component: DummyComponent},
      {path: 'taskList/:status', component: TasksListComponent },
      //{path: '**', redirectTo:'taskList/active'},
      {path: '**', component: DummyComponent},
    ]),
    HttpModule
  ],
  //providers:[TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
