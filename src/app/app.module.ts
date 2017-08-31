import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';


import {ComponentInteractionsModule} from './samples/component-interactions/component-interactions.module'
import {TestingModule} from './samples/testing/testing.module'
import {AngularAnimationsModule} from './samples/angular-animations/angular-animations.module'
import {TemplateSyntaxModule} from './samples/template-syntax/template-syntax.module'
import {InternationalizationModule} from './samples/internationalization/internationalization.module'
import {LifecycleHooksModule} from './samples/lifecycle-hooks/lifecycle-hooks.module'

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
    TestingModule,
    LifecycleHooksModule

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
