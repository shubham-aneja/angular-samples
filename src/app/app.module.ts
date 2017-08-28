import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {TemplateSyntaxComponent} from './samples/template-syntax/template-syntax.component'
import {AngularAnimationsComponent} from './samples/angular-animations/angular-animations.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    AngularAnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'template-syntax', component: TemplateSyntaxComponent},
      {path: 'angular-animations', component: AngularAnimationsComponent},
      {path: '**', redirectTo: "template-syntax"},
    ]),
    HttpModule,
    BrowserAnimationsModule
  ],
  //providers:[TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
