import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  animations: [fadeAnimation('50ms')]
})
export class CreatePostComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
