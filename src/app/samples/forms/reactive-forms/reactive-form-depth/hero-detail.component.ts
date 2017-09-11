import { Component, Input, OnChanges }       from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Address, Hero, states } from './data-model';
import { HeroService }           from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnChanges {
  @Input() hero:Hero;

  heroForm:FormGroup;
  nameChangeLog:string[] = [];
  states = states;

  constructor(private fb:FormBuilder,
              private heroService:HeroService) {

    this.createForm();
    this.logNameChange();
  }

  createForm() {
    /*todo Shouldn't we have to specify that secretLairs is an array of Address*/
    this.heroForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    console.log('111 222 333 ngFormChanges ...');

    /*working on every save and reset, */
    /*todo -- only executing by onSubmit and reset.. not by itself*/
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs():FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }


  setAddresses(addresses:Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  onSubmit() {
    console.log('111 222 333 on submit called...');
    /*this.hero is the one having default value*/
    this.hero = this.prepareSaveHero();

    this.heroService.updateHero(this.hero).subscribe(/* error handling */);

    this.ngOnChanges();
  }

  prepareSaveHero():Hero {
    /*Todo - why create deep copy, why dont just pass the
     original address objects and array*/
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy:Address[] = formModel.secretLairs.map(
      (address:Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero:Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

  revert() {
    console.log('111 222 333 revert called...');

    this.ngOnChanges();
  }

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value:string) => this.nameChangeLog.push(value)
    );
  }
}
