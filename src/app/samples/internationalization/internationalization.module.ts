import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {InternationalizationComponent} from './internationalization.component'

@NgModule({
  declarations: [
    InternationalizationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'internationalization', component: InternationalizationComponent},
    ])
  ]
})

export class InternationalizationModule {

}
