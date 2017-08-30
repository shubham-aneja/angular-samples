import {Component, Input} from '@angular/core'

@Component({
  selector: 'comp-inter-input-alias',
  moduleId: module.id,
  template: `<div>
  <div class="row">
  <div class="col-sm-12">
  </div>
  <div class="col-sm-6 font-weight-bold">[{{name}}]</div>
  <div class="col-sm-6 font-weight-bold">[{{childAge}}]</div>
  </div>
  </div>  `
})

export class CompInterInputAlias {
  private _name:string='';

  @Input()

  set name (name: string) {
    this._name = name && name.trim();
  }

  get name (): string {
    return this._name;
  }

  @Input("age") childAge:string;
  title:string = 'Component Interactions Child';
}
