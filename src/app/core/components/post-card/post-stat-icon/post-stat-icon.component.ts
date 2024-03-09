import {Component, Input} from "@angular/core";
import {PostStat} from "./PostStat";
import {MatIcon} from "@angular/material/icon";
import {growXAnimation} from "../../../animations/animations";
import AnimationBuilder from "../../../animations/AnimationBuilder";
import {animate, keyframes, style} from "@angular/animations";
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'post-stat-icon',
  imports: [
    MatIcon,
    NgClass
  ],
  animations: [
    AnimationBuilder.start('expandAnimation')
      .setEnter([
        style({width: 0, opacity: 0}),
        animate('0.4s ease-out', style({width: '100px', opacity: 1}))
      ])
      .setLeave([
        style({opacity: 1}),
        animate('0.4s ease-out', style({width: 0, padding: 0, opacity: 0}))
      ]).getTrigger(),
  ],
  template: `
    <div class="wrapper mat-elevation-z4" [ngClass]="{'content-expanded': expanded}" (click)="expand()">
      <mat-icon>{{ postStat.icon }}</mat-icon>
      @if(expanded) {
        <div class="expanded-content mat-body-2 px-3" style="width: 100px" [@expandAnimation]>
          {{ postStat.text }}
        </div>
      }
    </div>
  `,
  styleUrl: './post-stat-icon.component.sass'
})
export class PostStatIconComponent {

  @Input({required: true}) postStat!:PostStat

  expanded: boolean = false

  expand () {
    this.expanded = !this.expanded
  }

}

