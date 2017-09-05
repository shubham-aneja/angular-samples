import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {LifeCycleHooksComponent, LifeCycleHooksSampleParentComponent,
  LifeCycleHooksSampleChildComponent} from './lifecycle-hooks.component'



@NgModule({
  declarations: [
    LifeCycleHooksComponent,


    LifeCycleHooksSampleParentComponent,
    LifeCycleHooksSampleChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'lifecycle-hooks', component: LifeCycleHooksComponent},
    ]),
    FormsModule
  ]
})

export class LifecycleHooksModule {


}

