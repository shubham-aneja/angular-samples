import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Hero} from '../../hero'
import {heroes} from '../../hero-data'

@Component({
  selector: 'dashboard',
  template: `<div>
  <h2>Hero dashboard</h2>

  <div *ngFor="let hero of heroes" >
  <dashboard-hero (selected)="selected($event)" [hero]="hero">
  </dashboard-hero>

  </div>
  </div>`
})

export class DashboardComponent {
  heroes:Hero[] = heroes;

  selected(hero) {
    console.log('Dashboard - this hero selected', hero)
  }
}

@Component({
  selector: 'dashboard-hero',
  template: `<div (click)="click()" class="hero">
  <div >ID: [{{hero?.id}}]</div>
  <div>NAME: [{{hero?.name}}]</div>
  </div>`
})
export class DashboardHeroComponent {
  @Input() hero:Hero;
  @Output() selected = new EventEmitter<Hero>();

  click() {

    this.selected.emit(this.hero);
  }
}
