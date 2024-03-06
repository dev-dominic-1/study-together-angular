import {Component, Input, Output} from "@angular/core";
import {NgStyle} from "@angular/common";

/**
 * Simple component to wrap a grid layout
 */
@Component({
  standalone: true,
  selector: 'grid',
  template: `
    <div [ngStyle]="getGridLayout()">
      <ng-content></ng-content>
    </div>
  `,
  imports: [NgStyle]
})
export default class Grid {

  @Input() flex: boolean = false
  @Input() divider: string = 'fr'
  @Input({required: true}) cols: (string|number)[] = ['12fr']
  @Input() width: string = '100%'
  @Input() minWidth?: string
  @Input() maxWidth?: string
  @Input() alignSelf?: string
  @Input() justifyContent?: string
  @Input() margin?: string

  getGridLayout (): object {
    const gridTemplateString: string = this.cols.reduce((acc: string[], r): string[] => {
      if (typeof r === 'string' && ['auto', ''].includes(r)) return [...acc, 'auto']
      else if (typeof r === 'number' || Number(r)) return [...acc, `${r}${this.divider}`]
      return [...acc, r] // Assume the correct divider was used in `cols`
    }, []).join(' ')
    let style = {display: 'grid', 'grid-template-columns': gridTemplateString, width: this.width}
    const {minWidth, maxWidth, alignSelf, margin, justifyContent} = this
    Object.assign(style, {minWidth, maxWidth, alignSelf, margin, justifyContent})
    if (this.flex) style.display = 'flex'
    return style
  }

}
