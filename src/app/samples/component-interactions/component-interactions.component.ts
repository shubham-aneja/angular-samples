import {Component, Input} from '@angular/core'


@Component({
  selector: 'component-interactions',
  moduleId: module.id,
  templateUrl: './component-interactions.component.html',
  styleUrls: ['./component-interactions.component.css'],
})

export class ComponentInteractionsComponent {
  title:string = 'Component Interactions';
  children:any[] = [
    {name: 'Ban', age: 10},
    {name: 'Robb', age: 20},
    {name: 'John', age: 20}
  ]
}



