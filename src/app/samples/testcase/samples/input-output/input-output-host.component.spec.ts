import {DebugElement, Component} from '@angular/core'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import { By }              from '@angular/platform-browser';

import {click} from'../../customEvents'


import {DashboardHeroComponent} from './hero-app/hero.component'

import {Hero} from './hero-app/hero'


@Component({
  template: `
    <dashboard-hero [hero]="hero" (selected)="onSelected($event)">
    </dashboard-hero>
  `
})
class TestHostComponent {
  hero = new Hero(42, 'Test name');
  selected:Hero;

  onSelected(hero:Hero) {
    this.selected = hero
  }
}

describe('input-output with TestHostComponent', () => {
  let component:DashboardHeroComponent;
  let fixture:ComponentFixture<TestHostComponent>;
  let testHost;
  let heroEl:DebugElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardHeroComponent, TestHostComponent]
    });
    /*crete TestHostComponent instead of DashboardHeroComponent*/
    fixture = TestBed.createComponent(TestHostComponent)
    testHost = fixture.componentInstance;
    heroEl = fixture.debugElement.query(By.css('.hero'));
    fixture.detectChanges();
  })

  /*The tests themselves are almost identical to the stand-alone version:*/

  it('should display hero name- TestHost', ()=> {
    const expectedName = testHost.hero.name;
    console.log('testHost', heroEl.nativeElement.textContent)
    expect(heroEl.nativeElement.textContent).toContain(expectedName)
  })

  it('should update selectedHero when selected- TestHost', ()=> {
    click(heroEl);
    expect(testHost.selected).toBe(testHost.hero)

  })


});

