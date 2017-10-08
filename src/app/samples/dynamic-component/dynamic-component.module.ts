import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'

import {DynamicComponent} from './dynamic-component.component'

@NgModule({
  declarations: [
    DynamicComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'dynamic-component', component: DynamicComponent},
    ]),
    FormsModule
  ]
})

export class DynamicComponentModule {

}
