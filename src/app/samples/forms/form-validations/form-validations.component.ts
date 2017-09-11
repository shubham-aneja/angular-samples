import {Component } from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'

import {forbiddenNameValidator} from './forbidden-name.directive'

@Component({
  selector: 'form-validations',
  moduleId: module.id,
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css'],
})

export class FormValidationsComponent {
  title:string = 'Form Validations';
  hero = {name: 'shubham'}

  /*for reactive form*/
  reactiveForm:FormGroup;
  heroForm:FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
        reactiveName: new FormControl(
          'shubham Aneja',
          [
            Validators.required,
            Validators.minLength(4),
            forbiddenNameValidator(/bob/i)
          ]
        )
      }
    );

  }

  get reactiveName() {
    console.log('reactive name get called ...')
    return this.reactiveForm.get('reactiveName');
  }


}
