import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';


import {ComponentInteractionsModule} from './samples/component-interactions/component-interactions.module'
import {WorkshopModule} from './samples/workshop/workshop.module'
import {AngularAnimationsModule} from './samples/angular-animations/angular-animations.module'
import {TemplateSyntaxModule} from './samples/template-syntax/template-syntax.module'
import {InternationalizationModule} from './samples/internationalization/internationalization.module'
import {LifecycleHooksModule} from './samples/lifecycle-hooks/lifecycle-hooks.module'
import {DirectivesModule} from './samples/directives/directives.module'

/*Forms module*/
import {UserInputModule} from './samples/forms/user-input/user-input.module'

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
    WorkshopModule,
    LifecycleHooksModule,
    DirectivesModule,

    /*Forms modules*/
    UserInputModule

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
