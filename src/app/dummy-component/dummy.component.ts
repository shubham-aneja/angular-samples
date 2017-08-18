import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'dummy',
  moduleId: module.id,
  template: `
  <div>
  <H1>{{creator}} creates this component </H1>
  </div>
      `
})

export class DummyComponent implements OnInit {
  sub: any;
  creator: string = ''
  constructor(private _route:ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.sub = this._route.queryParams.subscribe(qParam => {
      //console.log('111 query params for dummy components are ',qParam)
      this.creator = qParam.creator
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  navigateToTaskList() {
    this.router.navigate(['/active'], { queryParams: { navigationSource: 'Code' } });
  }
}
