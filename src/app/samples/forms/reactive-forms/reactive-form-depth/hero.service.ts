import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Hero, heroes } from './data-model';

@Injectable()
export class HeroService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getHeroes(): Observable<Hero[]> {
    /*todo --  The observable sequence whose elements are pulled from the
              given arguments*/
    //https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/of.md
      return of(heroes).delay(this.delayMs); // simulate latency with delay
  }



  // Fake server update; assume nothing can go wrong
  updateHero(hero: Hero): Observable<Hero>  {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
    console.log('updating hero ...', hero)
    return of(newHero).delay(this.delayMs); // simulate latency with delay
  }
}
