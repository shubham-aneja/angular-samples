import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularAnimationsComponent} from './angular-animations.component'

@NgModule({
  declarations: [
    AngularAnimationsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forChild([
      {path: 'angular-animations', component: AngularAnimationsComponent},
    ])
  ]
})

export class AngularAnimationsModule {

}
