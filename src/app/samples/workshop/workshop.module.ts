import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {WorkshopComponent, MyCheckboxDirectory} from './workshop.component'

@NgModule({
  declarations: [
    WorkshopComponent,
    MyCheckboxDirectory
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'workshop', component: WorkshopComponent},
    ])
  ]
})

export class WorkshopModule {

}
