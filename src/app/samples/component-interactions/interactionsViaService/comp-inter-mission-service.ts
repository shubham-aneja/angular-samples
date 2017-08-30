import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject'

@Injectable()
export class CompInterMissionService {
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission) {
    this.missionAnnouncedSource.next(mission)
  }

  confirmMission(astronaut:string) {
    this.missionConfirmedSource.next(astronaut)
  }
}



