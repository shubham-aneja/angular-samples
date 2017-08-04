import { Component} from '@angular/core';
import {TaskService} from './tasks/task.service'
import {Http} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TaskService/*, Http*/]
})

export class AppComponent {
  title:string = 'Todo manager';
}
