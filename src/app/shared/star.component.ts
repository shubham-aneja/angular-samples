import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'star',
  templateUrl: 'star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent {
  starWidth:number = 50;
  @Input() priority:number;
  @Output() onPriorityPress: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
   /*86 is the total width of 5 star component*/
    this.starWidth = 86 * this.priority / 5
  }

  //ngOnChanges() {
  //  this.starWidth = +this.priority*14
  //  console.log('ng change',this.starWidth)
  //}

  onClick(e) {
    //console.log(' star component got clicked ...!',e)
    this.onPriorityPress.emit(this.priority)
  }

}
