import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {MatRipple} from "@angular/material/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgClass} from "@angular/common";
import {MatIcon, MatIconModule} from "@angular/material/icon";

@Component({
  standalone: true,
  templateUrl: './nav-route.component.html',
  selector: 'nav-route',
  imports: [
    MatRipple,
    MatCard,
    MatCardContent,
    NgClass,
    MatIcon,
    MatIconModule
  ],
  styleUrl: './nav-route.component.sass'
})
export class NavRouteComponent {

  @Input({required: true}) route: string = '.'
  @Input() extras?: {}
  @Input({required: true}) icon: string = 'question_mark'
  @Input({required: true}) text?: string
  @Input() disabled: boolean = false

  constructor(private router: Router) {}

  async goTo (route?: string, extras?: {}) {
    console.log('GOTO', route ?? this.route)
    let r: any[] = [route ?? this.route]
    if (extras != null) r.push(extras)
    await this.router.navigate(r)
  }

}
