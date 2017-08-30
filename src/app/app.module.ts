import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import {TemplateSyntaxComponent} from './samples/template-syntax/template-syntax.component'
import {InternationalizationComponent} from './samples/internationalization/internationalization.component'


import {ComponentInteractionsModule} from './samples/component-interactions/component-interactions.module'
import {TestingModule} from './samples/testing/testing.module'
import {AngularAnimationsModule} from './samples/angular-animations/angular-animations.module'
import {TemplateSyntaxModule} from './samples/template-syntax/template-syntax.module'
import {InternationalizationModule} from './samples/internationalization/internationalization.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '**', redirectTo: "template-syntax"},
    ]),
    HttpModule,

    InternationalizationModule,
    TemplateSyntaxModule,
    AngularAnimationsModule,
    ComponentInteractionsModule,
    TestingModule

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
