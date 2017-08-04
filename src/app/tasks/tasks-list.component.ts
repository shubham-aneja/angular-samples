import {Component, Input, OnInit} from '@angular/core'
import {TaskService} from './task.service'
import {ITask} from './task'


@Component({
  selector: 'tasks-list',
  moduleId: module.id,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent implements OnInit {
  @Input() enterTaskTitle:string = 'Enter new tasksdf';
  taskTitle = '';
  taskList:ITask[] = [];


  constructor(private _taskService:TaskService) {

  }

  ngOnInit() {
    this.taskList = this._taskService.getTasks()
  }

  onKeyup(value:string):void {
    value.trim()
    if (!value)return;
    //this.taskList.unshift(value)
    this.taskList.push({title: value, isCompleted: false})
    this.taskTitle = '';
  }

  toggleCompletionStatus(task:ITask):void {
    task.isCompleted = !task.isCompleted;
  }
}
