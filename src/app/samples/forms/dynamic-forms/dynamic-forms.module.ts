import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'


import {DynamicFormsComponent} from './dynamic-forms.component'
import {QuestionService} from './question.service'
import {QuestionControlService} from './question-control.service'
import {DynamicFormQuestionComponent} from './dynamic-form-question.component'


@NgModule({
  declarations: [
    DynamicFormsComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'forms/dynamic-forms', component: DynamicFormsComponent},
    ]),
    ReactiveFormsModule
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ]
})

export class DynamicFormsModule {

}
