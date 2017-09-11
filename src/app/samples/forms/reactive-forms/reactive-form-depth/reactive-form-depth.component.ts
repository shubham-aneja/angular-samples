import {Component } from '@angular/core'
import {FormGroup, FormControl, FormBuilder,
  Validators} from '@angular/forms'

import { Hero, Address, states } from '../data-model';

@Component({
  selector: 'reactive-form-depth',
  moduleId: module.id,
  templateUrl: './reactive-form-depth.component.html'})

export class ReactiveFormDepthComponent {
  title:string = 'Reactive Form Depth';

}
