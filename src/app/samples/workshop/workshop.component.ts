import {Component, Input, ElementRef, HostListener, Directive} from '@angular/core'

@Component({
  selector: 'testing',
  moduleId: module.id,
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
})

export class WorkshopComponent {
  title:string = 'Workshop Component';
  selectedText:string='yupp' ;

/*On select work*/
  onSelect(e) {
    console.log('text selected... ', e)
    this.selectedText = e;
  }

  onDivSelection() {
    alert('div text selected')
  }
}


@Directive({
  selector: '[myCheckboxDirectory]'
})

export class MyCheckboxDirectory {
  //@Input() MyAttributeDirectory:string;
  //@Input() defaultColor:string;
  private inputElm ;

  constructor(private elm:ElementRef) {
  }

  ngOnInit() {
    this.inputElm = this.elm.nativeElement.children[0]

    this.elm.nativeElement.className = 'show-bg-image text-input-directory-container';

    this.inputElm.className = 'text-input-directory-input'
  }

  private getClassName() {
    return this.inputElm.checked ? 'show-bg-image text-input-directory-container' : 'text-input-directory-container hide-bg-image'
  }

  @HostListener('change')onChange() {
    this.elm.nativeElement.className = this.getClassName();
  }
}
