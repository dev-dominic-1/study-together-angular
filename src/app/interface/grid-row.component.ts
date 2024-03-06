import {Component, Input} from "@angular/core";

@Component({
  standalone: true,
  template: `
    <div class="grid-row">
      <ng-content></ng-content>
    </div>
  `
})
export class GridRowComponent {

  @Input() cols?: (string|number)[]

}
