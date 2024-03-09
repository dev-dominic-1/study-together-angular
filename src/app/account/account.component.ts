import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  templateUrl: './account.component.html',
  selector: 'account',
  animations: [fadeAnimation()]
})
export class AccountComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
