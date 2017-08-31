import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {TemplateSyntaxComponent, ChildComponent} from './template-syntax.component'

@NgModule({
  declarations: [
    TemplateSyntaxComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'template-syntax', component: TemplateSyntaxComponent},
    ]),
    FormsModule
  ]
})

export class TemplateSyntaxModule {

}
