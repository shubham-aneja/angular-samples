import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {TemplateSyntaxComponent} from './samples/template-syntax/template-syntax.component'
import {AngularAnimationsComponent} from './samples/angular-animations/angular-animations.component'
import {InternationalizationComponent} from './samples/internationalization/internationalization.component'


import {ComponentInteractionsModule} from './samples/component-interactions/component-interactions.module'
import {TestingModule} from './samples/testing/testing.module'

@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    AngularAnimationsComponent,
    InternationalizationComponent,
  ],
  imports: [
    ComponentInteractionsModule,
    BrowserModule,
    FormsModule,
    TestingModule,
    RouterModule.forRoot([
      {path: 'template-syntax', component: TemplateSyntaxComponent},
      {path: 'angular-animations', component: AngularAnimationsComponent},
      {path: 'internationalization', component: InternationalizationComponent},


      {path: '**', redirectTo: "template-syntax"},
    ]),
    HttpModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
