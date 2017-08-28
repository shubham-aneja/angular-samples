Shree Ganesh 16 July
*******************************************************
	Template expressions
	<input #heroInput> {{heroInput.value}}


	Template statements
	<form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>
*******************************************************


	<hero-detail [hero]="currentHero"></hero-detail>
*******************************************************
	<div [ngClass]="{'special': isSpecial}"></div>
*******************************************************

	<div (myClick)="clicked=$event" clickable>click me</div> ???
*******************************************************

	Manipulating attribute
	<button [attr.aria-label]="help">help</button>
*******************************************************


	<img [src]="heroImageUrl">

	Some people prefer the bind- prefix alternative, known as the canonical form:
	<img bind-src="heroImageUrl">

*******************************************************
	STYLE

	Style with units
		<button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
		<button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>

	Note that a style property name can be written in either dash-case, as shown above, or camelCase, such as fontSize.
		<button [style.fontSize.%]="!isSpecial ? 150 : 50" >Small</button>


********************************************************
class NgClass, style NgStyle

	the NgClass directive is usually preferred when managing multiple class names at the same time.
	the NgStyle directive is generally preferred when setting several inline styles at the same time.

********************************************************
Event binding
	<button (click)="onSave()">Save</button>

	Some people prefer the on- prefix alternative, known as the canonical form:


	<button on-click="onSave()">On Save</button>
********************************************************
ngModel
It would be convenient to use two-way binding with HTML form elements like <input> and <select>.
However, no native HTML element follows the x value and xChange event pattern.


<input [value]="currentHero.name"
       (input)="currentHero.name=$event.target.value" >

<input [(ngModel)]="currentHero.name" >

Just like
<my-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></my-sizer>


<my-sizer [(size)]="fontSizePx"></my-sizer>
[Sizer.js]
********************************************************


######################################################
Build in directives
1) Attribute directives
2) Structural directives


----------------------------------------
Attribute directives
	Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties, and components.
	They are usually applied to elements as if they were HTML attributes, hence the name.

******************************************************************************
	ngClass
	ngStyle

		 this.currentClasses =  {
			'saveable': this.canSave,
			'modified': !this.isUnchanged,
			'special':  this.isSpecial
		};

		  this.currentStyles = {
			'font-style':  this.canSave      ? 'italic' : 'normal',
			'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
			'font-size':   this.isSpecial    ? '24px'   : '12px'
		  };

	   [ngStyle]="currentStyles"

	<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special</div>



*************************************************************
	ngModel
		You can't apply [(ngModel)] to a non-form native element or a third-party custom component until you write a
			suitable value accessor, a technique that is beyond the scope of this guide.

		You don't need a value accessor for an Angular component that you write because you can name the value and
			event properties to suit Angular's basic two-way binding syntax and skip NgModel altogether.
			The sizer shown above is an example of this technique.

	save  value in uppercase
		<input
	  [ngModel]="currentHero.name"
	  (ngModelChange)="setUppercaseName($event)">



*************************************************************
Structural directives
		Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure,
		typically by adding, removing, and manipulating the host elements to which they are attached.
*************************************************************
NgIf

NgIf
Angular will throw an error if a nested expression tries to access a property of null.



*************************************************************
NgFor  can also be applied on Components .
<hero-detail *ngFor="let hero of heroes" [hero]="hero"></hero-detail>

TRACK-BY

	trackByHeroes(index: number, hero: Hero): number { return hero.id; }


	<div *ngFor="let hero of heroes; trackBy: trackByHeroes">
	  ({{hero.id}}) {{hero.name}}
	</div>




*************************************************************
NgSwitch
	<div [ngSwitch]="currentHero.emotion">
	  <happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></happy-hero>
	  <sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></sad-hero>
	  <confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></confused-hero>
	  <unknown-hero  *ngSwitchDefault           [hero]="currentHero"></unknown-hero>
	</div>

#####################################################################
Template reference variables ( #var )

	You can refer to a template reference variable anywhere in the template.


	The phone variable declared on this <input> is consumed in a <button> on the other side of the template

	<input #phone placeholder="phone number">
	<input ref-phone placeholder="phone number">

	<!-- lots of other elements -->

	<!-- phone refers to the input element; pass its `value` to an event handler -->
	<button (click)="callPhone(phone.value)">Call</button>

	In most cases, Angular sets the reference variable's value to the element on which it was declared
		But a directive can change that behavior and set the value to something

	<form (ngSubmit)="onSubmit(heroForm)" #heroForm="ngForm">


########################################################################
Template expression operators
	pipe
		The current hero's name is {{currentHero.name | json}}

	The safe navigation operator ( ?. ) and null property paths
		The current hero's name is {{currentHero?.name}}

	The non-null assertion operator ( ! )
		The type checker also throws an error if it can't determine whether a variable will be null or undefined at runtime. You may know that can't happen but the type checker doesn't know. You tell the type checker that it can't happen by applying the post-fix non-null assertion operator (!).

		The Angular non-null assertion operator (!) serves the same purpose in an Angular template.

		For example, after you use *ngIf to check that hero is defined, you can assert that hero properties are also defined.


		<!--No hero, no text -->
		<div *ngIf="hero">
		  The hero's name is {{hero!.name}}
		</div>




