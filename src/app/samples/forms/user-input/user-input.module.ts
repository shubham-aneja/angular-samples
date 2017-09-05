import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {UserInputComponent} from './user-input.component'

@NgModule({
  declarations: [
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'forms/user-input', component: UserInputComponent},
    ])
  ]
})

export class UserInputModule {

}
