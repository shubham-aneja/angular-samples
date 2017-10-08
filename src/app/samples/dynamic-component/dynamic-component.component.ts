import {Component} from '@angular/core'

@Component({
  selector: 'dynamic-component',
  moduleId: module.id,
  templateUrl: './dynamic-component.component.html'
})

export class DynamicComponent {
  title:string = 'Dynamic Component';

}
