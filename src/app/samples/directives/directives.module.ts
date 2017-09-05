import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {DirectiveSampleComponent } from './directives.component'
import {AttributeDirectiveSampleComponent, MyAttributeDirectory} from './attributeDirective.component'
import {StructuralDirectiveSampleComponent,
  MyUnlessDirective} from './structuralDirective.component'



@NgModule({
  declarations: [
    DirectiveSampleComponent,
    AttributeDirectiveSampleComponent,
    MyAttributeDirectory,

    StructuralDirectiveSampleComponent,
    MyUnlessDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'directives', component: DirectiveSampleComponent},
    ]),
    FormsModule
  ]
})

export class DirectivesModule {


}

