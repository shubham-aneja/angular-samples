import {Component, Input} from '@angular/core'
import {CompInterMissionService} from './comp-inter-mission-service'

@Component({
  selector: 'comp-inter-astronaut',
  moduleId: module.id,
  template: `<div>
  <div><h1>Hello I'm astronaut {{astronaut}}</h1></div>
  </div>`,
  providers:[CompInterMissionService]
})

export class CompInterAstronaut {
  @Input() astronaut:string;
  subscription;
  mission: string = '';
  isConfirmed: boolean = false;

  constructor(private missionService:CompInterMissionService) {
    this.subscription = this.missionService.missionAnnounced$.subscribe( (mission) => {
      this.mission = mission;
      this.isConfirmed = false;
    })
  }


  confirmMission() {
    this.isConfirmed = false;
    this.missionService.confirmMission(this.astronaut);
  }


  ngOnDestroy() {
    this.subscription.unSubscribe();
  }
}



