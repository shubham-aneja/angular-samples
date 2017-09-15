import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {TestCaseComponent} from './testcase.component'

/*For sync - inline template and styling*/
import {BannerComponent} from './samples/app-banner-sync/app-banner.component'

/*For async - external template / template from file .. or style either */
import {AsyncBannerComponent } from './samples/app-banner-async/app-banner-async.component'

/*For dependancy - sync service*/
import {UserService} from './samples/dependency-service-sync/user-service.service'
import {WelcomeComponent} from './samples/dependency-service-sync/dependency-service-sync.component'


/*For dependancy - async service*/
import {TwainService} from './samples/dependency-service-async/twain.service'
import {TwainComponent} from './samples/dependency-service-async/dependency-service-async.component'

/*For Input and Output*/
import {DashboardComponent, DashboardHeroComponent} from './samples/input-output/input-output.component'

@NgModule({
  declarations: [
    TestCaseComponent,

    BannerComponent,

    AsyncBannerComponent,

    WelcomeComponent,

    TwainComponent,

    DashboardComponent, DashboardHeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: 'testcase', component: TestCaseComponent},
    ])
  ],
  providers:[UserService, TwainService]
})

export class TestCaseModule {

}
