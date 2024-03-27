import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'account',
  templateUrl: 'account.component.html',
  styleUrl: 'account.component.scss',
  imports: [
    MatButton
  ],
  animations: [fadeAnimation()]
})
export class AccountComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
