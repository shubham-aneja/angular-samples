import {Component, Input, OnChanges} from '@angular/core'


@Component({
  selector: 'lifecycle-hooks',
  moduleId: module.id,
  templateUrl: 'lifecycle-hooks.component.html'
})

export class LifeCycleHooksComponent {
  title:string = 'Life cycle hooks';

}


/**
 *
 */
@Component({
  selector: 'lifecycle-hooks-sample-parent',
  moduleId: module.id,
  template: `<div id="basic-example">
  <div>Parent here</div>
  <input type="text" [(ngModel)]="textInputModel1">
  <input type="text" [(ngModel)]="textInputModel2">
  <div><h4>Value entered - {{textInputModel1}} - {{textInputModel2}} </h4></div>
  <lifecycle-hooks-sample-child  name='Stark' [parentText]="textInputModel1">
  </lifecycle-hooks-sample-child>
  <lifecycle-hooks-sample-child name='Targaryen' [parentText]="textInputModel2">
  </lifecycle-hooks-sample-child>
  </div> `
})

export class LifeCycleHooksSampleParentComponent implements OnChanges{
  ngOnInit() {
    console.log('111Lifecycle - parent onInit called')
  }

  ngOnChanges() {
    console.log('111Lifecycle - parent onChanges called')
  }

  ngAfterContentInit(){
    console.log(`111Lifecycle - parent contentInit called`)

  }

  ngAfterContentChecked(){
    console.log(`111Lifecycle - parent contentChecked called`)

  }

  ngAfterViewInit(){
    console.log(`111Lifecycle - parent viewInit called`)

  }

  ngAfterViewChecked(){
    console.log(`111Lifecycle - parent viewChecked called`)

  }


  ngOnDestroy() {
    console.log('111Lifecycle - parent onDestroy called')
  }

}

@Component({
  selector: 'lifecycle-hooks-sample-child',
  moduleId: module.id,
  template: `<div>
  <div>Child here {{name}} --   <i>{{time}}</i></div>
  <div>
  onChanges will not trigger then time toggles, WHY WHY WHY?
  </div>
  </div> `
})

export class LifeCycleHooksSampleChildComponent  implements OnChanges{
  @Input() parentText:string = '';
  @Input() name:string = '';
  time = new Date();
  interval;

  ngOnInit() {
    console.log(`111Lifecycle - child[${this.name}] onInit called`)
    this.interval = setInterval(() => {
      this.time = new Date()
    }, 10000)
  }

  ngOnChanges() {
    console.log(`111Lifecycle - child[${this.name}] onChanges called`)

  }

  ngOnDestroy() {
    console.log(`111Lifecycle - child[${this.name}] onDestroy called`)
    clearInterval(this.interval);
  }


  ngAfterContentInit(){
    console.log(`111Lifecycle - child[${this.name}] contentInit called`)

  }

  ngAfterContentChecked(){
    console.log(`111Lifecycle - child[${this.name}] contentChecked called`)

  }
  ngAfterViewInit(){
    console.log(`111Lifecycle - child[${this.name}] viewInit called`)

  }

  ngAfterViewChecked(){
    console.log(`111Lifecycle - child[${this.name}] viewChecked called`)

  }
}





