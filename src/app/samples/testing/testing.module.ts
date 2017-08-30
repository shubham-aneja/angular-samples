import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TestingComponent} from './testing.component'

@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'testing', component: TestingComponent},
    ])
  ]
})

export class TestingModule {

}
