import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {TemplateSyntaxComponent} from './template-syntax.component'

@NgModule({
  declarations: [
    TemplateSyntaxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'template-syntax', component: TemplateSyntaxComponent},
    ])
  ]
})

export class TemplateSyntaxModule {

}
