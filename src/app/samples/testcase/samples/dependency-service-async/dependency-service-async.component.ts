
import { Component, OnInit } from '@angular/core';
import { TwainService }       from './twain.service';

@Component({
  selector: 'twain-quote',
  template: '<h3><p class="twain"><i>{{quote}}</i></p></h3> '
})

export class TwainComponent  implements OnInit {
  intervalId: number;
  quote = '...';
  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.twainService.getQuote().then(quote => this.quote = quote);
  }
}
