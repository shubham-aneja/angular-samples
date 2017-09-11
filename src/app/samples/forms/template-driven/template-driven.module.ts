import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {TemplateDrivenComponent} from './template-driven.component'

@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'forms/template-driven', component: TemplateDrivenComponent},
    ]),
    FormsModule
  ]
})

export class TemplateDrivenModule {

}
