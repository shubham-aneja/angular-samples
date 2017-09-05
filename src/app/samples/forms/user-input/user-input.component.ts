import {Component, Input} from '@angular/core'

@Component({
  selector: 'user-input',
  moduleId: module.id,
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})

export class UserInputComponent {
  title:string = 'Forms - UserInput';
  refVariableName = 'hello';

}
