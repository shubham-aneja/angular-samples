import {ComponentFixture, TestBed} from '@angular/core/testing'
import {DebugElement} from '@angular/core'
import {ComponentFixtureAutoDetect} from '@angular/core/testing'
import { By }              from '@angular/platform-browser';

import {BannerComponent} from './app-banner.component'

//describe('Banner component- Not auto change detection',()=>{
//
//  let comp: BannerComponent;
//  let fixture: ComponentFixture<BannerComponent>;
//  let de: DebugElement;
//  let el: HTMLElement;
//
//  beforeEach(()=>{
//
//    TestBed.configureTestingModule({
//      declarations: [BannerComponent]
//    })
//    /*todo -TestBed - TestBed is the first and most important of the Angular testing utilities. It creates an Angular
//     todo-   testing module—an @NgModule class—that you configure with the configureTestingModule method to produce the module
//     todo - environment for the class you want to test*/
//
//    fixture = TestBed.createComponent(BannerComponent)
//    /*todo --  creates an instance of BannerComponent and returns a component test fixture. */
//
//    /*fixture -  The fixture provides access to the component instance itself and to the DebugElement, which is
//     a handle on the component's DOM element.*/
//
//    /*todo --  The createComponent method closes the current TestBed instance to further configuration. You cannot call
//     any more TestBed configuration methods, not configureTestingModule nor any of the override... methods. If you try, TestBed throws an error.
//     */
//
//    comp = fixture.componentInstance;
//
//
//    de = fixture.debugElement.query(By.css('h1'));
//    //query
//    /* todo - The query method takes a predicate function and searches the fixture's entire DOM tree for the first element
//     that satisfies the predicate. The result is a different DebugElement, one associated with the matching DOM element*/
//
//    /*todo -The queryAll method returns an array of all DebugElements that satisfy the predicate.*/
//    //By
//    /*Its By.css static method produces a standard CSS selector predicate that filters the same way as a
//     jQuery selector.*/
//    el = de.nativeElement;
//
//
//
//  });
//
//  it('It should display blank title, since binding is not done', () => {
//    expect(el.textContent).toEqual('') /*No binding has been done yet*/
//    /*This behavior is intentional. It gives the tester an opportunity to inspect or change the state of the component before Angular initiates data binding or calls lifecycle hooks.*/
//  })
//
//  it('It should display original title', () => {
//    fixture.detectChanges();
//    expect(el.textContent).toContain(comp.title)
//  })
//  it('It should display updated title ', () => {
//    comp.title = 'Haah Testing updated the title'
//    fixture.detectChanges();
//    expect(el.textContent).toContain(comp.title)
//  })
//
//});

describe('Banner component - Auto change detect', ()=> {

  let comp:BannerComponent;
  let fixture:ComponentFixture<BannerComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(()=> {

    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    });

    fixture = TestBed.createComponent(BannerComponent)
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;


  });

  it('It should display original title with auto change detection', () => {
    expect(el.textContent).toContain(comp.title)

  })

  it('It should display updated title ', () => {
    comp.title = 'Haah Testing updated the title'
    fixture.detectChanges();
    // need detectChanges because Angular didn't hear the change :(
    expect(el.textContent).toContain(comp.title)
  })
  /*The ComponentFixtureAutoDetect service responds to asynchronous activities such as promise resolution, timers, and
  DOM events. But a direct, synchronous update of the component property is invisible.
  The test must call fixture.detectChanges() manually to trigger another cycle of change detection.*/




});


