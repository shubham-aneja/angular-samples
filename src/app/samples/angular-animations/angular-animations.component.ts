import {Component} from '@angular/core'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

const Heroes = [
  {id: 1, name: 'shubham', state: 'active'},
  {id: 2, name: 'Tpg', state: 'inactive'},
  {id: 3, name: 'Noida', state: 'active'},
  {id: 4, name: 'UP', state: 'inactive'}
]


@Component({
  selector: 'template-syntax',
  moduleId: module.id,
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(0.8)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive=> active', animate(1000,
         keyframes([
          style({transform: 'translateX(-100%)'}),
          style({transform: 'translateX(100%)'}),
          style({transform: 'translateX(-20%)'}),
          style({transform: 'translateX(20%)'}),
          style({transform: 'translateX(0)'}),
          style({transform: 'translateX(0)'}),
        ])
      )),
      transition('active => inactive', animate(1000,
         keyframes([
          style({transform: 'translateX(-100%)'}),
          style({transform: 'translateX(100%)'}),
          style({transform: 'translateX(-20%)'}),
          style({transform: 'translateX(20%)'}),
          style({transform: 'translateX(0)'}),
        ])
      )),
    ]),

  ]
})

export class AngularAnimationsComponent {
  title:string = 'Angular animations';
  heroes:any[] = Heroes;
  tempHero:any = Heroes[0];


  toggleStateOfHero(id):void {
    /*updating in reference do not altering transitions
    I guess this is because the object is getting created again and again due to
    change in reference...
    This c
    .. */

/*    this.heroes = this.heroes.map((hero) => {
     if (hero.id === id) {
     return {...hero, state: getUpdatedState(hero.state)}
     } else {
     return hero
     }
     });*/
    this.heroes.forEach((hero) => {
      if (hero.id === id) {
        hero.state = getUpdatedState(hero.state)
      }
    })
  }

  insertHero() {
    this.heroes = [...this.heroes,
      {id: this.heroes.length, name: new Date(), state: 'active'}
    ]
  }
}


const getUpdatedState = (prevState) => {
  return prevState = prevState == 'active' ? 'inactive' : 'active'
}
