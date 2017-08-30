import {Component, Input, ViewChild} from '@angular/core'
import {CompInterLocalVar} from './comp-inter-local-var.component'

@Component({
  selector: 'component-interactions',
  moduleId: module.id,
  templateUrl: './component-interactions.component.html',
  styleUrls: ['./component-interactions.component.css'],
})

export class ComponentInteractionsComponent {
  title:string = 'Component Interactions';
  children:any[] = [
    {name: 'Ban  ', age: 10, id: 1},
    {name: '  Robb', age: 20, id: 2},
    {name: 'Jo  hn', age: 20, id: 3}
  ]

  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  onAgeUpdate(id) {
    this.children.forEach(child => {
      if (child.id == id)
        child.age++;
    })
  }


  @ViewChild(CompInterLocalVar)
  private compInterLocalVar:CompInterLocalVar;
  private viewChildSeconds = () =>{};

  /*for @View Child*/
  start():void {
    this.compInterLocalVar.start();
  }

  stop():void {
    console.log('calling stop of child')
    this.compInterLocalVar.stop();
  }

  ngAfterViewInit() {
    setTimeout(() => {this.viewChildSeconds = ()=>this.compInterLocalVar.seconds},0)
    // but wait a tick first to avoid one-time devMode
    /*viewChildSeconds is a function since it has to get value from compInterLocalVar all the times*/
  }
}



