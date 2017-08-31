import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {LifeCycleHooksComponent} from './lifecycle-hooks.component'

@NgModule({
  declarations: [
    LifeCycleHooksComponent  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'lifecycle-hooks', component: LifeCycleHooksComponent},
    ])
  ]
})

export class LifecycleHooksModule {

}
