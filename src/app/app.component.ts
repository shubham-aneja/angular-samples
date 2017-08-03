import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title:string = 'Todo manager';
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
