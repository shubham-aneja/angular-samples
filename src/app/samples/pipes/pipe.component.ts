import {Component, PipeTransform , Pipe} from '@angular/core'

@Component({
  selector: 'pipe-component',
  moduleId: module.id,
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})

export class PipeComponent {
  title:string = 'Pipe Component';
  bddyDate: Date = new Date('5 march 1993')
  name: string  = 'shubham'
  msg: string = 'BIRTHDAY IS ON';
  format:string ='shortDate';

  power:number = 2 ;
  number: number = 2;

  toggleFormat () {
    return this.format = this.format == 'shortDate' ? 'longDate' : "shortDate" ;
  }

}

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string) {
    let exp = parseFloat(exponent)
    return Math.pow(value, isNaN(exp) ? 1 : exp)
  }
}
