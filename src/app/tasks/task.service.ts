import {Injectable} from '@angular/core'
import {ITask} from './task'
import { Observable } from 'rxjs/Observable';
import {Http, Headers, Response} from '@angular/http'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import 'rxjs/add/operator/toPromise';

import uuid from 'uuid'


const SAVED_TASKS = [
  {id: uuid.v4(), title: 'saved task1', isCompleted: false, priority: 2.5},
  {id: uuid.v4(), title: 'saved task2', isCompleted: true, priority: 2.5},
  {id: uuid.v4(), title: 'saved task3', isCompleted: false, priority: 2.5},
  //{title: 'saved task4'},/*todo this will give error, since it is now verifying with the interface definition */
]


@Injectable()
export class TaskService {
  private tasksUrl = 'http://localhost:3300/tasks'

  constructor(private http:Http) {

  }

  getTasks():ITask[] {
    return SAVED_TASKS

    //this.http.get(this.tasksUrl)
    //  .toPromise()
    //  .then(response => response.json())
    //  .then( (taskData)=> {console.log('111 taskData ... ', taskData)})
    //.catch(this.handleError)
    //  return SAVED_TASKS
  }

  handleError(error: any): Promise<any> {
    console.log('error while calling get tasks api ', error)
    return Promise.reject(error.message || error)
  }
  //getTasksFromObservable():Observable<ITask>[] {

  //  return this._http.get(dummyUrl)
  //  .map( () => {})
  //}

}


/*https://www.google.com*/
