import {ComponentFixture, TestBed} from '@angular/core/testing'
import {DebugElement} from '@angular/core'
import {ComponentFixtureAutoDetect} from '@angular/core/testing'
import { By }              from '@angular/platform-browser';

import {UserService} from './user-service.service'
import {WelcomeComponent} from './dependency-service-sync.component'


describe('Service dependancy - Welcome component', () => {
  let userService:UserService;
  let comp:WelcomeComponent;
  let fixture:ComponentFixture<WelcomeComponent>;
  let de:DebugElement;
  let el:HTMLElement;
  let userServiceStub;

  beforeEach(() => {
    // stub UserService for test purposes
    userServiceStub = {
      isLoggedIn: true,
      user: {name: 'Shubh'}
    };

    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [{provide: UserService, useValue: userServiceStub}]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    comp = fixture.componentInstance;

    // UserService from the root injector
    userService = TestBed.get(UserService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });
  it('it should be the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', 'Welcome ...');
    expect(content).toContain('Shubh', 'Expect name');
  })

  it('it should welcome 3pillar', () => {
    userService.user.name = '3pillar';
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome, 3pillar');
  })

  it('it should request login if not logged in', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  })
});
