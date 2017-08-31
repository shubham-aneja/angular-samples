import {Component, Input} from '@angular/core'


@Component({
  selector: 'template-syntax',
  moduleId: module.id,
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css'],
})

export class TemplateSyntaxComponent {
  title:string = 'Template Syntax';

  getData(one, two, three) {
    console.log(' args .... ', one, two, three)
  }

  /*for event binding value assignment*/
  clicked:any;

  /*for trackBy*/
  heroes:any[] = [
    {name: 'Bran', id: 1},
    {name: 'Chandler', id: 12},
    {name: 'Ross', id: 2}
  ];

  /*for trackby example of *ngFor*/
  trackByHeroes(index:number, hero:any):number {
    return hero.id;
  }


  /*for selfNavigationOperator*/
  Person:any={name: 'Shubham'}

}


@Component({
  selector: 'child',
  template: `<div>
  <h2>My father named me [{{name}}]</h2>
  </div>`
})

export class ChildComponent {

  private _name:any = '';
  @Input()

  set name(newName:any) {
    console.log(`getting name .. [name:${newName}] and [typeof name:${typeof newName }]`)
    this._name = newName
  }

  get name() {
    console.log(`getting name .. [name:${this._name}] and [typeof name:${typeof this._name }]`)
    return this._name || '<no-name>'
  }

}

