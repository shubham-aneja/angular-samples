import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {TestCaseComponent} from './testcase.component'

@NgModule({
  declarations: [
    TestCaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'testcase', component: TestCaseComponent},
    ])
  ]
})

export class TestCaseModule {

}
