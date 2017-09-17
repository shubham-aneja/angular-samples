import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Hero} from './hero'
import {heroes} from './hero-data'

import { Router }            from '@angular/router';
import { HeroService }         from './hero.service';

@Component({
  selector: 'routing-dashboard',
  template: `<div>
  <div *ngFor="let hero of heroes" >
  <routing-dashboard-hero (selected)="gotoDetail($event)" [hero]="hero">
  </routing-dashboard-hero>
  </div>
  </div>`
})

export class RoutingDashboardComponent {
  heroes:Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit( ) {
    this.heroes = heroes;
  }

  gotoDetail(hero: Hero) {
    let url = `/routing-testing-detail/${hero.id}`;
    this.router.navigateByUrl(url);
  }

}

