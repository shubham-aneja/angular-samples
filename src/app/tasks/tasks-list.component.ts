import {Component, Input} from '@angular/core'
//import {ITask} from './task'
import {ITask} from './task'


@Component({
  selector: 'tasks-list',
  moduleId: module.id,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  @Input() enterTaskTitle:string = 'Enter new tasksdf';
  taskTitle = '';
  taskList:ITask[]=[];

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
