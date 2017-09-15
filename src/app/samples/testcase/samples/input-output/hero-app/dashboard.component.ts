import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Hero} from './hero'
import {heroes} from './hero-data'

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
