import {Component, Input, OnInit} from '@angular/core'
import {TaskService} from './task.service'
import {ITask} from './task'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'tasks-list',
  moduleId: module.id,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent implements OnInit {
  @Input() enterTaskTitle:string = 'Enter new task';
  taskTitle = '';
  taskList:ITask[] = [];
  status:string = 'all';
  sub;
  taskSearch:string = '';

  constructor(private _taskService:TaskService, private _route:ActivatedRoute) {
  }

  ngOnInit() {
    this.taskList = this._taskService.getTasks()
    this.sub = this._route.params.subscribe(params => {
      this.status = params.status
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onKeyup(value:string):void {
    value.trim()
    if (!value)return;
    //this.taskList.unshift(value)
    this.taskList.push({title: value, isCompleted: false, priority: 1})
    this.taskTitle = '';
  }

  toggleCompletionStatus(task:ITask):void {
    task.isCompleted = !task.isCompleted;
  }
}
