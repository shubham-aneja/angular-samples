import {ComponentFixture, TestBed, inject} from '@angular/core/testing'
import {DebugElement} from '@angular/core'
import { By }              from '@angular/platform-browser';
import { Router }            from '@angular/router';
import { Http } from '@angular/http';

import {click} from'../../customEvents'

import {RoutingDashboardHeroComponent} from './hero-app/hero.component'
import {RoutingDashboardComponent} from './hero-app/dashboard.component'
import {Hero} from './hero-app/hero'
import { HeroService }         from './hero-app/hero.service';

const Dummy_Hero = {id: 15, name: 'Magneta'};

class RouterStub {
  navigateByUrl(url:string) {
    return 'this string has no significance, we are mean to intercept the arguments supplied ';
  }
}

class FakeHeroService {
  getHeroStatically(id:number) {
    console.log('1111111 haaaaaaaaaaaaaaaaaaaaaaa')
    return [];
  }
}


describe('Basic routing testing', () => {
  let comp:RoutingDashboardComponent;
  let fixture:ComponentFixture<RoutingDashboardComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [RoutingDashboardComponent, RoutingDashboardHeroComponent],
      providers: [
        //{provide: HeroService, useClass: FakeHeroService},
        {provide: HeroService},
        {provide: Router, useClass: RouterStub}
      ]
    })
    fixture = TestBed.createComponent(RoutingDashboardComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('should tell ROUTER to navigate when hero clicked',
    inject([Router], (router:Router) => {

      const spy = spyOn(router, 'navigateByUrl');
      const firstHero = fixture.debugElement.query(By.css('.hero'))
      click(firstHero);
      const navArgs = spy.calls.first().args[0];
      const id = comp.heroes[0].id;
      expect(navArgs).toBe('/routing-testing-detail/' + id,
        'should nav to HeroDetail for first hero');
    }));
})



