import {Injectable} from '@angular/core'
import {ITask} from './task'
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

const dummyUrl = 'https://www.google.com'

const SAVED_TASKS = [
  {title: 'saved task1', isCompleted: false},
  {title: 'saved task2', isCompleted: true},
  {title: 'saved task3', isCompleted: false},
  //{title: 'saved task4'},/*todo this will give error, since it is now verifying with the interface definition */
]

@Injectable()
export class TaskService {

  constructor(private _http: Http) {

  }

  getTasks():ITask[] {
    return SAVED_TASKS
  }

  //getTasksFromObservable():Observable<ITask>[] {

  //  return this._http.get(dummyUrl)
  //  .map( () => {})
  //}

}


/*https://www.google.com*/
