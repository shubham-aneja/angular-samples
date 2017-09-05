import {Component, Input, OnChanges, Directive
  , ElementRef, HostListener} from '@angular/core'


@Component({
  selector: 'attribute-directive',
  moduleId: module.id,
  template: `<div>
  <h3 [MyAttributeDirectory]="'yellow'" [defaultColor]="'blue'"  [style.fontSize.px]="fontSize">See the magic of Attribute directive</h3>
   </div>`
})

export class AttributeDirectiveSampleComponent {
  fontSize = 30;
}


@Directive({
  selector: '[MyAttributeDirectory]'
})

export class MyAttributeDirectory {
  @Input() MyAttributeDirectory:string;
  @Input() defaultColor:string;


  constructor(private elm:ElementRef) {
    /*not getting the default color till the time of construction of
     this directive*/
    this.elm.nativeElement.style.color = this.defaultColor || 'green';
  }

  @HostListener('mouseenter')onMouseEnter() {
    this.elm.nativeElement.style.color = this.MyAttributeDirectory || 'blue'

  }


  @HostListener('mouseleave') onMouseLeave() {
    this.elm.nativeElement.style.color = this.defaultColor || 'green'

  }
}





