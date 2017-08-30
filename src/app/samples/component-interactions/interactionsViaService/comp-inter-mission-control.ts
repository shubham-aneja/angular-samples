import {Component} from '@angular/core'
import {CompInterMissionService} from './comp-inter-mission-service'

@Component({
  selector: 'comp-inter-mission-control',
  moduleId: module.id,
  template: `<div>
  <div><h1>Hello Mission control system</h1></div>
  </div>`,
  providers:[CompInterMissionService]
})

export class CompInterMissionControl {
  astronauts:string[] = ["Ban", "Ross", "Chandler"];
  missions:string[] = ["Go to Moon", "Go to mars", "Go to Vegas"];
  logs:string[] = [];

  nextMission:number = 0;
  subscription;

  constructor(private missionService:CompInterMissionService) {
    this.subscription = this.missionService.missionConfirmed$.subscribe( (astronaut) => {
      this.logs.push(`${astronaut} accepted the mission`)
    })
  }

  announceMission() {
    const nextMission = this.missions[this.nextMission]
    this.logs.push(`${nextMission} announced`)
    this.missionService.announceMission(nextMission);
    this.nextMission = (this.nextMission >= this.missions.length) ? 0 : this.nextMission + 1;
  }


  ngOnDestroy() {
    this.subscription.unSubscribe();
  }
}



