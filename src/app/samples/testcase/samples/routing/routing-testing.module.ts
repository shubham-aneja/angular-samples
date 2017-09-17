import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { RoutingDashboardComponent} from './hero-app/dashboard.component'
import { RoutingDashboardHeroComponent, RoutingHeroDetail} from './hero-app/hero.component'
import {HeroService} from './hero-app/hero.service'

@NgModule({
  declarations: [
    RoutingDashboardComponent,
    RoutingDashboardHeroComponent,
    RoutingHeroDetail
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      {path: 'routing-testing-detail/:id', component: RoutingHeroDetail},
    ]),
  ],
  exports:[
    RoutingDashboardComponent,
    RoutingDashboardHeroComponent
  ],
  providers:[HeroService]
})

export class RoutingTestingModule {

}
