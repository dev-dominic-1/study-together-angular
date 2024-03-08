import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  selector: 'messages',
  templateUrl: './messages.component.html',
  animations: [fadeAnimation('50ms')]
})
export class MessagesComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
