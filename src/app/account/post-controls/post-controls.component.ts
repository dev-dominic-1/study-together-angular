import {Component, EventEmitter, Input} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'post-controls',
  imports: [
    MatButton,
    NgClass
  ],
  templateUrl: 'post-controls.component.html',
  styles: `
    .block>*
      width: 50%
  `
})
export class PostControlsComponent {

  @Input() block: boolean = false
  @Input() justification: ('start' | 'center' | 'end' | 'space-around' | 'space-between') = 'end'

  clickEditProfile: EventEmitter<any> = new EventEmitter<any>()
  clickNewPost: EventEmitter<any> = new EventEmitter<any>()

}
