import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject'

@Injectable()
export class CompInterMissionService {
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission) {
    console.log('mission announced in service ', mission)
    this.missionAnnouncedSource.next(mission)
  }

  confirmMission(astronaut:string) {
    console.log('mission confirmed in service by astronaut', astronaut)
    this.missionConfirmedSource.next(astronaut)
  }
}



