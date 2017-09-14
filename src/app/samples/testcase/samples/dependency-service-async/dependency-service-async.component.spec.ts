import {ComponentFixture, TestBed} from '@angular/core/testing'
import {DebugElement} from '@angular/core'
import {ComponentFixtureAutoDetect} from '@angular/core/testing'
import { By }              from '@angular/platform-browser';
import {async, tick, fakeAsync} from '@angular/core/testing'

import { TwainComponent } from './dependency-service-async.component';
import { TwainService }       from './twain.service';


describe('Async service', () => {
  let twainService:TwainService;
  let component:TwainComponent;
  let fixture:ComponentFixture<TwainComponent>;
  let debugElement:DebugElement;
  let element:HTMLElement;
  let spy;
  let testQuote = 'Leave and let others live'

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [TwainComponent],
      providers: [TwainService]
    });

    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;


    twainService = fixture.debugElement.injector.get(TwainService);
    spy = spyOn(twainService, 'getQuote').and.returnValue(Promise.resolve(testQuote))

    debugElement = fixture.debugElement.query(By.css('.twain'));

    element = debugElement.nativeElement;

  })

  it('should not show quote before OnInit', () => {
    expect(element.textContent).toBe('', 'nothing displayed')
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called')
  })

  it('should not show quote after OnInit', () => {
    fixture.detectChanges();
    expect(element.textContent).toBe('...', 'Must show "..." before quote has been received')
    expect(spy.calls.any()).toBe(true, 'Show made a call for getQuote')
  })

  it('should show quote after getQuote promise resolved (async)', async(()=> {
    fixture.detectChanges();

    /*wait for async getQuote*/
    fixture.whenStable().then(()=> {
      fixture.detectChanges();
      expect(element.textContent).toBe(testQuote)
    })
    /*When stable - the whenStable promise resolves when all pending asynchronous activities within this test complete
    * the getQuote promise is accessible to the async test zone, which intercepts all promises issued within the
    * async method call no matter where they occur.
    *
    * */
  }))


  it('it should show quote after getQuote promise (fakeAsync)', fakeAsync(()=> {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    console.log('element.textContent', element.textContent)
    expect(element.textContent).toBe(testQuote)
  }));
/*fakeAsync
 The fakeAsync function enables a linear coding style by running the test body in a special fakeAsync test zone.
  There are limitations. For example, you cannot make an XHR call from within a fakeAsync.*/

  /*tick
  * Calling tick() simulates the passage of time until all pending asynchronous activities finish, including the
  *   resolution of the getQuote promise in this test case.
  *
  * */

  it('should show quote after getQuote promise (done)', (done: any) => {
    fixture.detectChanges();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(element.textContent).toBe(testQuote)
      done();
      /*If we skip this done, this error will come :-
      * [Async service should show quote after getQuote promise (done) FAILED]
       */
      /*Done
      * When to use -  you can't call async or fakeAsync when testing code that involves the intervalTimer, as is
      *               common when testing async Observable methods*/
    })
  })
});








