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
import {ComponentInteractionsComponent} from './samples/component-interactions/component-interactions.component'
import {CompInterInputAlias} from './samples/component-interactions/comp-inter-input-alias.component'
import {CompInterIntercept} from './samples/component-interactions/comp-inter-input-intercept-onchanges.component'
import {CompInterLocalVar} from './samples/component-interactions/comp-inter-local-var.component'
import {CompInterMissionControl} from './samples/component-interactions/interactionsViaService/comp-inter-mission-control'
import {CompInterAstronaut} from './samples/component-interactions/interactionsViaService/comp-inter-astronaut'



@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    AngularAnimationsComponent,
    InternationalizationComponent,
    ComponentInteractionsComponent,
    CompInterInputAlias,
    CompInterIntercept,
    CompInterLocalVar,
    CompInterAstronaut,
    CompInterMissionControl
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'template-syntax', component: TemplateSyntaxComponent},
      {path: 'angular-animations', component: AngularAnimationsComponent},
      {path: 'internationalization', component: InternationalizationComponent},
      {path: 'component-interactions', component: ComponentInteractionsComponent},
      {path: '**', redirectTo: "template-syntax"},
    ]),
    HttpModule,
    BrowserAnimationsModule
  ],
  //providers:[TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
