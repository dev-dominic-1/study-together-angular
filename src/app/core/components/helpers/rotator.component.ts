import {Component, Input} from "@angular/core";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  standalone: true,
  selector: 'rotator',
  templateUrl: './rotator.component.html',
  styleUrl: './rotator.component.sass',
  imports: [
    NgClass,
    NgStyle
  ],
})
export class RotatorComponent {

  @Input() rotated: boolean = false
  @Input() transitionTime: string = '0.2s'
  @Input() transitionCurve: string = 'ease-in-out'

}
