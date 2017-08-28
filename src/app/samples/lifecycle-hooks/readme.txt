Shree Ganesh 17 Aug

Life cycle hooks
	Ref : - https://angular.io/guide/lifecycle-hooks
ngDoCheck
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;



Use Directive with lifecycle hooks for html built in components and third party components life cycle hacks
	Eg
		<div *ngFor="let hero of heroes" mySpy class="heroes">
		  {{hero}}
		</div>

Initialization:-
	do not use constructor for complex initialization, instead go with ngOnInit

OnInit()

	Use ngOnInit() for two main reasons:

	To perform complex initializations shortly after construction.
	To set up the component after Angular sets the input properties.


ngOnDestroy
	Unsubscribe from Observables and DOM events. Stop interval timers.
	Unregister all callbacks that this directive registered with global or application services.
	You risk memory leaks if you neglect to do so.

OnChanges()

	Angular calls its ngOnChanges() method whenever it detects changes to input properties of the component (or directive).
	ngOnChanges(changes: SimpleChanges) {
	  for (let propName in changes) {
		let chng = changes[propName];
		let cur  = JSON.stringify(chng.currentValue);
		let prev = JSON.stringify(chng.previousValue);
		this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
	  }
	}

DoCheck()

	Use the DoCheck hook to detect and act upon changes that Angular doesn't catch on its own.
	Use this method to detect a change that Angular overlooked.

	This hook is called with enormous frequency—after every change detection cycle no matter where the change occurred.
	It's called over twenty times in this example before the user can do anything.

	Implementation
		In parent
			export class DoCheckParentComponent {
			  title = 'DoCheck';
			  @ViewChild(DoCheckComponent) childView: DoCheckComponent;

			}

		In child class

			export class DoCheckComponent implements DoCheck {
			  @Input() hero: Hero;
			  @Input() power: string;

			  ngDoCheck() {

				if (this.hero.name !== this.oldHeroName) {
				  this.changeDetected = true;
				  this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
				  this.oldHeroName = this.hero.name;
				}

				this.changeDetected = false;
			  }


	AfterViewInit and AfterViewChecked

		export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
		  private prevHero = '';

		  // Query for a VIEW child of type `ChildViewComponent`
		  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

		  ngAfterViewInit() {
			// viewChild is set after the view has been initialized
			this.logIt('AfterViewInit');
			this.doSomething();
		  }

		  ngAfterViewChecked() {
			// viewChild is updated after the view has been checked
			if (this.prevHero === this.viewChild.hero) {
			  this.logIt('AfterViewChecked (no change)');
			} else {
			  this.prevHero = this.viewChild.hero;
			  this.logIt('AfterViewChecked');
			  this.doSomething();
			}
		  }
		  // ...
		}


