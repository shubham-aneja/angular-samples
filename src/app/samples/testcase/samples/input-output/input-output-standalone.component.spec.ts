import {ComponentFixture, TestBed} from '@angular/core/testing'
import {DebugElement} from '@angular/core'
import { By }              from '@angular/platform-browser';

import {click} from'../../customEvents'


import {DashboardHeroComponent} from '../../hero-app/hero.component'

import {Hero} from '../../hero-app/hero'


describe('Input output of a component', ()=> {
  let component:DashboardHeroComponent;
  let fixture:ComponentFixture<DashboardHeroComponent>;
  let heroEl:DebugElement;
  let expectedHero:Hero;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [DashboardHeroComponent]
    })

    fixture = TestBed.createComponent(DashboardHeroComponent)
    component = fixture.componentInstance;
    heroEl = fixture.debugElement.query(By.css('.hero'))
    expectedHero = new Hero(42, 'shubham');

    component.hero = expectedHero;
    fixture.detectChanges();
  })

  it('should display id 42 and name shubham', ()=>{
    let expectedIdValue = expectedHero.id;
    let expectedNameValue = expectedHero.name;
    expect(heroEl.nativeElement.textContent).toContain(expectedIdValue, 'should contain id');
    expect(heroEl.nativeElement.textContent).toContain(expectedNameValue, 'should contain name');
  })

  it('should raise selected event when clicked', ()=>{
    let selected: Hero;
    component.selected.subscribe((hero: Hero)=>selected = hero);

    click(heroEl); /*OR - heroEl.triggerEventHandler('click', null);*/


    /*The test assumes (correctly in this case) that the runtime event handler—the component's click() method—doesn't
      care about the event object.*/
    expect(selected).toBe(expectedHero)

  })

});


