import {Component, Input} from '@angular/core'

const comps = [
  {title: 'Sample task', isCompleted: true},
  {title: 'Sample task 2'}
  ]

@Component({
  selector: 'tasks-list',
  moduleId: module.id,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  @Input() enterTaskTitle:string='Enter new tasksdf';
  taskTitle = '';
  taskList:any[] = [
    {title: 'Sample task', isCompleted: true},
    {title: 'Sample task 2'}
  ];

  onKeyup(value):void {
    value.trim()
    if (!value)return;
    //this.taskList.unshift(value)
    this.taskList.push({title: value})
    this.taskTitle = '';
  }

  toggleCompletionStatus(task: any):void {
    task.isCompleted = !task.isCompleted;
  }
}
