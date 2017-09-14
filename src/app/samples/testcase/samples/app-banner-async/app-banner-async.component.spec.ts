/*todo- WebPack developers need not call compileComponents because it inlines templates and css as part of the
    automated build process that precedes running the test.*/

import {ComponentFixture, TestBed} from '@angular/core/testing'
import {DebugElement} from '@angular/core'
import {ComponentFixtureAutoDetect} from '@angular/core/testing'
import { By }              from '@angular/platform-browser';

import {async} from '@angular/core/testing'

import {AsyncBannerComponent} from './app-banner-async.component'


describe('Async Banner component', ()=> {

  let comp:AsyncBannerComponent;
  let fixture:ComponentFixture<AsyncBannerComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  /*The test setup for AsyncBannerComponent must give the Angular template compiler time to read the files.
   The logic in the beforeEach of the previous spec is split into two beforeEach calls.
   The first beforeEach handles asynchronous compilation.*/

  beforeEach(async(()=> {
      TestBed.configureTestingModule({
        declarations:[AsyncBannerComponent],
        providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]

      }).compileComponents();
      /*todo- All this is necessary in order to call the asynchronous TestBed.compileComponents method.*/
      })
  );
  /* When compileComponents completes, the external templates and css files have been "inlined" and
      TestBed.createComponent can create new instances of AsyncBannerComponent synchronously.
    WebPack developers need not call compileComponents because it inlines templates and css as part of the automated
      build process that precedes running the test
    Calling compileComponents closes the current TestBed instance to further configuration. You cannot call any more
      TestBed configuration methods, not configureTestingModule nor any of the override... methods. The TestBed throws an error if you try.*/


  beforeEach(()=> {
/*This before each will execute after first async beforeEach execution,
* Otherwise, this code can also be written in then clause of compileComponents*/
    fixture = TestBed.createComponent(AsyncBannerComponent)
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Async - It should display original title with auto change detection', () => {

    expect(el.textContent).toContain(comp.title)

  })

  it('Async - It should display updated title ', () => {
    comp.title = 'Updated title'
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title)
  })


});


