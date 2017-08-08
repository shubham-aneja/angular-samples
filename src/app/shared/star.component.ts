import {Component, Input} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'star',
  templateUrl: 'star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent {
  starWidth:number = 50;
  @Input() priority:number;

  ngOnInit() {
   /*86 is the total width of 5 star component*/
    this.starWidth = 86 * this.priority / 5
  }

  //ngOnChanges() {
  //  this.starWidth = +this.priority*14
  //  console.log('ng change',this.starWidth)
  //}

  onClick() {
    console.log(' star component got clicked ...!')
  }

}
