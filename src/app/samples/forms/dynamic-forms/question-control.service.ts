import {Injectable} from '@angular/core'
import {QuestionBase} from './question-base'

import {FormGroup, FormControl, Validators} from '@angular/forms'

@Injectable()
export class QuestionControlService {

  /*WIll receive an array of questions and
  *return FormGroup corresponding to that input array
   *  */
  toFormGroup(questions:QuestionBase<any>[]) {
    const FormControls = {}
    questions.forEach((question:QuestionBase<any>) => {
      FormControls[question.key] = new FormControl(
        question.value || '',
        (question.required ? Validators.required : undefined)
      )
    });

    return new FormGroup(FormControls)

  }
}

