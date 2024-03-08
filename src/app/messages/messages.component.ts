import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  selector: 'messages',
  templateUrl: './messages.component.html',
  animations: [fadeAnimation()]
})
export class MessagesComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
