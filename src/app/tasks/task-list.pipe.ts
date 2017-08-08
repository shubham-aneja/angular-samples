import {PipeTransform, Pipe} from '@angular/core';
import {ITask} from './task'


@Pipe({name: 'taskFilter'})
export class FilterTasks implements PipeTransform {

  transform(tasks: ITask[], status: string, searchText: string): ITask[]{
    let filteredTasks = undefined ;

    /*check for status match*/
    if(!status || status === 'all') {
      filteredTasks = tasks
    } else {
      filteredTasks = tasks.filter( task => task.isCompleted == (status == 'completed'))
    }

    /*Now filter based on value entered by user*/
    if(searchText) {
      filteredTasks = filteredTasks.filter( task => (task.title.toLocaleLowerCase().indexOf(searchText.trim().toLocaleString()) >= 0  ))
    }
    return filteredTasks
  }
}
