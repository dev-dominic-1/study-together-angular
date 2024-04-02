import {Component, Input} from "@angular/core";

@Component({
  standalone: true,
  selector: 'favorite-card',
  template: `
    <img [src]="src" [alt]="alt">
  `,
  styleUrl: 'favorite-card.compoent.scss'
})
export class FavoriteCardComponent {

  @Input({required: true}) src!: string
  @Input({required: true}) alt!: string

}
