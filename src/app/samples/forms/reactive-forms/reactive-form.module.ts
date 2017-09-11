import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormComponent} from './reactive-form.component'
import {ReactiveFormDepthComponent} from './reactive-form-depth/reactive-form-depth.component'


/*imports for reactive form detail*/
import {HeroDetailComponent} from './reactive-form-depth/hero-detail.component'
import {HeroListComponent} from './reactive-form-depth/hero-list.component'
import {HeroService} from './reactive-form-depth/hero.service'
import {HttpModule} from '@angular/http'


@NgModule({
  declarations: [
    ReactiveFormComponent,
    ReactiveFormDepthComponent,

    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forChild([
      {path: 'forms/reactive-forms', component: ReactiveFormComponent},
      {path: 'forms/reactive-forms-depth', component: ReactiveFormDepthComponent},
    ]),
    ReactiveFormsModule
  ],
  providers:[HeroService]
})

export class ReactiveFormModule {

}
