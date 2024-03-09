import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  animations: [fadeAnimation()]
})
export class NotificationsComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
