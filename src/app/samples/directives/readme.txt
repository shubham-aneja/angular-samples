Shree Ganesh 4 Sep




There are three kinds of directives in Angular:

Components—directives with a template.

Structural directives—change the DOM layout by adding and removing DOM elements.
                      like *ngFor - usually prefixed by "*"

Attribute directives—change the appearance or behavior of an element, component, or another directive.
                      example ngStyle, ngClass


<div *ngIf="hero" >{{hero.name}}</div>

<div template="ngIf hero">{{hero.name}}</div>

<ng-template [ngIf]="hero">
  <div>{{hero.name}}</div>
</ng-template>
