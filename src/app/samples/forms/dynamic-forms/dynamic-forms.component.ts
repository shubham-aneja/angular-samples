import {Component, Input} from '@angular/core'
import {FormGroup} from '@angular/forms'

import {QuestionService} from './question.service'
import {QuestionBase} from './question-base'

import {QuestionControlService} from './question-control.service'

@Component({
  selector: 'dynamic-forms',
  moduleId: module.id,
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css'],
})

export class DynamicFormsComponent {
  title:string = 'Forms - Dynamic Forms';
  questions:QuestionBase<any>[];
  form: FormGroup;
  payLoad:string = '';

  constructor(private service:QuestionService,
              private questionControl: QuestionControlService) {

  }
  ngOnInit(){
    /*Todo -In real application, this data will be passed from parent component*/
    this.questions = this.service.getQuestions()
    this.form = this.questionControl.toFormGroup(this.questions)
  }

  onSubmit(){
    //console.log('111 onSubmit called in form')
      this.payLoad = JSON.stringify(this.form.value);

  }

}
