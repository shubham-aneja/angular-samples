import {Component, Input} from '@angular/core'
import {CompInterMissionService} from './comp-inter-mission-service'

@Component({
  selector: 'comp-inter-astronaut',
  moduleId: module.id,
  template: `<div class="row">
  <div class="col-sm-6"><h4>{{astronaut}} Reporting...!</h4></div>
  <button [disabled]="!isAnnounced || isConfirmed" on-click="confirmMission()" class="btn btn-primary col-sm-2">
  {{isConfirmed ? 'Confirmed': 'Confirm'}}
  </button>
  <div class="col-sm-2">
  Mission - {{mission}}
  </div>
  <div class="col-sm-2">
  </div>
  </div>`
})

export class CompInterAstronaut {
  @Input() astronaut:string;
  subscription;
  mission: string = '<no-mission>';
  isConfirmed: boolean = false;
  isAnnounced: boolean = false;

  constructor(private missionService:CompInterMissionService) {
    this.subscription = this.missionService.missionAnnounced$.subscribe( (mission) => {
      this.mission = mission;
      this.isConfirmed = false;
      this.isAnnounced = true;
    })
  }

  confirmMission() {
    this.isConfirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }


  ngOnDestroy() {
    this.subscription.unSubscribe();
  }
}



