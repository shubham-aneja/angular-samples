import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'


import { DashboardComponent} from './hero-app/dashboard.component'
import { DashboardHeroComponent} from './hero-app/hero.component'
import {HeroService} from './hero-app/hero.service'

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeroComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    DashboardComponent,
    DashboardHeroComponent
  ],
  providers:[HeroService]
})

export class InputOutputModule {

}
