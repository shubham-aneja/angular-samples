import {Injectable} from '@angular/core'

@Injectable()
export class AppSharedPropsService {
  title:string;

  setAppTitle(title:string):void {
    this.title = title;
  }

  getAppTitle():string {

    return this.title
  }
}
