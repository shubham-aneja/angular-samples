import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PipeComponent, ExponentialStrengthPipe} from './pipe.component'
import {HeroAsyncMessageComponent} from './async-message.pipe'

@NgModule({
  declarations: [
    PipeComponent,
    ExponentialStrengthPipe,
    HeroAsyncMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'pipe', component: PipeComponent},
    ]),
    FormsModule
  ]
})

export class PipeModule {

}
