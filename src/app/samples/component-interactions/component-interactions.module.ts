import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core'

import {ComponentInteractionsComponent} from './component-interactions.component'
import {CompInterInputAlias} from './comp-inter-input-alias.component'
import {CompInterIntercept} from './comp-inter-input-intercept-onchanges.component'
import {CompInterLocalVar} from './comp-inter-local-var.component'
import {CompInterMissionControl} from './interactionsViaService/comp-inter-mission-control'
import {CompInterAstronaut} from './interactionsViaService/comp-inter-astronaut'

@NgModule({
  declarations: [
    ComponentInteractionsComponent,
    CompInterInputAlias,
    CompInterIntercept,
    CompInterLocalVar,
    CompInterMissionControl,
    CompInterAstronaut
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'component-interactions', component: ComponentInteractionsComponent},
    ])
  ]
})

export class ComponentInteractionsModule {

}
