import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';

import {Hero} from './hero'
import {heroes} from './hero-data'
//import { HeroService } from './hero.service';

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
  //constructor(
  //  private heroService: HeroService,
  //  private router: Router) {
  //}

  click() {

    this.selected.emit(this.hero);
  }
}
