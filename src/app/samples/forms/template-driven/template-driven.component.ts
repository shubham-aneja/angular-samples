import {Component, Input} from '@angular/core'
import { Hero }    from './hero';

@Component({
  selector: 'template-driven',
  moduleId: module.id,
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})

export class TemplateDrivenComponent {
  title:string = 'Forms - Template Driven';


  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }



  newHero() {
    this.model = new Hero(42, '', '');
  }


}
