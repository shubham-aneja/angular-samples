import {Component} from '@angular/core'
import {CompInterMissionService} from './comp-inter-mission-service'

@Component({
  selector: 'comp-inter-mission-control',
  moduleId: module.id,
  template: `<div>
  <div><h4>Hello Mission control system</h4></div>

  <comp-inter-astronaut *ngFor="let astronaut of astronauts" [astronaut]="astronaut">
  </comp-inter-astronaut>
  <ul>
  <div class="btn btn-primary" on-click="announceMission()">Announce Mission</div>
  <li *ngFor="let log of logs">{{log}}</li>
  </ul>
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
    this.nextMission = (this.nextMission >= this.missions.length-1) ? 0 : this.nextMission + 1;
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}



