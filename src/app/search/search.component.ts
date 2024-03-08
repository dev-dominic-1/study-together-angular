import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  selector: 'search',
  templateUrl: './search.component.html',
  animations: [fadeAnimation('50ms')]
})
export class SearchComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
