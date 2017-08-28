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
  {id: 2, name: 'Tpg', state: 'inactive'}
]
const IndianHeroes = [
  {id: 1, name: 'Akshay', state: 'in'},
  {id: 2, name: 'Ranbir', state: 'out'}
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
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('active <=> inactive, * <=> inactive, * <=> active', animate(3000)),
      //transition('* <=> active', animate('1000ms ease-in')),
      //transition('active <=> inactive', animate('500ms ease-in'))
    ]),
    trigger('indianHeroState', [
      state('in', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('out', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('1000ms  1000ms ease-in')
      ]),
      //transition('void => in', [
      //  style({transform: 'translateX(-100%)'}),
      //  animate('1000ms ease-in')
      //]),

      //transition('out=> void, in => void', [
      //  style({transform: 'translateX(200%)'}),
      //  animate('1000ms ease-in')
      //]),
      transition(':leave', [
        style({transform: 'translateX(200%)'}),
        animate('1000ms 1000ms ease-in')
      ]),

      transition('in <=> out', animate('500ms ease-in'))
    ])
  ]
})

export class AngularAnimationsComponent {
  title:string = 'Angular animations';
  heroState:string = 'active';
  heroes:any[] = Heroes;
  tempHero:any = Heroes[0];
  indianHeroes:any[] = IndianHeroes;

  toggleState():void {
    this.heroState = getUpdatedState(this.heroState);
  }

  toggleStateOfHero(id):void {
    this.heroes = this.heroes.map((hero) => {
      if (hero.id === id) {
        return {...hero, state: getUpdatedState(hero.state)}
      } else {
        return hero
      }
    })
  }

  toggleIndianHero(id):void {
    this.indianHeroes = this.indianHeroes.map((hero) => {
      if (hero.id === id) {
        return {...hero, state: getIndianHeroUpdatedState(hero.state)}
      } else {
        return hero
      }
    })
  }

  deleteIndianHero(id:number):void {
    this.indianHeroes = this.indianHeroes.filter((indianHero) =>indianHero.id !== id)
  }

  insertIndianHero() {
    this.indianHeroes = [...this.indianHeroes,
      {id: this.indianHeroes.length, name: new Date(), state: 'in'}
    ]
  }
}


const getUpdatedState = (prevState) => {
  return prevState = prevState == 'active' ? 'inactive' : 'active'
}


const getIndianHeroUpdatedState = (prevState) => {
  return prevState = prevState == 'in' ? 'out' : 'in'
}

