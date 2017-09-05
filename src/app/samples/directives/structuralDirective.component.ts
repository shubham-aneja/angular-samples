import {Component, Input, Directive, TemplateRef, ViewContainerRef} from '@angular/core'


@Component({
  selector: 'structural-directive',
  moduleId: module.id,
  templateUrl: './structuralDirective.component.html',
  styles: ['p span{color: green; font-size: 70%}']
})

export class StructuralDirectiveSampleComponent {
  mood = 'good';
  moods = [
    {id: 1, name: 'San', mood: 'good'},
    {id: 2, name: 'Van', mood: 'neutral'},
    {id: 3, name: 'Bran', mood: 'xyz'}
  ]

  hero = {name: 'Hritik'};

  trackByMood(mood) {
    return mood.id
  }
}


@Directive({selector: '[myUnless]'})
export class MyUnlessDirective {

  private hasView:boolean =false;
  constructor(private templateRef:TemplateRef<any>, private viewContainer:ViewContainerRef) {

  }

  @Input() set myUnless(condition:boolean) {

    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }


}



