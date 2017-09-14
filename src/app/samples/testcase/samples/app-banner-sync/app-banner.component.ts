import {Component} from '@angular/core'

@Component({
  selector:'app-banner',
  template: `<div>
  <h1>{{title}}</h1>
  </div>`
})
export class BannerComponent {
  title= 'App Banner';

}
