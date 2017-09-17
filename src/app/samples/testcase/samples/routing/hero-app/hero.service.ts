import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {heroes} from './hero-data'
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  constructor(private http: Http) {
  }

  getHeroStatically(id: number) : Hero{

    return heroes.filter(hero => hero.id == id)[0]
  }
}



