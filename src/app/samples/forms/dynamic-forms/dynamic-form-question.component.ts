import {Component, Input} from '@angular/core'
import {FormGroup} from '@angular/forms'

import {QuestionBase} from './question-base'


@Component({
  selector: 'dynamic-form-question',
  templateUrl:'./dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question:QuestionBase<any>;
  @Input () form:FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor() {
    //console.log('question and form is', this.question, this.form)
    /*undefined at the time of construction*/
  }

  ngOnChanges() {
    //console.log('question and form is', this.question, this.form)
  }

}
