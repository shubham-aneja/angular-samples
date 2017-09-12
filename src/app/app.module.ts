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
import {PipeModule} from './samples/pipes/pipe.module'

/*Test case module*/
import {TestCaseModule} from './samples/testcase/testcase.module'

/*Forms module*/
import {UserInputModule} from './samples/forms/user-input/user-input.module'
import {TemplateDrivenModule} from './samples/forms/template-driven/template-driven.module'
import {ReactiveFormModule} from './samples/forms/reactive-forms/reactive-form.module'
import {DynamicFormsModule} from './samples/forms/dynamic-forms/dynamic-forms.module'
import {FormValidationsModule} from './samples/forms/form-validations/form-validations.module'



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
    PipeModule,

    /*Forms modules*/
    UserInputModule,
    TemplateDrivenModule,
    ReactiveFormModule,
    DynamicFormsModule,
    FormValidationsModule,

    TestCaseModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
