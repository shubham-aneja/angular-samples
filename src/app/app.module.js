import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TemplateSyntaxComponent } from './samples/template-syntax/template-syntax.component';
import { AngularAnimationsComponent } from './samples/angular-animations/angular-animations.component';
import { InternationalizationComponent } from './samples/internationalization/internationalization.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    TemplateSyntaxComponent,
                    AngularAnimationsComponent,
                    InternationalizationComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    RouterModule.forRoot([
                        { path: 'template-syntax', component: TemplateSyntaxComponent },
                        { path: 'angular-animations', component: AngularAnimationsComponent },
                        { path: 'internationalization', component: InternationalizationComponent },
                        { path: '**', redirectTo: "template-syntax" },
                    ]),
                    HttpModule,
                    BrowserAnimationsModule
                ],
                //providers:[TaskService],
                bootstrap: [AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map