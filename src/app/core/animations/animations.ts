import AnimationBuilder from "./AnimationBuilder";
import {animate, style} from "@angular/animations";

export const defaultTiming = '120ms'

export function fadeAnimation(timing: string = defaultTiming, name?:string) {
  return AnimationBuilder.start(name ?? 'fadeAnimation')
    .setEnter([
      style({opacity: 0}),
      animate(timing, style({opacity: 1}))
    ]).getTrigger()
}

export function growXAnimation(timing: string = defaultTiming, name?:string) {
  return AnimationBuilder.start(name ??'growXAnimation')
    .setEnter([
      style({transform: 'scaleX(0)'}),
      animate('110ms cubic-bezier(.7,.6,.5,1)', style({transform: 'scaleX(1)'}))
    ]).getTrigger()
}
