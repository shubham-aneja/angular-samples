import {Injectable} from '@angular/core'
import {TextboxQuestion} from './question-textbook'
import {DropdownQuestion} from './question-dropdown'


@Injectable()
export class QuestionService {

  getQuestions() {
    const ques = [
      new DropdownQuestion({
        key: 'brave',
        value:'unproven',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })];

    return ques.sort ((a, b) => a.order - b.order);
  }

}
