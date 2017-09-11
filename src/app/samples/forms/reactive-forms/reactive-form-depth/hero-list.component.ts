import { Component, OnInit } from '@angular/core';



import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { timer } from 'rxjs/observable/timer';
import { of} from 'rxjs/observable/of';

import {Http, Response} from '@angular/http'

import { Hero }        from './data-model';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styles: [' .hero-navigation{display: flex;align-items: center;justify-content: space-between;'],
  //providers:[Http],

})

export class HeroListComponent implements OnInit {
  heroes:Observable<Hero[]>;
  isLoading = false;
  selectedHero:Hero;

  constructor(private heroService:HeroService, private _http:Http) {
    //this.observablesExamples()
    /*Todo This code sooner will be moved to seprate module.. Thanks for cooperation*/
  }

  observablesExamples() {
    /*#######################################################*/
    /*Observables samples, OUT OF THE SCOPE OF REACTIVE FORM AND THIS
     SAMPLE * */
    /*1 - subscribe*/

    this.heroService.getHeroes().subscribe(hero => {
        console.log('111 This will get called on every iteraction.. hero is here', hero)
      }, (err) => {
        console.log('111 Error: ' + err);
      },
      () => {
        /*In this case, we have only one iteration*/
        console.log('111 All iterations have been Completed');
      }
    );

    /*#######################################################*/
    /*2 - map*/

    var source = timer(0, 1000)
      .take(5)
      .map(function (x) {
        console.log('111 x in first function', x)
        return x * 2;
      }, function (x) {
        console.log('111 x in second function', x)
        return x * 4;
      });

    source.subscribe(elm => {
      console.log('111 elm found after map is ', elm)
    })
    /*#######################################################*/
    //How to create Observable of array
    var ofSource = of([10, 20, 30, 40, 50])

    ofSource.subscribe(elm => {
      console.log('111 222 array elements in subscribe of "of" is ', elm)
    })

    var ofSource2 = of(50)
    ofSource2.subscribe(elm => {
      console.log('111 222 number elements in subscribe of "of" is ', elm)
    })

    var ofSource3 = of('As I said, I have fifty thousand rupees in hand');
    ofSource3.subscribe(elm => {
      console.log('111 222 string elements in subscribe of "of" is ', elm)
    })


    /*In hero-list, object is getting updated with update in reference- like this*/
    let arrData = [10, 20, 30, 40, 50];
    var ofSource1_ref = of(arrData);

    ofSource1_ref.subscribe(elm => {
      console.log('999 111 222 array elements in subscribe of "of" is ', elm)
      arrData[0]=100;
      console.log('999 111 222 array elements in subscribe after reference update "of" is ', elm)

    });


    /*#######################################################*/
    //Http call
    const heroesUrl = 'http://localhost:3300/heroes';

    const pipi = this._http.get(heroesUrl);
    pipi.map((response:Response) => {
      console.log('222 222 222 inside map');
      //todo Why map is not working in this case ?? I DONT KNOW, BUT WANTED TO ..
      return <Hero[]>response.json()
    })

    pipi.subscribe(el => {
      console.log('222 222 222 ', el)
      console.log('222 222 222 ', <Hero[]>el.json())
    });
    pipi.do(el => {
      //todo Why do is also not working in this case ??
      /*todo - but both of them are qorking perfectly fine in
       * APM-start project*/
      console.log('222 222 222 this time, its do', el)
    })


    /*ANgular http module's get function returns an Observable instance*/

    /*Todo is also not working, need investigation ...*/
    this._http.get(heroesUrl)
      .map((response:Response) => {
        console.log('222 Fetching heroes data- inside map');
        return <Hero[]>response.json()
      })
      .do(data => {
        console.log('222 Fetching heroes data- inside do and data is ', data)
      }).
      catch((error:Response) => {
        console.log('222 Fetching heroes data- error while fetching heroes ', error)
        return Observable.throw(error.json().error || 'Server error while fetching heroes...')
      })


    /*#######################################################*/

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
      .finally(() => this.isLoading = false);


    /* this.heroes is observable in actual */
    this.selectedHero = undefined;


  }

  select(hero:Hero) {
    this.selectedHero = hero;
  }
}
