import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormValidationsComponent} from './form-validations.component'

import {ForbiddenValidatorDirective} from './forbidden-name.directive'

@NgModule({

  declarations: [
    FormValidationsComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'forms/form-validations', component: FormValidationsComponent},
    ]),
    ReactiveFormsModule,
    FormsModule
  ]
})

export class FormValidationsModule {
}
