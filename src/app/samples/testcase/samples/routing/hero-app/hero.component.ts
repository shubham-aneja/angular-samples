import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Hero} from './hero'
import {heroes} from './hero-data'
//import { HeroService } from './hero.service';
import { HeroService }         from './hero.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Component({
  selector: 'routing-dashboard-hero',
  template: `<div (click)="click()" class="hero abc">
  <div >ID: [{{hero?.id}}]</div>
  <div>NAME: [{{hero?.name}}]</div>
  </div>`
})

export class RoutingDashboardHeroComponent {
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





@Component({
  selector: 'routing-hero-detail',
  template: `<div *ngIf="hero">
  <h2><span>{{hero.name | titlecase}}</span> Details</h2>
  <div>
    <label>id: </label>{{hero.id}}</div>
  <div>
    <label for="name">name: </label>
    <input id="name" [(ngModel)]="hero.name" placeholder="name" />
  </div>
  <button (click)="0">Save</button>
  <button (click)="0">Cancel</button>
</div>`
})

export class RoutingHeroDetail {
  hero:Hero;

  constructor(private heroService:HeroService,
              private route:ActivatedRoute) {
  }

  ngOnInit():void {
    /**
     *With Params
     */
    //this.route.params
    //  .subscribe(params => {
    //  console.log('555 params', params);
    //  console.log('555 this.route.params', this.route.params);
    //  console.log('555 this.route.paramMap', this.route.paramMap);
    //  })
    /**
     *With ParamMap
     */
    this.route.paramMap.subscribe( paramsMap => {
      const id =  paramsMap.get("id");
      this.hero = this.heroService.getHeroStatically(+id);
    })
  }
}
