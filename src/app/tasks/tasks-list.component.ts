import {Component, Input, OnInit} from '@angular/core'
import {TaskService} from './task.service'
import {ITask} from './task'
import {ActivatedRoute} from '@angular/router'
import uuid from 'uuid'



import 'rxjs/add/operator/switchMap';

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

    this._route.paramMap
      .switchMap((params) => {
        console.log(' params are here again, this time with the help of switchMap ', params)
        /*this console wont get printed untill subscibe is used post to this function call*/
        return ['abc']
      })
      .subscribe(status => {

        console.log('param is', status)
        //return status
      });
      //COmment this out, but remember, subscribe only works with stream respose,
      //  like a [array] or a string(array of character) lets say 'abc' or ['a','b','c']


    /*  this.route.paramMap
     .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
     .subscribe(hero => this.hero = hero);*/

  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onKeyup(value:string):void {
    value.trim()
    if (!value)return;
    this.taskList = [...this.taskList,
      {id: uuid.v4(), title: value, isCompleted: this.status === 'completed', priority: 1}
    ]
    this.taskTitle = '';
  }

  toggleCompletionStatus(task:ITask, index:number = 2):void {
    this.taskList = this.taskList.map((currentTask, currentIndex) => {
      if (task.id === currentTask.id) {
        return {
          ...currentTask,
          isCompleted: !currentTask.isCompleted
        }
      } else {
        return currentTask
      }
    })

  }

  onTaskPriorityPress(priority:number):void {
    console.log(`Task clicked with priority ${priority} in parent/task-list component`)
  }
}
