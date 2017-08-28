Doubts
  Animations not working with *ngFor
  Animations on destroy not working

Basic example
  1) import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


  2)
   import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

  3)
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
    ]

   4)
    Now, using the [@triggerName] syntax,
     <li *ngFor="let hero of heroes"
            [@heroState]="hero.state"
            (click)="hero.toggleState()">
          {{hero.name}}
        </li>
Types of transitions

      /*multiple transitions*/
      //transition('inactive => active, active => activating', animate('1000ms ease-in')),

      /*reversible transition*/
      //transition('inactive <=> active', animate('1000ms ease-in')),

      /*wildcard transition*/
      //transition('active => *', animate('1000ms ease-out'))
      //transition('* => active', animate('1000ms ease-out'))
      //transition('* => *', animate('1000ms ease-out'))

          /*void transition*/
          //* => void transition applies when the element leaves the view, regardless of what state it was in before it left.

          /*style that will apply for only during a transition*/
          transition('inactive => active', animate('2000ms ease-in', style({
              backgroundColor: 'red',
              transform: 'scale(5)'
            }))),


Example leaving and entering animation

  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]

Automatic property calculation
  In these cases, you can use a special * property value so that the
    value of the property is computed at runtime and then plugged into the animation.
  Eg. height is often controlled by the contents an element has.

Duration
  100 OR '100ms' or '0.1s'

Delay
  Wait for 100ms and then run for 200ms: '0.2s 100ms'


Keyframes
    animations: [
      trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate(300, keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
        transition('* => void', [
          animate(300, keyframes([
            style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
            style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
            style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
          ]))
        ])
      ])
    ]
  Defining offsets for keyframes is optional. If you omit them,
    offsets with even spacing are automatically assigned. For example, three keyframes without predefined offsets receive offsets 0, 0.5, and 1.

Parallel or Grouped animations
    animations: [
      trigger('flyInOut', [
        state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
        transition('void => *', [
          style({width: 10, transform: 'translateX(50px)', opacity: 0}),
          group([
            animate('0.3s 0.1s ease', style({
              transform: 'translateX(0)',
              width: 120
            })),
            animate('0.3s ease', style({
              opacity: 1
            }))
          ])
        ]),
        transition('* => void', [
          group([
            animate('0.3s ease', style({
              transform: 'translateX(50px)',
              width: 10
            })),
            animate('0.3s 0.2s ease', style({
              opacity: 0
            }))
          ])
        ])
      ])
    ]

Animations callback
  eg. for the keyframe eg.
        <li *ngFor="let hero of heroes"
            (@flyInOut.start)="animationStarted($event)"
            (@flyInOut.done)="animationDone($event)"
            [@flyInOut]="'in'">
          {{hero.name}}
        </li>

Keyframes
 transition('active <=> inactive, * <=> inactive, * <=> active', animate(3000, keyframes([
        style({backgroundColor: 'red', transform: 'translateX(-100%)', offset: 0}),
        style({backgroundColor: 'green', transform: 'translateX(15px)',  offset: 0.3}),
        style({backgroundColor: 'blue', transform: 'translateX(0)',     offset: 1.0})
      ]))),
