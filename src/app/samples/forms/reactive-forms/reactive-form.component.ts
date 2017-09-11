import {Component } from '@angular/core'
import {FormGroup, FormControl, FormBuilder,
  Validators} from '@angular/forms'

import { Hero, Address, states } from './data-model';

@Component({
  selector: 'reactive-form',
  moduleId: module.id,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})

export class ReactiveFormComponent {
  title:string = 'Reactive Form';

  /*Only FormControl*/
  name = new FormControl()

  /*FormControl and FormGroup*/
  heroForm = new FormGroup({
    name: new FormControl()
  });

  /*FormBuilder and FormGroup .. FormControl*/
  formBuilderForm:FormGroup;

  /*FormBuilder with multiple FormControls*/
  formBuilderForm2: FormGroup;
  states : any[]=states;

  /*formBuilder with nested Formgroups*/
  formBuilderForm3: FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm();

  }

  createForm() {
    /*Formbuilder with single formcontrol*/
    this.formBuilderForm = this.fb.group({
      formBuilderHeroName: ['Tan tana', Validators.required]
    })

    /*Formbuilder with multiple formControl*/
    this.formBuilderForm2 = this.fb.group({
      name: ['', Validators.required ],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    })

    /*Formbuilder with nested FormGroups*/
    this.formBuilderForm3 = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required ],
      //address: this.fb.group({ // <-- the child FormGroup
      //  street: '',
      //  city: '',
      //  state: '',
      //  zip: ''
      //}),
      /*OR */
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });

}
}
