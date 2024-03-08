import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  templateUrl: './account.component.html',
  selector: 'account',
  animations: [fadeAnimation('50ms')]
})
export class AccountComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
